import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Ressources imprimables",
  description:
    "Programme de 12 semaines, poster des 40 rudiments, journal de pratique et fiche de séance : des ressources gratuites à imprimer.",
};

const resources = [
  {
    href: "/ressources/programme/",
    title: "Programme 12 semaines",
    description:
      "Le tableau complet, les tempos et les cases pour cocher chaque séance. Une page à garder près du kit.",
  },
  {
    href: "/ressources/poster/",
    title: "Poster des 40 rudiments",
    description:
      "Tous les noms et toutes les séquences de sticking sur une page. Idéal pour visualiser la famille complète.",
  },
  {
    href: "/ressources/journal/",
    title: "Journal de pratique",
    description:
      "Un tableau de huit semaines pour noter le rudiment, le tempo, la durée et une correction.",
  },
  {
    href: "/ressources/fiche-seance/",
    title: "Fiche de séance",
    description:
      "La structure de 25 minutes : échauffement, rudiment, application, bilan. À remplir avant chaque séance.",
  },
];

export default function RessourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ressources" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">À imprimer</span>
              <h1 className="page-title">Des fiches à garder près du kit.</h1>
              <p className="lede">
                Quatre ressources gratuites, sans inscription. Ouvre une fiche,
                imprime-la ou enregistre-la en PDF depuis la boîte
                d&apos;impression de ton navigateur.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Pas de PDF à télécharger</strong>
              Utilise le bouton « Imprimer » puis « Enregistrer au format PDF »
              dans ton navigateur.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.href}>
              <h2 style={{ fontSize: "1.35rem", color: "var(--white)" }}>
                {resource.title}
              </h2>
              <p>{resource.description}</p>
              <Link className="button" href={resource.href}>
                Ouvrir la fiche
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-rule">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Mode d&apos;emploi</span>
            <h2>Imprimer, remplir, recommencer.</h2>
          </div>
          <div className="prose">
            <p>
              Le programme et le poster sont des repères. Le journal et la fiche
              de séance sont des outils de suivi. Remplis-les à la main : écrire
              ce que tu as travaillé t&apos;aide à voir les progrès.
            </p>
            <p>
              Toutes les ressources sont protégées par le droit d&apos;auteur.
              Tu peux les imprimer pour ton usage personnel ou pour tes élèves,
              mais pas les revendre ni les republier.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
