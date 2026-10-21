type DrumKitIllustrationProps = {
  className?: string;
};

export function DrumKitIllustration({ className }: DrumKitIllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Sol */}
        <path d="M14 218h332" opacity="0.3" strokeWidth="2" />

        {/* Charley */}
        <ellipse cx="38" cy="76" rx="28" ry="6" strokeWidth="2.2" />
        <ellipse cx="38" cy="84" rx="28" ry="6" strokeWidth="2.2" />
        <path d="M38 58v18M38 84v134" />
        <path d="M38 198 22 218M38 198l16 20M38 198v20" />

        {/* Caisse claire */}
        <ellipse cx="96" cy="128" rx="36" ry="10" />
        <path d="M60 128v18M132 128v18" />
        <ellipse cx="96" cy="146" rx="36" ry="10" />
        <path d="M96 156v44M96 200l-17 18M96 200l17 18M96 200v18" />

        {/* Grosse caisse */}
        <circle cx="184" cy="156" r="56" />
        <circle
          className="drum-kit-accent"
          cx="184"
          cy="156"
          r="42"
          strokeWidth="2.4"
        />
        <path d="M184 100v8M184 204v8M128 156h8M232 156h8M144 116l6 6M224 116l-6 6M144 196l6-6M224 196l-6-6" />
        <path d="M138 200l-9 18M230 200l9 18" />
        <path d="M170 216h28M184 204v12" />

        {/* Toms suspendus */}
        <ellipse cx="150" cy="80" rx="26" ry="8" />
        <path d="M124 80v18M176 80v18" />
        <ellipse cx="150" cy="98" rx="26" ry="8" />
        <path d="M156 104l12 8" />

        <ellipse cx="214" cy="80" rx="26" ry="8" />
        <path d="M188 80v18M240 80v18" />
        <ellipse cx="214" cy="98" rx="26" ry="8" />
        <path d="M208 104l-12 8" />

        {/* Tom basse */}
        <ellipse cx="274" cy="142" rx="30" ry="9" />
        <path d="M244 142v32M304 142v32" />
        <ellipse cx="274" cy="174" rx="30" ry="9" />
        <path d="M248 182l-10 36M300 182l10 36M274 183v35" />

        {/* Cymbale crash */}
        <ellipse
          cx="316"
          cy="66"
          rx="35"
          ry="6.5"
          strokeWidth="2.2"
          transform="rotate(-8 316 66)"
        />
        <circle cx="316" cy="66" r="3" fill="currentColor" stroke="none" />
        <path d="M316 66 332 198M332 198l-14 20M332 198l14 20M332 198v20" />
      </g>
    </svg>
  );
}
