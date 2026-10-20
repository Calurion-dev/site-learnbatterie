"use client";

export function PrintButton({ label = "Imprimer cette fiche" }: { label?: string }) {
  return (
    <button className="button button-outline no-print" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
