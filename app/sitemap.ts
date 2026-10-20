import type { MetadataRoute } from "next";
import { lessons } from "@/data/lessons";
import { rudiments } from "@/data/rudiments";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-10-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/programme/",
    "/bases/",
    "/rudiments/",
    "/exercices/",
    "/ressources/",
    "/ressources/programme/",
    "/ressources/poster/",
    "/ressources/journal/",
    "/ressources/fiche-seance/",
    "/glossaire/",
    "/recherche/",
    "/a-propos/",
    "/contact/",
    "/mentions-legales/",
    "/confidentialite/",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...lessons.map((lesson) => ({
      url: `${siteUrl}/bases/${lesson.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...rudiments.map((rudiment) => ({
      url: `${siteUrl}/rudiments/${rudiment.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
