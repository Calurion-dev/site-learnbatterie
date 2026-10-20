"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "learnbatterie-metronome";
const MIN_BPM = 30;
const MAX_BPM = 300;
const DEFAULT_BPM = 100;
const DEFAULT_VOLUME = 0.6;
const SCHEDULE_AHEAD = 0.12;
const LOOKAHEAD_MS = 25;

const TIME_SIGNATURES = ["2/4", "3/4", "4/4", "6/8"] as const;
type TimeSignature = (typeof TIME_SIGNATURES)[number];

const SUBDIVISIONS = [
  { value: "quarter", label: "Noire", short: "Noire", notes: 1 },
  { value: "eighth", label: "Croche", short: "Croche", notes: 2 },
  { value: "triplet", label: "Triolet", short: "Triolet", notes: 3 },
  { value: "sixteenth", label: "Double croche", short: "Double", notes: 4 },
] as const;
type Subdivision = (typeof SUBDIVISIONS)[number]["value"];

type Settings = {
  bpm: number;
  timeSignature: TimeSignature;
  subdivision: Subdivision;
  accentFirst: boolean;
  volume: number;
};

type AudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function scheduleClick(
  context: AudioContext,
  time: number,
  frequency: number,
  level: number,
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(Math.max(level, 0.0002), time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.045);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(time);
  oscillator.stop(time + 0.06);
}

export function Metronome() {
  const [bpm, setBpm] = useState(DEFAULT_BPM);
  const [bpmText, setBpmText] = useState(String(DEFAULT_BPM));
  const [timeSignature, setTimeSignature] = useState<TimeSignature>("4/4");
  const [subdivision, setSubdivision] = useState<Subdivision>("quarter");
  const [accentFirst, setAccentFirst] = useState(true);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [currentSubdivision, setCurrentSubdivision] = useState(0);
  const [measure, setMeasure] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef(0);
  const beatRef = useRef(0);
  const subdivisionRef = useRef(0);
  const measureRef = useRef(0);
  const runIdRef = useRef(0);
  const tapTimesRef = useRef<number[]>([]);

  const settingsRef = useRef<Settings>({
    bpm,
    timeSignature,
    subdivision,
    accentFirst,
    volume,
  });

  useEffect(() => {
    settingsRef.current = { bpm, timeSignature, subdivision, accentFirst, volume };
  }, [bpm, timeSignature, subdivision, accentFirst, volume]);

  useEffect(() => {
    setBpmText(String(bpm));
  }, [bpm]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Settings>;
        if (typeof parsed.bpm === "number") {
          const next = clamp(Math.round(parsed.bpm), MIN_BPM, MAX_BPM);
          setBpm(next);
          setBpmText(String(next));
        }
        if (parsed.timeSignature && TIME_SIGNATURES.includes(parsed.timeSignature)) {
          setTimeSignature(parsed.timeSignature);
        }
        if (
          parsed.subdivision &&
          SUBDIVISIONS.some((item) => item.value === parsed.subdivision)
        ) {
          setSubdivision(parsed.subdivision as Subdivision);
        }
        if (typeof parsed.accentFirst === "boolean") {
          setAccentFirst(parsed.accentFirst);
        }
        if (typeof parsed.volume === "number") {
          setVolume(clamp(parsed.volume, 0, 1));
        }
      }
    } catch {
      // Un réglage illisible ne doit pas empêcher le métronome de démarrer.
    } finally {
      setSettingsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!settingsLoaded) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ bpm, timeSignature, subdivision, accentFirst, volume }),
      );
    } catch {
      // Le stockage local peut être bloqué (navigation privée).
    }
  }, [settingsLoaded, bpm, timeSignature, subdivision, accentFirst, volume]);

  const scheduler = useCallback(() => {
    const context = audioContextRef.current;
    if (!context) return;

    const settings = settingsRef.current;
    const beatsPerMeasure = Number(settings.timeSignature.split("/")[0]);
    const notesPerBeat =
      SUBDIVISIONS.find((item) => item.value === settings.subdivision)?.notes ?? 1;
    const secondsPerBeat = 60 / settings.bpm;

    while (nextNoteTimeRef.current < context.currentTime + SCHEDULE_AHEAD) {
      if (beatRef.current >= beatsPerMeasure) beatRef.current = 0;
      if (subdivisionRef.current >= notesPerBeat) subdivisionRef.current = 0;

      const beat = beatRef.current;
      const sub = subdivisionRef.current;
      const isBeat = sub === 0;
      const isAccent = isBeat && beat === 0 && settings.accentFirst;
      const frequency = isAccent ? 1400 : isBeat ? 950 : 700;
      const level = (isAccent ? 0.5 : isBeat ? 0.3 : 0.16) * settings.volume;
      const time = nextNoteTimeRef.current;
      const displayMeasure = measureRef.current + 1;
      const runId = runIdRef.current;

      if (level > 0.001) {
        scheduleClick(context, time, frequency, level);
      }

      window.setTimeout(
        () => {
          if (runIdRef.current !== runId) return;
          setCurrentBeat(beat);
          setCurrentSubdivision(sub);
          if (isBeat) setMeasure(displayMeasure);
        },
        Math.max(0, (time - context.currentTime) * 1000),
      );

      nextNoteTimeRef.current += secondsPerBeat / notesPerBeat;
      subdivisionRef.current += 1;
      if (subdivisionRef.current >= notesPerBeat) {
        subdivisionRef.current = 0;
        beatRef.current += 1;
        if (beatRef.current >= beatsPerMeasure) {
          beatRef.current = 0;
          measureRef.current += 1;
        }
      }
    }
  }, []);

  const stop = useCallback(() => {
    runIdRef.current += 1;
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const context = audioContextRef.current;
    audioContextRef.current = null;
    if (context && context.state !== "closed") {
      void context.close().catch(() => undefined);
    }
    setIsPlaying(false);
    setCurrentBeat(0);
    setCurrentSubdivision(0);
    setMeasure(0);
  }, []);

  const start = useCallback(async () => {
    if (isPlaying) return;

    try {
      const AudioConstructor =
        window.AudioContext ??
        (window as AudioWindow).webkitAudioContext;

      if (!AudioConstructor) {
        throw new Error("AudioContext indisponible");
      }

      let context = audioContextRef.current;
      if (!context || context.state === "closed") {
        context = new AudioConstructor();
        audioContextRef.current = context;
      }

      await context.resume();
      runIdRef.current += 1;
      beatRef.current = 0;
      subdivisionRef.current = 0;
      measureRef.current = 0;
      nextNoteTimeRef.current = context.currentTime + 0.08;

      setCurrentBeat(0);
      setCurrentSubdivision(0);
      setMeasure(0);
      setIsPlaying(true);
      setError(null);

      scheduler();
      timerRef.current = window.setInterval(scheduler, LOOKAHEAD_MS);
    } catch {
      const context = audioContextRef.current;
      audioContextRef.current = null;
      if (context && context.state !== "closed") {
        void context.close().catch(() => undefined);
      }
      setIsPlaying(false);
      setError(
        "Le métronome n'a pas pu démarrer. Vérifie que le son est activé, puis réessaie.",
      );
    }
  }, [isPlaying, scheduler]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stop();
    } else {
      void start();
    }
  }, [isPlaying, start, stop]);

  const tapTempo = useCallback(() => {
    const now = performance.now();
    const recent = tapTimesRef.current.filter((time) => now - time < 3000);
    recent.push(now);
    tapTimesRef.current = recent.slice(-5);

    if (recent.length < 2) return;

    const intervals = recent
      .slice(1)
      .map((time, index) => time - recent[index]);
    const average = intervals.reduce((sum, value) => sum + value, 0) / intervals.length;
    if (average <= 0) return;

    const next = clamp(Math.round(60000 / average), MIN_BPM, MAX_BPM);
    setBpm(next);
    setBpmText(String(next));
  }, []);

  useEffect(() => {
    return () => {
      runIdRef.current += 1;
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      const context = audioContextRef.current;
      audioContextRef.current = null;
      if (context && context.state !== "closed") {
        void context.close().catch(() => undefined);
      }
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest("button, input, select, textarea, a, summary")) return;

      if (event.code === "Space") {
        event.preventDefault();
        if (!event.repeat) togglePlay();
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setBpm((value) => clamp(value + 1, MIN_BPM, MAX_BPM));
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setBpm((value) => clamp(value - 1, MIN_BPM, MAX_BPM));
        return;
      }

      if (event.key.toLowerCase() === "t" && !event.repeat) {
        event.preventDefault();
        tapTempo();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [togglePlay, tapTempo]);

  const beatsPerMeasure = Number(timeSignature.split("/")[0]);
  const activeSubdivision =
    SUBDIVISIONS.find((item) => item.value === subdivision) ?? SUBDIVISIONS[0];

  function selectTimeSignature(next: TimeSignature) {
    setTimeSignature(next);
    beatRef.current = 0;
    subdivisionRef.current = 0;
    measureRef.current = 0;
    setCurrentBeat(0);
    setCurrentSubdivision(0);
    setMeasure(0);
  }

  function selectSubdivision(next: Subdivision) {
    setSubdivision(next);
    subdivisionRef.current = 0;
    setCurrentSubdivision(0);
  }

  function commitBpmText() {
    const parsed = Number(bpmText);
    const next = Number.isFinite(parsed)
      ? clamp(Math.round(parsed), MIN_BPM, MAX_BPM)
      : bpm;
    setBpm(next);
    setBpmText(String(next));
  }

  function resetSettings() {
    setBpm(DEFAULT_BPM);
    setBpmText(String(DEFAULT_BPM));
    setTimeSignature("4/4");
    setSubdivision("quarter");
    setAccentFirst(true);
    setVolume(DEFAULT_VOLUME);
    beatRef.current = 0;
    subdivisionRef.current = 0;
    measureRef.current = 0;
    setCurrentBeat(0);
    setCurrentSubdivision(0);
    setMeasure(0);
    tapTimesRef.current = [];
  }

  return (
    <section className="metronome-app" aria-label="Métronome">
      <div className="metronome-top">
        <div>
          <span className="eyebrow">Tempo</span>
          <p className="metronome-bpm">
            {bpm}
            <span>BPM</span>
          </p>
        </div>

        <div className="metronome-transport">
          <button
            className="button metronome-play"
            type="button"
            onClick={togglePlay}
            aria-pressed={isPlaying}
            aria-keyshortcuts="Space"
          >
            {isPlaying ? "Arrêter" : "Démarrer"}
          </button>
          <button
            className="button button-outline"
            type="button"
            onClick={tapTempo}
            aria-keyshortcuts="T"
          >
            Tap tempo
          </button>
        </div>
      </div>

      <p className="metronome-status" aria-live="polite">
        {error
          ? "Erreur audio"
          : isPlaying
            ? `Lecture à ${bpm} BPM, ${timeSignature}, ${activeSubdivision.label}`
            : "Métronome arrêté"}
      </p>

      <div className="metronome-display">
        <ol
          className="metronome-beats"
          aria-label={`${beatsPerMeasure} temps par mesure`}
        >
          {Array.from({ length: beatsPerMeasure }).map((_, index) => (
            <li
              className={`metronome-beat${index === 0 ? " is-first" : ""}${
                isPlaying && currentBeat === index ? " is-active" : ""
              }`}
              key={index}
              aria-current={
                isPlaying && currentBeat === index ? "true" : undefined
              }
            >
              {index + 1}
            </li>
          ))}
        </ol>

        <div className="metronome-readout" aria-hidden="true">
          <span>Mesure {isPlaying ? measure : "—"}</span>
          <span>
            Temps {isPlaying ? currentBeat + 1 : "—"} / {beatsPerMeasure}
          </span>
          <span>
            Subdivision {isPlaying ? currentSubdivision + 1 : "—"} /{" "}
            {activeSubdivision.notes}
          </span>
        </div>
      </div>

      <div className="metronome-settings">
        <fieldset className="metronome-field">
          <legend>Tempo</legend>
          <div className="metronome-bpm-controls">
            <button
              className="metronome-step"
              type="button"
              onClick={() =>
                setBpm((value) => clamp(value - 5, MIN_BPM, MAX_BPM))
              }
              aria-label="Diminuer le tempo de 5 BPM"
            >
              −5
            </button>
            <input
              type="range"
              min={MIN_BPM}
              max={MAX_BPM}
              step={1}
              value={bpm}
              onChange={(event) => setBpm(Number(event.target.value))}
              aria-label="Tempo en battements par minute"
            />
            <button
              className="metronome-step"
              type="button"
              onClick={() =>
                setBpm((value) => clamp(value + 5, MIN_BPM, MAX_BPM))
              }
              aria-label="Augmenter le tempo de 5 BPM"
            >
              +5
            </button>
            <label className="metronome-number">
              <span className="sr-only">Tempo exact en BPM</span>
              <input
                type="number"
                min={MIN_BPM}
                max={MAX_BPM}
                value={bpmText}
                onChange={(event) => {
                  const value = event.target.value;
                  setBpmText(value);
                  const parsed = Number(value);
                  if (
                    Number.isFinite(parsed) &&
                    parsed >= MIN_BPM &&
                    parsed <= MAX_BPM
                  ) {
                    setBpm(Math.round(parsed));
                  }
                }}
                onBlur={commitBpmText}
                onKeyDown={(event) => {
                  if (event.key === "Enter") event.currentTarget.blur();
                }}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="metronome-field">
          <legend>Signature</legend>
          <div className="metronome-segment">
            {TIME_SIGNATURES.map((signature) => (
              <button
                className={`metronome-value${signature === timeSignature ? " is-selected" : ""}`}
                type="button"
                key={signature}
                onClick={() => selectTimeSignature(signature)}
                aria-pressed={signature === timeSignature}
              >
                {signature}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="metronome-field">
          <legend>Subdivision</legend>
          <div className="metronome-segment">
            {SUBDIVISIONS.map((item) => (
              <button
                className={`metronome-value${item.value === subdivision ? " is-selected" : ""}`}
                type="button"
                key={item.value}
                onClick={() => selectSubdivision(item.value)}
                aria-pressed={item.value === subdivision}
              >
                {item.short}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="metronome-field">
          <legend>Volume</legend>
          <div className="metronome-bpm-controls">
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={Math.round(volume * 100)}
              onChange={(event) => setVolume(Number(event.target.value) / 100)}
              aria-label="Volume du métronome"
            />
            <span className="metronome-value">{Math.round(volume * 100)} %</span>
          </div>
        </fieldset>

        <fieldset className="metronome-field">
          <legend>Options</legend>
          <div className="metronome-segment">
            <button
              className={`metronome-toggle${accentFirst ? " is-on" : ""}`}
              type="button"
              onClick={() => setAccentFirst((value) => !value)}
              aria-pressed={accentFirst}
            >
              Accent sur le 1
            </button>
            <button
              className="metronome-toggle"
              type="button"
              onClick={resetSettings}
            >
              Réinitialiser
            </button>
          </div>
        </fieldset>
      </div>

      <div className="metronome-shortcuts">
        <strong>Raccourcis :</strong> <kbd>Espace</kbd> démarrer / arrêter ·{" "}
        <kbd>↑</kbd> <kbd>↓</kbd> tempo · <kbd>T</kbd> tap tempo
      </div>

      {error ? (
        <p className="metronome-error" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
