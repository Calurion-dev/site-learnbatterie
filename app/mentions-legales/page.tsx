import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de LearnBatterie.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Mentions légales" }]} />
          <h1 className="page-title">Mentions légales</h1>
          <p className="lede">
            Informations sur l&apos;éditeur, l&apos;hébergement et la propriété
            intellectuelle du site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Éditeur</h2>
          <p>
            LearnBatterie est un projet éditorial indépendant consacré à
            l&apos;apprentissage des rudiments de la batterie. Les coordonnées
            complètes de l&apos;éditeur seront ajoutées avant la mise en ligne
            publique définitive.
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par GitHub Pages, service de GitHub, Inc., 88
            Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des textes, fiches de rudiments, séquences de
            sticking, schémas, exercices, ressources imprimables et éléments
            graphiques du site est la propriété exclusive de LearnBatterie. Toute
            reproduction, adaptation, diffusion ou exploitation, totale ou
            partielle, sans autorisation écrite préalable est interdite.
          </p>
          <p>
            Les 40 rudiments internationaux sont des formules traditionnelles.
            Les méthodes et publications citées appartiennent à leurs auteurs et
            éditeurs respectifs ; elles ne sont pas reproduites.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Le contenu est fourni à titre pédagogique et indicatif. Il ne
            remplace pas un professeur, un avis médical ou un accompagnement
            professionnel. En cas de douleur, arrête la pratique et consulte un
            professionnel de santé.
          </p>

          <h2>Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des ressources externes. LearnBatterie
            n&apos;est pas responsable de leur contenu ni de leurs pratiques.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question ou demande d&apos;autorisation, utilise la page
            de contact ou les issues GitHub du projet.
          </p>
        </div>
      </section>
    </>
  );
}
