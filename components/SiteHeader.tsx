import Link from "next/link";
import { MetronomeIcon } from "@/components/MetronomeIcon";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/programme/", label: "Programme" },
  { href: "/bases/", label: "Bases" },
  { href: "/rudiments/", label: "Rudiments" },
  { href: "/exercices/", label: "Exercices" },
  { href: "/ressources/", label: "Ressources" },
  { href: "/glossaire/", label: "Glossaire" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="LearnBatterie, accueil">
          <span className="brand-mark" aria-hidden="true">
            LB
          </span>
          <span className="brand-text">
            LearnBatterie
            <small>Rudiments & pratique</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-icon-link"
            href="/metronome/"
            aria-label="Métronome"
            title="Métronome"
          >
            <MetronomeIcon size={19} />
          </Link>
          <ThemeToggle />
        </nav>

        <Link className="header-cta" href="/programme/">
          Commencer
        </Link>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Navigation mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/recherche/">Recherche</Link>
            <Link
              className="nav-icon-link mobile-nav-icon"
              href="/metronome/"
              aria-label="Métronome"
              title="Métronome"
            >
              <MetronomeIcon size={20} />
            </Link>
            <ThemeToggle />
          </nav>
        </details>
      </div>
    </header>
  );
}
