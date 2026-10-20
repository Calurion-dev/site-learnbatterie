import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickingGrid } from "@/components/StickingGrid";
import { exercises } from "@/data/exercises";
import { getRudiment } from "@/data/rudiments";

export const metadata: Metadata = {
  title: "Exercices d'application",
  description:
    "12 exercices de batterie pour appliquer les rudiments dans des grooves et des fills, avec sticking, tempo et étapes de travail.",
};

export default function ExercicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Exercices" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">De l'exercice à la musique</span>
              <h1 className="page-title">Faire sonner les rudiments.</h1>
              <p className="lede">
                Un rudiment isolé ne suffit pas. Ces 12 exercices le placent
                dans un groove, un fill ou une phrase de morceau, avec un tempo
                de travail et des étapes simples.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Comment procéder</strong>
              Joue d&apos;abord le groove de base, puis ajoute l&apos;ornement.
              Si ça se casse, ralentis de 10 BPM.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container exercise-list">
          {exercises.map((exercise) => {
            const rudiment = getRudiment(exercise.rudimentSlug);
            return (
              <article className="exercise-card" id={exercise.slug} key={exercise.slug}>
                <div className="exercise-head">
                  <h2>{exercise.title}</h2>
                  <div className="exercise-meta">
                    <span className="tag tag-accent">Niveau {exercise.level}</span>
                    <span className="tag">{exercise.tempo} BPM</span>
                    {rudiment ? (
                      <Link className="tag" href={`/rudiments/${rudiment.slug}/`}>
                        {rudiment.name}
                      </Link>
                    ) : null}
                  </div>
                </div>
                <p>{exercise.description}</p>

                <StickingGrid
                  sticking={exercise.sticking}
                  counts={exercise.counts}
                  label="Sticking de l'exercice"
                />

                <div className="exercise-grid">
                  <div>
                    <h3>Étapes</h3>
                    <ol className="step-list">
                      {exercise.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3>Conseil</h3>
                    <div className="callout callout-tip">
                      <p>{exercise.tip}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
