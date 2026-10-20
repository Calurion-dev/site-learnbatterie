import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Journal de pratique",
  description: "Un journal de huit semaines pour suivre tes séances de batterie.",
};

export default function JournalPage() {
  return (
    <section className="print-page">
      <div className="container">
        <div className="print-toolbar no-print">
          <Link className="text-link" href="/ressources/">
            ← Toutes les ressources
          </Link>
          <PrintButton label="Imprimer le journal" />
        </div>

        <div className="print-sheet">
          <div className="print-header">
            <div>
              <h1>Journal de pratique</h1>
              <p>LearnBatterie · Huit semaines de suivi</p>
            </div>
            <p>Nom : ____________________</p>
          </div>

          <p style={{ marginTop: "1rem" }}>
            Note une seule correction par séance. La régularité compte plus que
            la durée.
          </p>

          <table className="journal-table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Rudiment</th>
                <th scope="col">Tempo</th>
                <th scope="col">Durée</th>
                <th scope="col">Ce qui a marché</th>
                <th scope="col">À corriger</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 24 }).map((_, index) => (
                <tr key={index}>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Bilan de la semaine</h2>
          <div style={{ borderBottom: "1px solid #999", height: "2.2rem" }} />
          <div style={{ borderBottom: "1px solid #999", height: "2.2rem" }} />
          <div style={{ borderBottom: "1px solid #999", height: "2.2rem" }} />

          <p className="print-only" style={{ marginTop: "1rem", fontSize: "0.75rem" }}>
            learnbatterie — usage personnel et pédagogique.
          </p>
        </div>
      </div>
    </section>
  );
}
