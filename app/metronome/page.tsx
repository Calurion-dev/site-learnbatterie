import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Metronome } from "@/components/Metronome";
import { MetronomeIcon } from "@/components/MetronomeIcon";

export const metadata: Metadata = {
  title: "Métronome en ligne",
  description:
    "Métronome gratuit et fonctionnel : tempo de 30 à 300 BPM, signatures 2/4, 3/4, 4/4 et 6/8, subdivisions, accent, tap tempo et volume.",
};

export default function MetronomePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Métronome" }]} />
          <div className="page-hero-grid">
            <div>
              <div className="metronome-title-row">
                <span className="metronome-hero-icon" aria-hidden="true">
                  <MetronomeIcon size={58} />
                </span>
                <h1 className="page-title">Métronome</h1>
              </div>
              <p className="lede">
                Un métronome gratuit qui tourne dans ton navigateur, sans compte
                et sans fichier audio. Règle le tempo, la signature et la
                subdivision, puis travaille huit mesures propres.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Fonctionne hors ligne</strong>
              Le clic est synthétisé par le navigateur avec la Web Audio API.
              Aucun son n&apos;est téléchargé.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Metronome />
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Mode d&apos;emploi</span>
            <h2>Trois réglages, puis tu joues.</h2>
            <p className="lede">
              Le métronome sert à rendre le tempo visible et audible. Il ne sert
              pas à jouer vite : il sert à jouer stable.
            </p>
          </div>
          <div>
            <ol className="step-list">
              <li>
                <strong>Choisis un tempo.</strong> Commence à 60 ou 70 BPM. Tu
                peux utiliser le curseur, les boutons −5/+5, le champ exact ou
                le tap tempo.
              </li>
              <li>
                <strong>Choisis une signature.</strong> 4/4 pour la plupart des
                grooves binaires, 3/4 pour une valse, 6/8 pour un balancement
                ternaire.
              </li>
              <li>
                <strong>Choisis une subdivision.</strong> Noire pour sentir le
                temps, croche pour les grooves, triolet pour le shuffle, double
                pour les fills.
              </li>
              <li>
                <strong>Joue huit mesures.</strong> Si tu te perds, arrête-toi,
                baisse de 5 BPM et recommence. La régularité avant la vitesse.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Bonnes habitudes</span>
              <h2>Utiliser le métronome sans se crisper.</h2>
            </div>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Commence lentement</h3>
              <p className="card-text">
                Un tempo trop rapide masque les erreurs. Choisis un tempo où tu
                peux jouer huit mesures sans tension, même si cela semble très
                lent.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">Accentue le premier temps</h3>
              <p className="card-text">
                L&apos;accent sur le 1 aide à sentir le cycle de la mesure.
                Désactive-le quand tu travailles l&apos;indépendance ou un
                groove qui ne marque pas le 1.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">Monte par paliers</h3>
              <p className="card-text">
                Quand huit mesures passent proprement, monte de 5 BPM. Si tu
                échoues, redescends. Le progrès vient de la répétition propre,
                pas du forcing.
              </p>
            </article>
          </div>
          <div className="button-row">
            <Link className="button" href="/programme/">
              Suivre le programme de 12 semaines
            </Link>
            <Link className="button button-secondary" href="/bases/metronome/">
              Lire la leçon sur le métronome
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
