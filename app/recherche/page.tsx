import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Rechercher un rudiment, une leçon, un exercice ou un terme du glossaire.",
};

export default function RecherchePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Recherche" }]} />
          <h1 className="page-title">Trouver la bonne fiche.</h1>
          <p className="lede">
            Cherche un rudiment, une leçon, un exercice ou un terme du
            glossaire. La recherche fonctionne directement dans ton navigateur.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SearchClient />
        </div>
      </section>
    </>
  );
}
