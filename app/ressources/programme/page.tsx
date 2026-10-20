import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { program } from "@/data/program";
import { rudiments } from "@/data/rudiments";

export const metadata: Metadata = {
  title: "Programme 12 semaines à imprimer",
  description: "Le programme de 12 semaines, prêt à imprimer et à cocher.",
};

export default function PrintProgramPage() {
  return (
    <section className="print-page">
      <div className="container">
        <div className="print-toolbar no-print">
          <Link className="text-link" href="/ressources/">
            ← Toutes les ressources
          </Link>
          <PrintButton />
        </div>

        <div className="print-sheet">
          <div className="print-header">
            <div>
              <h1>Programme 12 semaines</h1>
              <p>LearnBatterie · Rudiments de batterie pour débutants</p>
            </div>
            <p>Nom : ____________________</p>
          </div>

          <p style={{ marginTop: "1rem" }}>
            Quatre séances de 25 minutes par semaine. Coche chaque séance
            terminée. Note le tempo réussi dans la dernière colonne.
          </p>

          <table className="journal-table">
            <thead>
              <tr>
                <th scope="col">Sem.</th>
                <th scope="col">Rudiment principal</th>
                <th scope="col">Application</th>
                <th scope="col">Tempo</th>
                <th scope="col">Séances</th>
                <th scope="col">Tempo réussi</th>
              </tr>
            </thead>
            <tbody>
              {program.map((week) => {
                const main = rudiments.find((item) => item.slug === week.rudimentSlugs[0]);
                return (
                  <tr key={week.week}>
                    <td>
                      <strong>S{week.week}</strong>
                    </td>
                    <td>{main?.name ?? week.title}</td>
                    <td>{week.application}</td>
                    <td>{week.tempo}</td>
                    <td>□ □ □ □</td>
                    <td />
                  </tr>
                );
              })}
            </tbody>
          </table>

          <h2>Notes</h2>
          <div style={{ borderBottom: "1px solid #999", height: "2.2rem" }} />
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
