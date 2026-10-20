import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { lessons, getLesson } from "@/data/lessons";
import { rudiments } from "@/data/rudiments";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Leçon introuvable" };
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const index = lessons.findIndex((item) => item.slug === lesson.slug);
  const previous = index > 0 ? lessons[index - 1] : undefined;
  const next = index < lessons.length - 1 ? lessons[index + 1] : undefined;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Bases", href: "/bases/" },
              { label: lesson.title },
            ]}
          />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">
                Leçon {String(lesson.order).padStart(2, "0")} · {lesson.readingTime} min
              </span>
              <h1 className="page-title">{lesson.title}</h1>
              <p className="lede">{lesson.summary}</p>
            </div>
            <aside className="page-hero-aside">
              <strong>Objectif de la leçon</strong>
              Comprendre le geste, puis le mettre en pratique dans un exercice
              court.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container lesson-layout">
          <article className="prose detail-main">
            {lesson.sections.map((section) => (
              <section className="lesson-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? (
                  <div className="callout callout-tip">
                    <p>{section.note}</p>
                  </div>
                ) : null}
              </section>
            ))}

            <div className="lesson-exercise">
              <h2>À toi de jouer</h2>
              <p>{lesson.exercise}</p>
            </div>

            {lesson.relatedRudiments.length > 0 ? (
              <section className="lesson-section">
                <h2>Rudiments liés</h2>
                <ul>
                  {lesson.relatedRudiments.map((rudimentSlug) => {
                    const rudiment = rudiments.find((item) => item.slug === rudimentSlug);
                    if (!rudiment) return null;
                    return (
                      <li key={rudimentSlug}>
                        <Link href={`/rudiments/${rudimentSlug}/`}>{rudiment.name}</Link>
                        {" — "}
                        {rudiment.summary}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : null}

            <nav className="button-row" aria-label="Navigation entre les leçons">
              {previous ? (
                <Link className="button button-secondary" href={`/bases/${previous.slug}/`}>
                  ← {previous.title}
                </Link>
              ) : null}
              {next ? (
                <Link className="button" href={`/bases/${next.slug}/`}>
                  {next.title} →
                </Link>
              ) : null}
            </nav>
          </article>

          <aside className="lesson-nav">
            <h2>Toutes les leçons</h2>
            <ol>
              {lessons.map((item) => (
                <li key={item.slug}>
                  <Link href={`/bases/${item.slug}/`}>
                    {item.slug === lesson.slug ? <strong>{item.title}</strong> : item.title}
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
