import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { rudiments } from "@/data/rudiments";
import { familyDescriptions, familyLabels, levelLabels } from "@/lib/site";
import type { Family } from "@/lib/types";

export const metadata: Metadata = {
  title: "Les 40 rudiments de batterie",
  description:
    "Les 40 rudiments internationaux expliqués aux débutants : rolls, diddles, flams et drags, avec sticking, tempo de travail et exercices.",
};

const families: Family[] = ["rolls", "diddles", "flams", "drags"];

export default function RudimentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Rudiments" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">La bibliothèque</span>
              <h1 className="page-title">Les 40 rudiments, sans mystère.</h1>
              <p className="lede">
                Chaque fiche donne une séquence de sticking, un tempo de départ,
                un tempo cible et les erreurs à éviter. Commence par les
                rudiments de niveau 1, puis avance dans l&apos;ordre du programme.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Comment lire une fiche</strong>
              R = main droite, L = main gauche, F = flam, D = drag. Une
              séquence simplifiée pour visualiser le geste, pas une partition
              complète.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice">
            <strong>Important :</strong> les 40 rudiments ne se maîtrisent pas en
            une semaine. Le programme de 12 semaines en couvre 12 en profondeur
            et introduit les autres. Les 40 fiches restent disponibles pour la
            suite.
          </div>

          {families.map((family) => {
            const familyRudiments = rudiments.filter((rudiment) => rudiment.family === family);
            return (
              <section className="family-section" key={family} id={family}>
                <div className="family-head">
                  <div>
                    <span className="eyebrow">{familyRudiments.length} rudiments</span>
                    <h2>{familyLabels[family]}</h2>
                  </div>
                  <p>{familyDescriptions[family]}</p>
                </div>

                <div className="rudiment-grid">
                  {familyRudiments.map((rudiment) => {
                    const globalIndex = rudiments.findIndex(
                      (item) => item.slug === rudiment.slug,
                    );
                    return (
                      <Link
                        className="rudiment-row"
                        href={`/rudiments/${rudiment.slug}/`}
                        key={rudiment.slug}
                      >
                        <span className="rudiment-row-index">
                          {String(globalIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="rudiment-row-body">
                          <strong>{rudiment.name}</strong>
                          <span>{rudiment.summary}</span>
                        </span>
                        <span className="rudiment-row-level">
                          N{rudiment.level}
                          <br />
                          {levelLabels[rudiment.level]}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Ordre de travail</span>
            <h2>Ne commence pas par le plus spectaculaire.</h2>
          </div>
          <div className="prose">
            <p>
              Les rudiments de niveau 1 sont les fondations : single stroke,
              double stroke, single paradiddle, flam, drag et ratamacue. Les
              autres viendront naturellement quand ces gestes seront stables.
            </p>
            <p>
              Si un rudiment te résiste, reviens au précédent. La maîtrise est
              cumulative : un double stroke propre rend tous les rolls plus
              faciles.
            </p>
            <div className="button-row">
              <Link className="button" href="/programme/">
                Suivre le programme
              </Link>
              <Link className="button button-secondary" href="/rudiments/single-stroke-roll/">
                Commencer par le single stroke roll
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
