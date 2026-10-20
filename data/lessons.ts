import type { Lesson } from "@/lib/types";

export const lessons: Lesson[] = [
  {
    slug: "tenir-baguettes",
    title: "Tenir les baguettes",
    summary:
      "Les trois prises, le point d'équilibre et l'exercice pour trouver une main détendue.",
    order: 1,
    readingTime: 6,
    sections: [
      {
        heading: "Pourquoi la prise compte",
        paragraphs: [
          "La prise est le premier contact entre ton corps et l'instrument. Une main crispée fatigue, étouffe le rebond et rend les doubles difficiles. Une main détendue laisse la baguette travailler.",
          "Il n'existe pas une seule bonne prise. Il existe trois grandes familles, et chacune a ses usages. Le plus important est de trouver une position stable, sans serrer.",
        ],
      },
      {
        heading: "Les trois prises",
        bullets: [
          "Prise française : paumes vers le bas, baguettes presque parallèles. Elle favorise les doigts et la finesse.",
          "Prise allemande : paumes vers l'intérieur, baguettes inclinées. Elle favorise la puissance et les coups de poignet.",
          "Prise américaine : intermédiaire, paumes à moitié tournées. C'est un bon point de départ pour la plupart des débutants.",
        ],
        note: "Commence par la prise américaine ou allemande, puis essaie les autres. La bonne prise est celle qui te permet de jouer détendu.",
      },
      {
        heading: "Trouver le point d'équilibre",
        paragraphs: [
          "Place la baguette sur ton index tendu et cherche le point où elle bascule. C'est le point d'équilibre. Tiens la baguette juste derrière ce point, entre le pouce et la première jointure de l'index.",
          "Le reste des doigts accompagne la baguette sans la serrer. Le petit doigt peut rester légèrement ouvert. Tu dois pouvoir retirer la baguette de ta main sans forcer.",
        ],
      },
      {
        heading: "Exercice : le rebond contrôlé",
        paragraphs: [
          "Frappe une fois la caisse claire ou un pad et laisse la baguette rebondir trois ou quatre fois. Ne fais rien d'autre que accompagner le rebond. Recommence dix fois par main.",
          "Si la baguette s'arrête immédiatement, tu serres trop. Si elle part dans tous les sens, tu la tiens trop peu. Cherche le milieu.",
        ],
      },
    ],
    exercise:
      "Fais 10 rebonds libres par main, puis 10 rebonds en essayant de garder la baguette à la même hauteur.",
    relatedRudiments: ["single-stroke-roll", "double-stroke-open-roll"],
  },
  {
    slug: "posture",
    title: "Posture et installation",
    summary:
      "La hauteur du siège, la position des pieds et les réglages qui évitent les tensions.",
    order: 2,
    readingTime: 6,
    sections: [
      {
        heading: "S'asseoir au bon endroit",
        paragraphs: [
          "Assieds-toi au bord du siège, les pieds à plat, les genoux légèrement plus bas que les hanches. Le dos reste droit sans être raide. Si le siège est trop bas, les jambes se fatiguent ; s'il est trop haut, tu perds l'appui.",
          "Place la grosse caisse de façon à ce que la jambe droite forme un angle confortable. Le pied doit pouvoir jouer sans que le genou monte.",
        ],
      },
      {
        heading: "Organiser le kit",
        bullets: [
          "La caisse claire est à hauteur de ceinture, légèrement inclinée vers toi.",
          "Le charley est à gauche, à une hauteur qui permet de frapper sans lever l'épaule.",
          "Les toms sont inclinés vers le batteur, pas à l'horizontale.",
          "Les cymbales sont assez hautes pour ne pas gêner les mouvements de baguette.",
        ],
      },
      {
        heading: "Relâcher les épaules",
        paragraphs: [
          "Monte les épaules, puis laisse-les tomber. C'est la position de départ. Vérifie régulièrement que tu ne les remontes pas en jouant.",
          "Les coudes restent proches du corps, sans être collés. Les avant-bras peuvent bouger, mais le geste principal vient du poignet et des doigts.",
        ],
      },
      {
        heading: "Exercice : la posture en 60 secondes",
        paragraphs: [
          "Assieds-toi, pose les pieds, laisse tomber les épaules. Frappe dix coups lents sur la caisse claire en gardant cette position. Recommence en vérifiant que tu n'as pas remonté les épaules.",
        ],
      },
    ],
    exercise:
      "Prends une photo de profil derrière ton kit. Vérifie que le dos est droit, les pieds à plat et les épaules basses.",
    relatedRudiments: ["single-stroke-roll", "flam"],
  },
  {
    slug: "coup-et-rebond",
    title: "Le coup et le rebond",
    summary:
      "Comprendre le fulcrum, le rebond naturel et les quatre types de coups.",
    order: 3,
    readingTime: 7,
    sections: [
      {
        heading: "Le coup n'est pas une poussée",
        paragraphs: [
          "Beaucoup de débutants frappent en poussant la baguette vers la peau. Le geste juste est un fouetté : la baguette part, touche la peau, puis remonte grâce au rebond.",
          "Plus tu serres, plus tu dois fournir d'effort pour la faire revenir. Plus tu relâches, plus le rebond fait le travail.",
        ],
      },
      {
        heading: "Les quatre coups de base",
        bullets: [
          "Full stroke : la baguette part de haut et revient haut. Pour les accents et les temps forts.",
          "Down stroke : la baguette part de haut et s'arrête bas. Pour les accents suivis d'un silence.",
          "Tap : petit coup joué près de la peau, sans grand mouvement.",
          "Up stroke : la baguette part de bas et remonte. Pour préparer le coup suivant.",
        ],
      },
      {
        heading: "Le fulcrum",
        paragraphs: [
          "Le fulcrum est le point de pivot entre le pouce et l'index. C'est lui qui contrôle la baguette, pas le poing entier. Garde ce point souple : il doit pouvoir s'ouvrir légèrement quand la baguette rebondit.",
        ],
      },
      {
        heading: "Exercice : haut, bas, haut, bas",
        paragraphs: [
          "Joue huit coups en alternant full stroke et tap. Compte à voix haute : haut, bas, haut, bas. Recommence en gardant le même tempo et la même hauteur.",
        ],
      },
    ],
    exercise:
      "Joue 8 mesures de full strokes lents, puis 8 mesures de taps. Alterne les deux sans t'arrêter.",
    relatedRudiments: ["single-stroke-roll", "double-stroke-open-roll", "flam"],
  },
  {
    slug: "lire-rythmes",
    title: "Lire les rythmes de base",
    summary:
      "La mesure 4/4, les noires, les croches et les doubles croches, sans solfège compliqué.",
    order: 4,
    readingTime: 8,
    sections: [
      {
        heading: "La pulsation",
        paragraphs: [
          "La musique est organisée autour d'une pulsation régulière. Quand tu tapes du pied, tu marques la pulsation. À la batterie, le métronome ou le charley peuvent jouer ce rôle.",
          "Une mesure 4/4 contient quatre pulsations. On les compte 1, 2, 3, 4. La plupart des morceaux rock, pop et funk utilisent cette organisation.",
        ],
      },
      {
        heading: "Les valeurs de notes",
        bullets: [
          "Noire : une note par temps. On compte 1, 2, 3, 4.",
          "Croche : deux notes par temps. On compte 1 & 2 & 3 & 4 &.",
          "Double croche : quatre notes par temps. On compte 1 e & a 2 e & a.",
          "Silence : un temps sans note, qu'il faut continuer à compter.",
        ],
      },
      {
        heading: "Lire une cellule de batterie",
        paragraphs: [
          "Une partition de batterie place les instruments sur des lignes différentes : grosse caisse en bas, caisse claire au milieu, charley en haut. Au début, retiens surtout la forme rythmique et la main qui joue.",
          "Tu n'as pas besoin de lire toutes les notes pour commencer. Compte à voix haute, frappe dans tes mains, puis reproduis le rythme sur une seule surface.",
        ],
      },
      {
        heading: "Exercice : compter et frapper",
        paragraphs: [
          "Compte 1 & 2 & 3 & 4 & à voix haute en frappant dans tes mains sur chaque syllabe. Puis frappe seulement sur les chiffres et garde les & en silence. Enfin, joue le tout sur la caisse claire.",
        ],
      },
    ],
    exercise:
      "Écris une mesure de 4/4 avec quatre noires, puis une avec huit croches. Joue-les au métronome à 60 BPM.",
    relatedRudiments: ["single-stroke-roll", "single-paradiddle"],
  },
  {
    slug: "metronome",
    title: "Utiliser le métronome",
    summary:
      "Pourquoi le métronome n'est pas un ennemi, comment choisir son tempo et progresser sans se presser.",
    order: 5,
    readingTime: 5,
    sections: [
      {
        heading: "À quoi ça sert",
        paragraphs: [
          "Le métronome donne une référence extérieure. Il révèle les accélérations et les ralentissements que tu ne sens pas. Il ne sert pas à jouer vite : il sert à jouer stable.",
          "Un batteur qui joue proprement à 70 BPM sera toujours plus utile qu'un batteur qui joue approximativement à 140.",
        ],
      },
      {
        heading: "Choisir le bon tempo",
        paragraphs: [
          "Commence à un tempo où tu peux jouer huit mesures sans erreur et sans tension. Si tu échoues, baisse de 10 BPM. Si c'est facile, monte de 5 BPM.",
          "Le bon tempo est celui qui te permet de rester détendu. La vitesse viendra avec la répétition, pas avec la force.",
        ],
      },
      {
        heading: "Compter les subdivisions",
        bullets: [
          "À 60 BPM, une noire par seconde.",
          "Pour les croches, compte 1 & 2 & 3 & 4 &.",
          "Pour les doubles croches, compte 1 e & a.",
          "Le métronome peut marquer seulement les temps 1 et 3 pour alléger.",
        ],
      },
      {
        heading: "Exercice : huit mesures propres",
        paragraphs: [
          "Choisis un rudiment et joue-le huit mesures au métronome. Si tu fais une erreur, ne t'arrête pas : termine les huit mesures, puis recommence. Note le tempo réussi dans ton journal.",
        ],
      },
    ],
    exercise:
      "Joue le single stroke roll à 60 BPM pendant huit mesures. Note le tempo, puis réessaie à 65 BPM.",
    relatedRudiments: ["single-stroke-roll", "double-stroke-open-roll"],
  },
  {
    slug: "echauffement",
    title: "S'échauffer en 5 minutes",
    summary:
      "Une routine simple pour préparer les poignets, les doigts et l'attention avant de jouer.",
    order: 6,
    readingTime: 4,
    sections: [
      {
        heading: "Pourquoi s'échauffer",
        paragraphs: [
          "Les muscles et les tendons ont besoin de monter en température. Un échauffement progressif réduit le risque de tension et améliore le contrôle.",
          "Cinq minutes suffisent. Il ne s'agit pas de jouer vite, mais de réveiller le geste.",
        ],
      },
      {
        heading: "La routine",
        bullets: [
          "1 minute : coups simples très lents sur un pad, main droite puis main gauche.",
          "1 minute : rebonds libres, trois rebonds par main.",
          "1 minute : doubles lents, en vérifiant l'égalité des deux coups.",
          "1 minute : flams très doux, main droite puis main gauche.",
          "1 minute : jeu libre, sans métronome, pour finir détendu.",
        ],
      },
      {
        heading: "Ce qu'il faut éviter",
        paragraphs: [
          "Ne commence pas par un morceau rapide. Ne force pas sur les poignets. Si tu sens une douleur, arrête et repose-toi.",
        ],
      },
    ],
    exercise:
      "Fais la routine de 5 minutes avant ta prochaine séance, puis note si tu te sens plus détendu.",
    relatedRudiments: ["single-stroke-roll", "double-stroke-open-roll", "flam"],
  },
  {
    slug: "construire-seance",
    title: "Construire une séance de 25 minutes",
    summary:
      "Un cadre simple : échauffement, rudiment, application, bilan. Pour ne plus jamais te demander quoi travailler.",
    order: 7,
    readingTime: 5,
    sections: [
      {
        heading: "Le cadre",
        paragraphs: [
          "Une séance efficace n'est pas une séance longue. C'est une séance avec un objectif clair. Le programme de 12 semaines te donne le rudiment du jour ; la séance te donne la structure.",
        ],
      },
      {
        heading: "Les quatre blocs",
        bullets: [
          "5 minutes d'échauffement : coups simples, rebonds, doubles.",
          "10 minutes de rudiment : lent, puis métronome, puis tempo cible.",
          "5 minutes d'application : un groove ou un fill qui utilise le rudiment.",
          "5 minutes de bilan : enregistre-toi, note le tempo, pointe ce qui a marché.",
        ],
      },
      {
        heading: "Fixer un objectif",
        paragraphs: [
          "Un bon objectif est mesurable : « jouer le single stroke roll à 80 BPM pendant huit mesures » plutôt que « travailler les rudiments ». Note-le avant de commencer.",
        ],
      },
      {
        heading: "Exercice : ta première séance",
        paragraphs: [
          "Choisis le rudiment de la semaine 1. Fais les quatre blocs dans l'ordre. À la fin, écris une phrase : ce qui a été facile, ce qui a été difficile, ce que tu travailleras demain.",
        ],
      },
    ],
    exercise:
      "Planifie trois séances de 25 minutes cette semaine et note l'objectif de chacune.",
    relatedRudiments: ["single-stroke-roll", "single-paradiddle"],
  },
  {
    slug: "enregistrer",
    title: "S'enregistrer et s'auto-évaluer",
    summary:
      "Utiliser ton téléphone pour entendre ce que tu ne remarques pas en jouant.",
    order: 8,
    readingTime: 5,
    sections: [
      {
        heading: "Pourquoi s'enregistrer",
        paragraphs: [
          "En jouant, tu es concentré sur le geste. L'enregistrement te permet d'écouter le résultat : régularité, volume, tempo, bruits parasites.",
          "C'est l'outil le plus simple pour progresser seul. Un téléphone suffit.",
        ],
      },
      {
        heading: "Comment faire",
        bullets: [
          "Place le téléphone à un mètre de la batterie, pas juste à côté d'une cymbale.",
          "Enregistre 30 secondes, pas 10 minutes.",
          "Écoute sans te juger : repère une seule chose à améliorer.",
          "Compare deux semaines plus tard, pas deux jours plus tard.",
        ],
      },
      {
        heading: "Les critères d'écoute",
        bullets: [
          "Le tempo est-il stable ?",
          "Les coups sont-ils réguliers en volume ?",
          "Le rudiment est-il reconnaissable ?",
          "Y a-t-il des tensions audibles (coups écrasés, baguettes qui s'arrêtent) ?",
        ],
      },
      {
        heading: "Exercice : premier enregistrement",
        paragraphs: [
          "Enregistre huit mesures de single stroke roll à ton tempo de travail. Écoute et note une seule correction. Recommence dans une semaine.",
        ],
      },
    ],
    exercise:
      "Enregistre 30 secondes de ton rudiment principal et écris une correction précise dans ton journal.",
    relatedRudiments: ["single-stroke-roll", "double-stroke-open-roll"],
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}
