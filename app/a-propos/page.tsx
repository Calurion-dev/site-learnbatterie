import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "LearnBatterie est un site pédagogique gratuit pour apprendre les rudiments de la batterie aux débutants, sans publicité ni compte.",
};

export default function AProposPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "À propos" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Le projet</span>
              <h1 className="page-title">Apprendre, pas vendre.</h1>
              <p className="lede">
                LearnBatterie est un site gratuit qui apprend les rudiments de
                la batterie aux débutants. Pas de publicité, pas d&apos;affiliation,
                pas de compte, pas de promesse de devenir pro en trois semaines.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Version actuelle</strong>
              MVP pédagogique : 40 fiches, 8 leçons, 12 exercices, un programme
              de 12 semaines et des ressources imprimables.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Pourquoi ce site</span>
            <h2>Les rudiments sont la grammaire de l&apos;instrument.</h2>
          </div>
          <div className="prose">
            <p>
              Un débutant trouve beaucoup de vidéos, mais peu de parcours. Il ne
              sait pas quel rudiment travailler, à quel tempo, ni comment savoir
              s&apos;il progresse. Les méthodes papier sont excellentes, mais
              souvent en anglais et sans mode d&apos;emploi pour quelqu&apos;un
              qui commence seul.
            </p>
            <p>
              Ce site propose un chemin simple : les bases, puis les rudiments,
              puis l&apos;application musicale. Chaque fiche est courte, concrète
              et se termine par un critère de validation.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Les principes</span>
              <h2>Ce que tu peux attendre, et ce que tu ne trouveras pas.</h2>
            </div>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Gratuit et sans contrepartie</h3>
              <p className="card-text">
                Aucun lien affilié, aucune publicité, aucune boutique. Le site
                n&apos;a pas de modèle économique et ne cherche pas à le devenir.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">La pratique d&apos;abord</h3>
              <p className="card-text">
                Chaque page se termine par une action : jouer, compter, répéter,
                enregistrer. La lecture seule ne fait pas progresser.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">Honnête sur les limites</h3>
              <p className="card-text">
                Pas d&apos;audio pour l&apos;instant, pas de correction
                automatique, pas de professeur remplacé. Le site est un point de
                départ, pas une certification.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Propriété et sources</span>
            <h2>Un contenu original, protégé.</h2>
          </div>
          <div className="prose">
            <p>
              Les textes, fiches, schémas, séquences de sticking et ressources
              imprimables sont créés pour LearnBatterie. Ils sont protégés par le
              droit d&apos;auteur et ne peuvent pas être republiés sans
              autorisation écrite.
            </p>
            <p>
              Les 40 rudiments sont des formules traditionnelles issues de la
              Percussive Arts Society. Les méthodes de référence citées (Stick
              Control, Syncopation, Realistic Rock) ne sont pas reproduites.
            </p>
            <p>
              Une relecture par un professeur de batterie est prévue dans une
              phase ultérieure. En attendant, les tempos et les conseils sont
              indicatifs et doivent être adaptés à ton niveau.
            </p>
            <div className="button-row">
              <Link className="button" href="/programme/">
                Commencer le programme
              </Link>
              <Link className="button button-secondary" href="/contact/">
                Poser une question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
