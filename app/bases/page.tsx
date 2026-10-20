import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Les 8 leçons de base",
  description:
    "Tenir les baguettes, posture, rebond, lecture rythmique, métronome, échauffement et organisation des séances : les bases avant les rudiments.",
};

export default function BasesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Bases" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Avant les rudiments</span>
              <h1 className="page-title">Les fondations, sans jargon.</h1>
              <p className="lede">
                Huit leçons courtes pour tenir les baguettes, comprendre le
                rebond, lire un rythme simple et construire une séance qui
                tient debout.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Ordre conseillé</strong>
              Lis les leçons 1 à 3 avant de commencer le programme. Les autres
              peuvent être lues au fil des semaines.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {lessons.map((lesson) => (
              <article className="card" key={lesson.slug}>
                <span className="card-number">
                  Leçon {String(lesson.order).padStart(2, "0")}
                </span>
                <h2 className="card-title" style={{ fontSize: "1.15rem" }}>
                  {lesson.title}
                </h2>
                <p className="card-text">{lesson.summary}</p>
                <div className="card-footer">
                  <span>{lesson.readingTime} min de lecture</span>
                  <Link className="card-link" href={`/bases/${lesson.slug}/`}>
                    Lire la leçon
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Le minimum vital</span>
            <h2>Pas besoin de tout lire avant de jouer.</h2>
          </div>
          <div className="prose">
            <p>
              Tu peux commencer par la leçon 1, puis passer directement au
              single stroke roll. Les autres leçons répondront aux questions
              qui apparaissent en pratiquant.
            </p>
            <p>
              Le site est pensé pour être utilisé devant un pad ou une batterie,
              pas comme un livre à lire d&apos;un trait. Ouvre une leçon, essaie
              l&apos;exercice, puis reviens plus tard.
            </p>
            <div className="button-row">
              <Link className="button" href="/bases/tenir-baguettes/">
                Commencer par la leçon 1
              </Link>
              <Link className="text-link" href="/rudiments/single-stroke-roll/">
                Voir le premier rudiment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
