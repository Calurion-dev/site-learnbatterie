import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Glossaire de la batterie",
  description:
    "Soixante termes de batterie expliqués simplement : rudiments, rythme, matériel et pratique.",
};

function slugify(term: string): string {
  return term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function GlossairePage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "fr"));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Glossaire" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Le vocabulaire</span>
              <h1 className="page-title">Parler batterie sans jargon.</h1>
              <p className="lede">
                Soixante termes pour comprendre les fiches, les partitions et
                les conversations de batteurs. Chaque définition est courte et
                renvoie au contenu lié quand il existe.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Astuce</strong>
              Utilise la recherche du site pour retrouver un terme, un rudiment
              ou un exercice en quelques secondes.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <dl className="glossary-list">
            {sorted.map((entry) => (
              <div className="glossary-item" id={slugify(entry.term)} key={entry.term}>
                <dt>{entry.term}</dt>
                <dd>{entry.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
