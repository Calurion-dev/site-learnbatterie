import type { Exercise } from "@/lib/types";

export const exercises: Exercise[] = [
  {
    slug: "groove-binaire-single-stroke",
    title: "Groove binaire avec single stroke",
    rudimentSlug: "single-stroke-roll",
    level: 1,
    tempo: 70,
    description:
      "Un groove simple pour installer le single stroke sur le charley, avec la grosse caisse sur 1 et 3 et la caisse claire sur 2 et 4.",
    sticking: ["R", "L", "R", "L", "R", "L", "R", "L"],
    counts: "1 & 2 & 3 & 4 &",
    steps: [
      "Joue le charley en croches avec R L R L.",
      "Ajoute la grosse caisse sur 1 et 3.",
      "Ajoute la caisse claire sur 2 et 4.",
      "Tiens huit mesures sans accélérer.",
    ],
    tip: "Si le groove se casse, ralentis de 10 BPM. La régularité passe avant la vitesse.",
  },
  {
    slug: "groove-doubles",
    title: "Groove avec doubles",
    rudimentSlug: "double-stroke-open-roll",
    level: 1,
    tempo: 70,
    description:
      "Un groove qui utilise les doubles sur le charley pour travailler l'égalité des deux coups.",
    sticking: ["RR", "LL", "RR", "LL", "RR", "LL", "RR", "LL"],
    counts: "1 & 2 & 3 & 4 &",
    steps: [
      "Joue les doubles sur le charley, très lentement.",
      "Vérifie que le deuxième coup est aussi fort que le premier.",
      "Ajoute la grosse caisse sur 1 et 3.",
      "Ajoute la caisse claire sur 2 et 4.",
    ],
    tip: "Le deuxième coup doit rebondir, pas être frappé une seconde fois avec force.",
  },
  {
    slug: "fill-single-stroke-four",
    title: "Fill de quatre temps",
    rudimentSlug: "single-stroke-four",
    level: 1,
    tempo: 75,
    description:
      "Un fill de fin de phrase construit avec la cellule single stroke four sur les temps 3 et 4.",
    sticking: ["R", "L", "R", "L"],
    counts: "1 e & a",
    steps: [
      "Joue trois mesures de groove binaire.",
      "Sur la quatrième mesure, place R L R L sur les temps 3 et 4.",
      "Termine sur le temps 1 suivant avec un crash.",
      "Répète quatre fois de suite.",
    ],
    tip: "Compte à voix haute la mesure du fill pour ne pas le démarrer trop tôt.",
  },
  {
    slug: "groove-paradiddle",
    title: "Groove paradiddle",
    rudimentSlug: "single-paradiddle",
    level: 2,
    tempo: 75,
    description:
      "Un groove qui répartit le paradiddle entre la caisse claire et les toms.",
    sticking: ["R", "L", "R", "R", "L", "R", "L", "L"],
    counts: "1 & 2 & 3 & 4 &",
    steps: [
      "Joue le paradiddle sur la caisse claire.",
      "Déplace les deux coups de droite sur le tom aigu.",
      "Garde la grosse caisse sur 1 et 3.",
      "Répète huit mesures.",
    ],
    tip: "Ne cherche pas à aller vite : le paradiddle doit rester reconnaissable.",
  },
  {
    slug: "fill-paradiddle",
    title: "Fill paradiddle",
    rudimentSlug: "double-paradiddle",
    level: 2,
    tempo: 75,
    description:
      "Un fill de six temps qui utilise le double paradiddle pour circuler sur les toms.",
    sticking: ["R", "L", "R", "L", "R", "R"],
    counts: "1 & 2 & 3 &",
    steps: [
      "Joue le motif sur la caisse claire.",
      "Déplace les coups sur les toms dans l'ordre aigu, médium, grave.",
      "Termine sur le temps 1 avec la grosse caisse.",
      "Répète le fill toutes les quatre mesures.",
    ],
    tip: "Garde les mêmes hauteurs de baguette d'un tom à l'autre.",
  },
  {
    slug: "groove-flams",
    title: "Groove avec flams",
    rudimentSlug: "flam",
    level: 1,
    tempo: 70,
    description:
      "Un groove binaire avec un flam sur les temps 2 et 4 pour donner du poids au backbeat.",
    sticking: ["FR", "FL", "FR", "FL"],
    counts: "1 2 3 4",
    steps: [
      "Joue le groove binaire sans flam.",
      "Ajoute un flam sur la caisse claire aux temps 2 et 4.",
      "Garde le charley régulier.",
      "Vérifie que le flam ne retarde pas le temps.",
    ],
    tip: "La note de grâce doit être presque inaudible. C'est la note principale qui porte le groove.",
  },
  {
    slug: "fill-flam-tap",
    title: "Fill avec flam tap",
    rudimentSlug: "flam-tap",
    level: 2,
    tempo: 75,
    description:
      "Un fill de quatre temps qui enchaîne flam tap main droite et main gauche.",
    sticking: ["FR", "R", "FL", "L"],
    counts: "1 & 2 &",
    steps: [
      "Joue le motif sur la caisse claire.",
      "Répète-le sur les temps 1 et 3.",
      "Ajoute un tom sur la dernière note.",
      "Termine sur un crash au temps 1 suivant.",
    ],
    tip: "Le tap après le flam doit rester léger : ne l'écrase pas.",
  },
  {
    slug: "groove-drags",
    title: "Groove avec drags",
    rudimentSlug: "drag",
    level: 2,
    tempo: 65,
    description:
      "Un groove lent avec des drags sur la caisse claire pour travailler le rebond.",
    sticking: ["DR", "DL", "DR", "DL"],
    counts: "1 2 3 4",
    steps: [
      "Joue le drag seul sur la caisse claire.",
      "Ajoute la grosse caisse sur 1 et 3.",
      "Place les drags sur les temps 2 et 4.",
      "Tiens huit mesures à tempo lent.",
    ],
    tip: "Deux rebonds doux, puis la note principale. Si le drag est trop fort, il devient un roulement.",
  },
  {
    slug: "fill-rolls",
    title: "Fill de rolls",
    rudimentSlug: "five-stroke-roll",
    level: 3,
    tempo: 80,
    description:
      "Un fill de quatre temps qui combine five stroke roll et seven stroke roll.",
    sticking: ["RR", "LL", "R", "R", "L", "L", "R", "R", "L", "L"],
    counts: "1 e & a 2 e & a 3 e & a",
    steps: [
      "Joue le five stroke roll sur les temps 1 et 2.",
      "Enchaîne avec le seven stroke roll sur les temps 3 et 4.",
      "Termine sur le temps 1 avec un crash.",
      "Répète le fill à tempo lent.",
    ],
    tip: "Compte les cellules, pas les coups : cela aide à garder la forme du fill.",
  },
  {
    slug: "groove-rolls",
    title: "Groove avec rolls",
    rudimentSlug: "nine-stroke-roll",
    level: 3,
    tempo: 80,
    description:
      "Un groove qui place un nine stroke roll en transition entre deux phrases.",
    sticking: ["R", "L", "L", "R", "R", "L", "L", "R", "R"],
    counts: "1 e & a 2 e & a 3",
    steps: [
      "Joue deux mesures de groove binaire.",
      "Sur la troisième mesure, place le nine stroke roll.",
      "Reviens au groove sur la quatrième mesure.",
      "Répète la séquence quatre fois.",
    ],
    tip: "Le roll doit rester régulier même s'il est joué moins fort que le groove.",
  },
  {
    slug: "fill-combine",
    title: "Fill combiné",
    rudimentSlug: "triple-paradiddle",
    level: 4,
    tempo: 75,
    description:
      "Un fill avancé qui combine triple paradiddle et single paradiddle-diddle.",
    sticking: ["R", "L", "R", "L", "R", "L", "R", "R", "L", "R", "L", "L"],
    counts: "1 & 2 & 3 & 4 & 5 & 6 &",
    steps: [
      "Joue le triple paradiddle sur les six premiers temps.",
      "Enchaîne avec le paradiddle-diddle.",
      "Termine sur le temps 1 suivant.",
      "Travaille lentement avant d'augmenter le tempo.",
    ],
    tip: "Si tu perds le fil, reviens au motif de base sans métronome.",
  },
  {
    slug: "morceau-simple",
    title: "Morceau simple avec ornements",
    rudimentSlug: "flamacue",
    level: 3,
    tempo: 70,
    description:
      "Une phrase musicale de huit mesures qui applique flams et ratamacues dans un contexte de morceau.",
    sticking: ["FR", "R", "L", "R", "L", "DR", "L", "R", "L"],
    counts: "1 & 2 & 3 & 4 &",
    steps: [
      "Joue le groove de base pendant quatre mesures.",
      "Ajoute le flamacue sur la cinquième mesure.",
      "Ajoute le ratamacue sur la septième mesure.",
      "Termine sur un crash à la huitième mesure.",
    ],
    tip: "Joue d'abord sans ornements, puis ajoute-les un par un.",
  },
];

export function getExercise(slug: string): Exercise | undefined {
  return exercises.find((exercise) => exercise.slug === slug);
}
