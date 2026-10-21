import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DrumKitIllustration } from "@/components/DrumKitIllustration";

export const metadata: Metadata = {
  title: "Les parties de la batterie",
  description:
    "Repère les éléments essentiels d'une batterie : grosse caisse, caisse claire, charley, toms et cymbales.",
};

const parts = [
  {
    name: "Grosse caisse",
    family: "Fût",
    cue: "Le grand fût au centre, joué avec une pédale.",
  },
  {
    name: "Caisse claire",
    family: "Fût",
    cue: "Le fût fin à gauche, au son clair et sec.",
  },
  {
    name: "Charley",
    family: "Cymbales",
    cue: "Les deux cymbales à gauche, actionnées au pied.",
  },
  {
    name: "Toms suspendus",
    family: "Fûts",
    cue: "Les deux petits fûts au-dessus de la grosse caisse.",
  },
  {
    name: "Tom basse",
    family: "Fût",
    cue: "Le fût profond posé au sol, à droite.",
  },
  {
    name: "Cymbale crash",
    family: "Cymbale",
    cue: "La cymbale inclinée pour marquer les accents.",
  },
  {
    name: "Cymbale ride",
    family: "Cymbale",
    cue: "La grande cymbale à droite, pour les motifs réguliers.",
  },
];

export default function BatteriePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Batterie" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Anatomie</span>
              <h1 className="page-title">Les parties de la batterie.</h1>
              <p className="lede">
                Un kit se lit comme un petit orchestre. Repère les éléments
                essentiels avant de t&apos;installer derrière les fûts.
              </p>
            </div>
            <div className="page-hero-visual">
              <DrumKitIllustration className="page-hero-drum" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Repères</span>
              <h2>Chaque élément a un rôle.</h2>
            </div>
            <p>
              Les descriptions détaillées viendront ensuite. Voici déjà les noms
              et les repères visuels pour te retrouver dans un kit.
            </p>
          </div>

          <div className="card-grid">
            {parts.map((part) => (
              <article className="card" key={part.name}>
                <div className="card-meta">
                  <span className="tag">{part.family}</span>
                </div>
                <h3 className="card-title">{part.name}</h3>
                <p className="card-text">{part.cue}</p>
              </article>
            ))}
          </div>

          <div className="button-row">
            <Link className="button" href="/programme/">
              Voir le programme
            </Link>
            <Link className="text-link" href="/bases/">
              Commencer par les bases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
