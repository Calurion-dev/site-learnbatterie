import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "LearnBatterie ne collecte pas de données personnelles, n'utilise pas de cookies publicitaires et ne propose pas de compte utilisateur.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Confidentialité" }]} />
          <h1 className="page-title">Confidentialité</h1>
          <p className="lede">
            Le site est conçu pour fonctionner sans compte, sans cookie
            publicitaire et sans collecte de données inutile.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Données collectées</h2>
          <p>
            LearnBatterie ne propose ni compte utilisateur, ni newsletter, ni
            formulaire de contact avec stockage. Aucune donnée personnelle
            n&apos;est collectée par le site lui-même.
          </p>

          <h2>Cookies et mesure d&apos;audience</h2>
          <p>
            Le site n&apos;utilise pas de cookies publicitaires ni d&apos;outil de
            mesure d&apos;audience. Aucun consentement cookie n&apos;est donc
            nécessaire.
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par GitHub Pages. Comme tout service
            d&apos;hébergement, GitHub peut enregistrer des journaux techniques
            (adresse IP, date, page demandée) pour assurer la sécurité et le
            fonctionnement du service. Ces journaux sont gérés par GitHub selon
            sa propre politique de confidentialité.
          </p>

          <h2>Liens externes</h2>
          <p>
            Les liens vers GitHub ou d&apos;autres sites peuvent entraîner une
            collecte de données par ces services. Consulte leurs politiques
            respectives.
          </p>

          <h2>Tes droits</h2>
          <p>
            Comme le site ne collecte pas de données personnelles, il n&apos;y a
            pas de données à consulter, corriger ou supprimer côté LearnBatterie.
            Pour toute question, utilise la page de contact.
          </p>

          <h2>Évolution</h2>
          <p>
            Si une fonctionnalité future implique une collecte de données
            (newsletter, compte, statistiques), cette politique sera mise à jour
            avant sa mise en service.
          </p>
        </div>
      </section>
    </>
  );
}
