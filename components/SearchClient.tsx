"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { searchIndex } from "@/lib/search";

export function SearchClient() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const results = deferredQuery
    ? searchIndex.filter((item) =>
        `${item.title} ${item.description} ${item.category}`
          .toLowerCase()
          .includes(deferredQuery),
      )
    : [];

  return (
    <div className="search-client">
      <label className="field-label" htmlFor="search">
        Rechercher un rudiment, une leçon, un exercice ou un terme
      </label>
      <input
        className="search-input"
        id="search"
        type="search"
        placeholder="Ex. paradiddle, flam, métronome…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
      />
      <p className="search-count" aria-live="polite">
        {deferredQuery
          ? `${results.length} résultat${results.length > 1 ? "s" : ""}`
          : `${searchIndex.length} entrées disponibles`}
      </p>
      <ul className="search-results">
        {results.map((item) => (
          <li key={`${item.category}-${item.title}`}>
            <Link href={item.href}>
              <span className="search-category">{item.category}</span>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      {deferredQuery && results.length === 0 ? (
        <p className="empty-state">
          Aucun résultat. Essaie un terme plus court, comme « flam » ou « roll ».
        </p>
      ) : null}
    </div>
  );
}
