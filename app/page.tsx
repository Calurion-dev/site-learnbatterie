import Link from "next/link";
import { DrumKitIllustration } from "@/components/DrumKitIllustration";
import { StickingGrid } from "@/components/StickingGrid";
import { lessons } from "@/data/lessons";
import { program } from "@/data/program";
import { rudiments } from "@/data/rudiments";
import { siteTagline } from "@/lib/site";

const featuredSlugs = [
  "single-stroke-roll",
  "double-stroke-open-roll",
  "single-paradiddle",
  "flam",
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => rudiments.find((rudiment) => rudiment.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Site pédagogique gratuit</span>
            <h1 className="hero-title">
              La batterie commence par <em>quatre coups</em>.
            </h1>
            <p className="lede">
              Apprends les 40 rudiments pas à pas, avec un programme de 12
              semaines, des fiches claires et des exercices à jouer dès
              aujourd&apos;hui. Sans vidéo, sans compte, sans blabla.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/programme/">
                Commencer le programme
              </Link>
              <Link className="button button-secondary" href="/rudiments/">
                Voir les 40 rudiments
              </Link>
            </div>
            <p className="hero-note">{siteTagline} · 15–25 min par séance</p>
          </div>

          <div className="hero-visual">
            <Link
              href="/batterie/"
              className="hero-drum-link"
              aria-label="Découvrir les parties de la batterie"
              title="Découvrir les parties de la batterie"
            >
              <DrumKitIllustration className="hero-drum" />
            </Link>

            <aside className="hero-card" aria-label="Aperçu de la semaine 1">
              <div className="hero-card-top">
                <span>Semaine 01</span>
                <span>Fondations</span>
              </div>
              <h2>Single stroke roll</h2>
              <p>
                Deux coups alternés, réguliers et détendus. Le premier rudiment,
                celui qui installe tout le reste.
              </p>
              <div className="hero-pattern" aria-hidden="true">
                {["R", "L", "R", "L", "R", "L", "R", "L"].map((token, index) => (
                  <span key={`${token}-${index}`}>{token}</span>
                ))}
              </div>
              <div className="hero-card-footer">
                <span>
                  Tempo de départ
                  <strong>60 BPM</strong>
                </span>
                <span>
                  Objectif
                  <strong>120 BPM</strong>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="stat-strip" aria-label="Le site en chiffres">
        <div className="stat">
          <strong>40</strong>
          <span>rudiments expliqués</span>
        </div>
        <div className="stat">
          <strong>8</strong>
          <span>leçons de base</span>
        </div>
        <div className="stat">
          <strong>12</strong>
          <span>semaines de programme</span>
        </div>
        <div className="stat">
          <strong>0 €</strong>
          <span>accès libre, sans compte</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Par où commencer</span>
              <h2>Un seul chemin, trois étapes.</h2>
            </div>
            <p>
              Pas besoin de choisir entre cinquante articles. Le programme te
              dit quoi travailler, dans quel ordre et à quel tempo.
            </p>
          </div>

          <div className="path-grid">
            <article className="path-card">
              <h3>Tenir les baguettes</h3>
              <p>
                La prise, le rebond et la posture. Les fondations qui évitent
                les tensions et les mauvaises habitudes.
              </p>
            </article>
            <article className="path-card">
              <h3>Travailler les rudiments</h3>
              <p>
                Un rudiment à la fois, avec une séquence de sticking, un tempo
                de départ et un critère de validation.
              </p>
            </article>
            <article className="path-card">
              <h3>Appliquer en musique</h3>
              <p>
                Des grooves et des fills pour transformer l&apos;exercice en
                quelque chose qui sonne.
              </p>
            </article>
          </div>

          <div className="button-row">
            <Link className="button" href="/bases/tenir-baguettes/">
              Lire la première leçon
            </Link>
            <Link className="text-link" href="/bases/">
              Voir les 8 leçons de base
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Le programme</span>
              <h2>12 semaines pour poser les bases.</h2>
            </div>
            <Link className="text-link" href="/programme/">
              Voir le programme complet
            </Link>
          </div>

          <div className="table-wrap">
            <table>
              <caption>
                Les quatre premières semaines. Chaque séance dure environ 25
                minutes.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Semaine</th>
                  <th scope="col">Rudiment</th>
                  <th scope="col">Objectif</th>
                  <th scope="col">Tempo</th>
                </tr>
              </thead>
              <tbody>
                {program.slice(0, 4).map((week) => (
                  <tr key={week.week}>
                    <td>
                      <strong>S{week.week}</strong>
                    </td>
                    <td>
                      {week.rudimentSlugs.map((slug, index) => {
                        const rudiment = rudiments.find((item) => item.slug === slug);
                        if (!rudiment) return null;
                        return (
                          <span key={slug}>
                            <Link href={`/rudiments/${slug}/`}>{rudiment.name}</Link>
                            {index < week.rudimentSlugs.length - 1 ? ", " : ""}
                          </span>
                        );
                      })}
                    </td>
                    <td>{week.focus}</td>
                    <td>{week.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Les fondamentaux</span>
              <h2>Quatre rudiments pour commencer.</h2>
            </div>
            <p>
              Si tu ne retiens que quatre choses cette semaine, retiens celles-là.
            </p>
          </div>

          <div className="card-grid">
            {featured.map((rudiment) =>
              rudiment ? (
                <article className="card" key={rudiment.slug}>
                  <div className="card-meta">
                    <span className="tag tag-accent">Niveau {rudiment.level}</span>
                    <span className="tag">{rudiment.family}</span>
                  </div>
                  <h3 className="card-title">{rudiment.name}</h3>
                  <p className="card-text">{rudiment.summary}</p>
                  <div className="card-footer">
                    <span>{rudiment.tempoStart}–{rudiment.tempoTarget} BPM</span>
                    <Link className="card-link" href={`/rudiments/${rudiment.slug}/`}>
                      Lire la fiche
                    </Link>
                  </div>
                </article>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Ressources</span>
              <h2>À imprimer et à garder près du kit.</h2>
            </div>
            <Link className="text-link" href="/ressources/">
              Toutes les ressources
            </Link>
          </div>

          <div className="resource-grid">
            <article className="resource-card">
              <h3>Programme 12 semaines</h3>
              <p>
                Le tableau complet, les tempos et les cases pour cocher chaque
                séance.
              </p>
              <Link className="button" href="/ressources/programme/">
                Ouvrir la fiche
              </Link>
            </article>
            <article className="resource-card">
              <h3>Poster des 40 rudiments</h3>
              <p>
                Tous les noms et toutes les séquences de sticking sur une page.
              </p>
              <Link className="button" href="/ressources/poster/">
                Ouvrir le poster
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">La méthode</span>
            <h2>Lent, propre, régulier. Puis plus vite.</h2>
          </div>
          <div className="prose">
            <p>
              La vitesse n&apos;est pas un objectif en soi. Chaque fiche indique
              un tempo de départ et un tempo cible, mais le vrai critère est la
              régularité : huit mesures propres, sans tension, avec un volume
              égal entre les mains.
            </p>
            <p>
              Le site est gratuit et le restera. Il n&apos;y a ni publicité, ni
              affiliation, ni compte à créer. Tu as besoin de baguettes, d&apos;une
              surface et de quelques minutes.
            </p>
            <Link className="text-link" href="/a-propos/">
              En savoir plus sur le projet
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Les bases</span>
              <h2>Huit leçons pour ne pas partir de travers.</h2>
            </div>
          </div>
          <div className="card-grid">
            {lessons.slice(0, 3).map((lesson) => (
              <article className="card" key={lesson.slug}>
                <span className="card-number">Leçon {String(lesson.order).padStart(2, "0")}</span>
                <h3 className="card-title">{lesson.title}</h3>
                <p className="card-text">{lesson.summary}</p>
                <div className="card-footer">
                  <span>{lesson.readingTime} min</span>
                  <Link className="card-link" href={`/bases/${lesson.slug}/`}>
                    Lire
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container center">
          <span className="eyebrow">Prêt ?</span>
          <h2>Commence par la semaine 1.</h2>
          <p className="lede" style={{ marginInline: "auto" }}>
            Une paire de baguettes, un pad ou une caisse claire, et 25 minutes.
            Le reste viendra avec la répétition.
          </p>
          <div className="button-row" style={{ justifyContent: "center" }}>
            <Link className="button" href="/programme/">
              Voir le programme
            </Link>
            <Link className="button button-secondary" href="/rudiments/single-stroke-roll/">
              Ouvrir la première fiche
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
