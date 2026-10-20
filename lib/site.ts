export const siteName = "LearnBatterie";
export const siteTagline = "Apprendre les rudiments de la batterie, pas à pas.";
export const siteDescription =
  "Site pédagogique gratuit pour apprendre les 40 rudiments de la batterie aux débutants : programme de 12 semaines, fiches, exercices et ressources imprimables.";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://calurion-dev.github.io/site-learnbatterie";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!basePath) return path;
  return `${basePath}${path}`;
}

export const familyLabels = {
  rolls: "Rolls",
  diddles: "Diddles",
  flams: "Flams",
  drags: "Drags",
} as const;

export const levelLabels = {
  1: "Fondations",
  2: "Consolidation",
  3: "Extension",
  4: "Autonomie",
} as const;

export const familyDescriptions = {
  rolls: "Régularité, rebond et contrôle des coups simples ou doubles.",
  diddles: "Combinaisons de coups simples et doubles entre les mains.",
  flams: "Ornements à deux mains : une note faible précède une note forte.",
  drags: "Ornements avec rebond : deux notes faibles précèdent une note forte.",
} as const;
