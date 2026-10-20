import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter LearnBatterie : questions, corrections, suggestions de contenu.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Écrire au site</span>
              <h1 className="page-title">Une question, une correction ?</h1>
              <p className="lede">
                Le site n&apos;a pas de formulaire ni de base de données. Pour
                signaler une erreur, proposer une amélioration ou poser une
                question, utilise les issues GitHub du projet.
              </p>
            </div>
            <aside className="page-hero-aside">
              <strong>Réponse</strong>
              Les messages sont lus quand c&apos;est possible. Le site est un
              projet pédagogique, pas un service client.
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Ouvrir une issue</h2>
            <p className="lede">
              Décris le problème ou la suggestion en quelques phrases. Si tu
              signales une erreur, indique la page concernée.
            </p>
            <div className="button-row">
              <a
                className="button"
                href="https://github.com/Calurion-dev/site-learnbatterie/issues"
                target="_blank"
                rel="noreferrer"
              >
                Ouvrir GitHub Issues
              </a>
            </div>
          </div>
          <div>
            <h2>Ce qui aide vraiment</h2>
            <ul>
              <li>Une correction factuelle avec la page et le passage concerné.</li>
              <li>Une suggestion de sujet adaptée aux débutants.</li>
              <li>Un retour après avoir testé un exercice.</li>
              <li>Une proposition de relecture pédagogique.</li>
            </ul>
            <div className="callout">
              <p>
                Pour une question de batterie, précise ton niveau, ton matériel
                et ce que tu as déjà essayé. Plus le contexte est clair, plus la
                réponse est utile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
