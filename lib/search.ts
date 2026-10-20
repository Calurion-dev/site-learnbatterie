import { exercises } from "@/data/exercises";
import { glossary } from "@/data/glossary";
import { lessons } from "@/data/lessons";
import { rudiments } from "@/data/rudiments";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: "Rudiment" | "Leçon" | "Exercice" | "Glossaire";
};

function glossarySlug(term: string): string {
  return term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export const searchIndex: SearchItem[] = [
  ...rudiments.map((rudiment) => ({
    title: rudiment.name,
    description: rudiment.summary,
    href: `/rudiments/${rudiment.slug}/`,
    category: "Rudiment" as const,
  })),
  ...lessons.map((lesson) => ({
    title: lesson.title,
    description: lesson.summary,
    href: `/bases/${lesson.slug}/`,
    category: "Leçon" as const,
  })),
  ...exercises.map((exercise) => ({
    title: exercise.title,
    description: exercise.description,
    href: `/exercices/#${exercise.slug}`,
    category: "Exercice" as const,
  })),
  ...glossary.map((entry) => ({
    title: entry.term,
    description: entry.definition,
    href: `/glossaire/#${glossarySlug(entry.term)}`,
    category: "Glossaire" as const,
  })),
];
