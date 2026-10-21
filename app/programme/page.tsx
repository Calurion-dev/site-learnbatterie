import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DrumKitIllustration } from "@/components/DrumKitIllustration";
import { program } from "@/data/program";
import { rudiments } from "@/data/rudiments";

export const metadata: Metadata = {
  title: "Programme de 12 semaines",
  description:
    "Un programme de 12 semaines pour apprendre les rudiments de la batterie, avec un rudiment par semaine, des tempos et des exercices d'application.",
};

export default function ProgrammePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Programme" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Le parcours</span>
              <h1 className="page-title">12 semaines, un rudiment à la fois.</h1>
              <p className="lede">
                Quatre séances de 25 minutes par semaine. Chaque semaine
                introduit un rudiment principal, un rappel et une application
                musicale. Rien de plus.
              </p>
            </div>
            <div className="page-hero-visual">
              <DrumKitIllustration className="page-hero-drum" />
              <aside className="page-hero-aside">
                <strong>Matériel minimum</strong>
                Une paire de baguettes, un pad ou une caisse claire. Une batterie
                complète n&apos;est pas obligatoire pour commencer.
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="table-wrap">
            <table>
              <caption>
                Programme principal. Les liens ouvrent les fiches de rudiments.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Semaine</th>
                  <th scope="col">Thème</th>
                  <th scope="col">Rudiments</th>
                  <th scope="col">Application</th>
                  <th scope="col">Tempo</th>
                </tr>
              </thead>
              <tbody>
                {program.map((week) => (
                  <tr key={week.week}>
                    <td>
                      <strong>S{week.week}</strong>
                    </td>
                    <td>
                      <strong>{week.title}</strong>
                      <br />
                      <span className="muted small">{week.focus}</span>
                    </td>
                    <td>
                      {week.rudimentSlugs.map((slug, index) => {
                        const rudiment = rudiments.find((item) => item.slug === slug);
                        if (!rudiment) return null;
                        return (
                          <span key={slug}>
                            <Link href={`/rudiments/${slug}/`}>{rudiment.name}</Link>
                            {index < week.rudimentSlugs.length - 1 ? <br /> : null}
                          </span>
                        );
                      })}
                    </td>
                    <td>{week.application}</td>
                    <td>{week.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Comment utiliser le programme</span>
            <h2>La séance de 25 minutes.</h2>
            <p className="lede">
              Le programme donne le contenu. La séance donne le rythme. Garde
              toujours la même structure, même les jours sans motivation.
            </p>
          </div>
          <div>
            <ol className="step-list">
              <li>
                <strong>5 min d&apos;échauffement.</strong> Coups simples,
                rebonds, doubles. Sans forcer.
              </li>
              <li>
                <strong>10 min de rudiment.</strong> Lent, puis métronome, puis
                tempo cible. Huit mesures propres avant de monter.
              </li>
              <li>
                <strong>5 min d&apos;application.</strong> Un groove ou un fill
                qui utilise le rudiment du jour.
              </li>
              <li>
                <strong>5 min de bilan.</strong> Enregistre-toi, note le tempo
                réussi et une correction pour la prochaine séance.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Les règles du jeu</span>
              <h2>Ce qui fait progresser, et ce qui fait perdre du temps.</h2>
            </div>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Huit mesures propres</h3>
              <p className="card-text">
                Ne monte pas le tempo après une seule mesure réussie. Huit
                mesures sans erreur, c&apos;est le minimum pour valider.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">La main faible d&apos;abord</h3>
              <p className="card-text">
                Commence les exercices par la main gauche si tu es droitier.
                Elle a besoin de deux fois plus de travail.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">Enregistre-toi</h3>
              <p className="card-text">
                Trente secondes suffisent. Tu entendras ce que tu ne remarques
                pas en jouant : tempo, volume, tensions.
              </p>
            </article>
          </div>
          <div className="button-row">
            <Link className="button" href="/bases/construire-seance/">
              Lire la leçon « Construire une séance »
            </Link>
            <Link className="button button-secondary" href="/ressources/programme/">
              Imprimer le programme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
