import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickingGrid } from "@/components/StickingGrid";
import {
  familyMistakes,
  familyTips,
  getRudiment,
  getRudimentIndex,
  rudiments,
} from "@/data/rudiments";
import { familyLabels, levelLabels } from "@/lib/site";

type RudimentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rudiments.map((rudiment) => ({ slug: rudiment.slug }));
}

export async function generateMetadata({ params }: RudimentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const rudiment = getRudiment(slug);
  if (!rudiment) return { title: "Rudiment introuvable" };
  return {
    title: `${rudiment.name} — rudiment de batterie`,
    description: `${rudiment.summary} Sticking, tempo de travail et erreurs fréquentes.`,
  };
}

export default async function RudimentPage({ params }: RudimentPageProps) {
  const { slug } = await params;
  const rudiment = getRudiment(slug);
  if (!rudiment) notFound();

  const index = getRudimentIndex(slug);
  const previous = index > 0 ? rudiments[index - 1] : undefined;
  const next = index < rudiments.length - 1 ? rudiments[index + 1] : undefined;
  const tips = rudiment.tips ?? familyTips[rudiment.family];
  const mistakes = rudiment.mistakes ?? familyMistakes[rudiment.family];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Rudiments", href: "/rudiments/" },
              { label: rudiment.name },
            ]}
          />
          <div className="page-hero-grid">
            <div>
              <div className="card-meta">
                <span className="tag tag-accent">{familyLabels[rudiment.family]}</span>
                <span className="tag">Niveau {rudiment.level}</span>
                <span className="tag">{levelLabels[rudiment.level]}</span>
              </div>
              <h1 className="page-title">{rudiment.name}</h1>
              <p className="lede">{rudiment.summary}</p>
            </div>
            <aside className="page-hero-aside">
              <strong>Tempo de travail</strong>
              Départ {rudiment.tempoStart} BPM · cible {rudiment.tempoTarget} BPM.
              Monte seulement quand huit mesures passent sans erreur.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main prose">
            <p className="lead-answer">{rudiment.description}</p>

            <StickingGrid
              sticking={rudiment.sticking}
              counts={rudiment.counts}
              label={`Sticking du ${rudiment.name}`}
            />

            <div className="callout">
              <h3>Comment le travailler</h3>
              <ol className="step-list">
                {rudiment.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <h2>Conseils</h2>
            <ul>
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <h2>Erreurs fréquentes</h2>
            <ul>
              {mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>

            <h2>Application musicale</h2>
            <p>{rudiment.application}</p>

            <div className="callout callout-tip">
              <h3>Critère de validation</h3>
              <p>
                Joue huit mesures consécutives au tempo cible, sans tension et
                avec un volume égal entre les mains. Si tu échoues, redescends
                de 5 BPM.
              </p>
            </div>

            <p className="muted small">
              Pas d&apos;audio pour l&apos;instant. Travaille avec un métronome
              ou compte à voix haute. Les enregistrements arriveront dans une
              prochaine version.
            </p>

            <nav className="button-row" aria-label="Navigation entre les rudiments">
              {previous ? (
                <Link className="button button-secondary" href={`/rudiments/${previous.slug}/`}>
                  ← {previous.name}
                </Link>
              ) : null}
              {next ? (
                <Link className="button" href={`/rudiments/${next.slug}/`}>
                  {next.name} →
                </Link>
              ) : null}
            </nav>
          </article>

          <aside className="detail-aside">
            <h2>Fiche technique</h2>
            <dl>
              <dt>Famille</dt>
              <dd>{familyLabels[rudiment.family]}</dd>
              <dt>Niveau</dt>
              <dd>
                {rudiment.level} — {levelLabels[rudiment.level]}
              </dd>
              <dt>Tempo de départ</dt>
              <dd>{rudiment.tempoStart} BPM</dd>
              <dt>Tempo cible</dt>
              <dd>{rudiment.tempoTarget} BPM</dd>
              <dt>Position dans la liste</dt>
              <dd>
                {index + 1} / {rudiments.length}
              </dd>
            </dl>
            <div className="button-row">
              <Link className="button button-outline" href="/programme/">
                Voir le programme
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
