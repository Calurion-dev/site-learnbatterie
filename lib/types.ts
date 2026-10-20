export type Family = "rolls" | "diddles" | "flams" | "drags";
export type Level = 1 | 2 | 3 | 4;

export type Rudiment = {
  slug: string;
  name: string;
  family: Family;
  level: Level;
  summary: string;
  description: string;
  sticking: string[];
  counts?: string;
  tempoStart: number;
  tempoTarget: number;
  steps: string[];
  tips?: string[];
  mistakes?: string[];
  application: string;
};

export type LessonSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  order: number;
  readingTime: number;
  sections: LessonSection[];
  exercise: string;
  relatedRudiments: string[];
};

export type Exercise = {
  slug: string;
  title: string;
  rudimentSlug: string;
  level: Level;
  tempo: number;
  description: string;
  sticking: string[];
  counts?: string;
  steps: string[];
  tip: string;
};

export type GlossaryEntry = {
  term: string;
  definition: string;
  related?: string;
};

export type ProgramWeek = {
  week: number;
  title: string;
  rudimentSlugs: string[];
  focus: string;
  application: string;
  tempo: string;
};
