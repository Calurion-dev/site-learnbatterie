import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Fiche de séance",
  description: "La fiche de séance de 25 minutes : échauffement, rudiment, application, bilan.",
};

export default function SessionSheetPage() {
  return (
    <section className="print-page">
      <div className="container">
        <div className="print-toolbar no-print">
          <Link className="text-link" href="/ressources/">
            ← Toutes les ressources
          </Link>
          <PrintButton label="Imprimer la fiche" />
        </div>

        <div className="print-sheet">
          <div className="print-header">
            <div>
              <h1>Fiche de séance</h1>
              <p>LearnBatterie · 25 minutes</p>
            </div>
            <p>Date : ____ / ____ / ______</p>
          </div>

          <div className="session-form" style={{ marginTop: "1.2rem" }}>
            <div className="session-line">
              <span>Objectif</span>
              <span />
            </div>
            <div className="session-line">
              <span>Échauffement (5 min)</span>
              <span />
            </div>
            <div className="session-line">
              <span>Rudiment (10 min)</span>
              <span />
            </div>
            <div className="session-line">
              <span>Tempo de départ</span>
              <span />
            </div>
            <div className="session-line">
              <span>Tempo cible</span>
              <span />
            </div>
            <div className="session-line">
              <span>Application (5 min)</span>
              <span />
            </div>
            <div className="session-line">
              <span>Bilan (5 min)</span>
              <span />
            </div>
            <div className="session-line">
              <span>À corriger demain</span>
              <span />
            </div>
          </div>

          <h2>Ce que j&apos;ai entendu</h2>
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
