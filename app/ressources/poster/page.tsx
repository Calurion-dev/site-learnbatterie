import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { rudiments } from "@/data/rudiments";
import { familyLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Poster des 40 rudiments",
  description: "Les 40 rudiments et leurs stickings, sur une page à imprimer.",
};

export default function PosterPage() {
  const families = ["rolls", "diddles", "flams", "drags"] as const;

  return (
    <section className="print-page">
      <div className="container">
        <div className="print-toolbar no-print">
          <Link className="text-link" href="/ressources/">
            ← Toutes les ressources
          </Link>
          <PrintButton label="Imprimer le poster" />
        </div>

        <div className="print-sheet">
          <div className="print-header">
            <div>
              <h1>Les 40 rudiments</h1>
              <p>LearnBatterie · Poster de travail</p>
            </div>
            <p>R = droite · L = gauche · F = flam · D = drag</p>
          </div>

          <div className="print-grid" style={{ marginTop: "1.2rem" }}>
            {families.map((family) => (
              <div key={family}>
                <h2>{familyLabels[family]}</h2>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {rudiments
                    .filter((rudiment) => rudiment.family === family)
                    .map((rudiment) => (
                      <li key={rudiment.slug} style={{ marginBottom: "0.25rem" }}>
                        <strong>{rudiment.name}</strong>
                        <br />
                        <span style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                          {rudiment.sticking.join(" ")}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="print-only" style={{ marginTop: "1rem", fontSize: "0.75rem" }}>
            learnbatterie — usage personnel et pédagogique.
          </p>
        </div>
      </div>
    </section>
  );
}
