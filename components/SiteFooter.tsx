import Link from "next/link";
import { siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{siteName}</p>
          <p className="footer-note">
            Un site gratuit pour apprendre les rudiments de la batterie, sans
            publicité et sans compte.
          </p>
        </div>
        <div>
          <p className="footer-heading">Apprendre</p>
          <Link href="/programme/">Programme de 12 semaines</Link>
          <Link href="/bases/">Les 8 leçons de base</Link>
          <Link href="/rudiments/">Les 40 rudiments</Link>
        </div>
        <div>
          <p className="footer-heading">Pratiquer</p>
          <Link href="/exercices/">Exercices d'application</Link>
          <Link href="/ressources/">Ressources imprimables</Link>
          <Link href="/glossaire/">Glossaire</Link>
        </div>
        <div>
          <p className="footer-heading">Le site</p>
          <Link href="/a-propos/">À propos</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/mentions-legales/">Mentions légales</Link>
          <Link href="/confidentialite/">Confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 {siteName}. Contenu protégé, tous droits réservés.</p>
        <p>Fait pour les débutants, avec des baguettes et de la patience.</p>
      </div>
    </footer>
  );
}
