import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">Erreur 404</span>
        <h1>Ce rythme n&apos;existe pas.</h1>
        <p className="lede" style={{ marginInline: "auto" }}>
          La page demandée est introuvable. Retourne au programme ou cherche un
          rudiment dans la bibliothèque.
        </p>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <Link className="button" href="/">
            Retour à l&apos;accueil
          </Link>
          <Link className="button button-secondary" href="/recherche/">
            Chercher une fiche
          </Link>
        </div>
      </div>
    </section>
  );
}
