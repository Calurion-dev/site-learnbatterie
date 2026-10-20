# Cahier des charges — LearnBatterie

**Site pédagogique gratuit pour apprendre les rudiments de la batterie aux débutants**

- Version : 3.1
- Date : octobre 2026
- Statut : validé pour construction
- Périmètre : site de contenu pédagogique, sans vidéo, sans audio, sans compte, sans plateforme interactive.
- Anciennes versions : `docs/archive/CDC-plateforme-v1.md` et `docs/archive/CDC-site-editorial-v2.md`.

### Décisions validées le 20 octobre 2026

- **Nom :** LearnBatterie, à titre provisoire.
- **Périmètre :** 12 rudiments fondamentaux sur 12 semaines, avec les 40 fiches disponibles.
- **Audio :** aucun audio au MVP. Les mentions d'audio dans ce document sont des évolutions ultérieures.
- **Relecture pédagogique :** prévue après le MVP.
- **Licence :** propriété intégrale de LearnBatterie, tous droits réservés. Pas de licence Creative Commons.
- **Construction :** lancée sur le dépôt GitHub `site-learnbatterie`.

---

## 0. Résumé exécutif

**Le problème.** Un débutant qui veut apprendre la batterie ne sait pas par où commencer. Les vidéos sont nombreuses mais dispersées, les méthodes papier coûteuses, et les rudiments — la grammaire technique de l'instrument — sont souvent présentés comme une liste à mémoriser plutôt qu'un parcours à pratiquer.

**La solution.** Un site gratuit, en français, qui apprend les rudiments aux débutants avec une progression claire : 8 leçons de base, 40 fiches de rudiments, 12 exercices d'application, un programme de 12 semaines et des ressources imprimables. Chaque fiche contient une séquence de sticking, un tempo de travail, les erreurs fréquentes et l'étape suivante.

**Le public.** Des débutants adultes ou adolescents, sans professeur, qui ont une batterie acoustique, une batterie électronique ou même un simple pad d'entraînement.

**Le MVP.** 8 leçons de base + 40 fiches de rudiments + 12 exercices + 1 programme de 12 semaines + 4 ressources imprimables. Site statique, rapide, accessible, sans compte.

**Le budget.** 0–500 € en version lean (hébergement gratuit, domaine). 1 500–3 000 € en version confort (design, notation, relecture pédagogique ultérieure).

**La durée.** 8 à 10 semaines pour une personne, 5 à 6 semaines pour une petite équipe.

**Ce que le site n'est pas.** Un produit commercial. Il est gratuit, sans publicité, sans affiliation, sans vente, sans abonnement et sans collecte de données inutile.

---

## 1. Mission et principes

### 1.1 Mission

> **Apprendre les rudiments de la batterie aux débutants, gratuitement, dans un ordre qui a du sens.**

Le site ne cherche pas à couvrir toute la batterie. Il se concentre sur les fondations techniques :

- tenir les baguettes et frapper proprement ;
- comprendre la notation rythmique de base ;
- travailler les 40 rudiments, des plus simples aux plus avancés ;
- appliquer les rudiments dans des grooves et des fills ;
- savoir quoi travailler, à quel tempo, et comment mesurer sa progression.

### 1.2 Principes

1. **Gratuit et sans contrepartie.** Aucune publicité, aucun lien affilié, aucune vente, aucun don obligatoire.
2. **La pratique d'abord.** Chaque page se termine par une action : jouer, compter, répéter, enregistrer.
3. **Un seul chemin.** Le débutant n'a pas à choisir entre 50 articles. Le programme de 12 semaines donne l'ordre.
4. **Le tempo avant la vitesse.** Chaque exercice indique un tempo de départ et un objectif réaliste.
5. **La notation expliquée.** Pas besoin de solfège au départ ; les symboles sont introduits au fur et à mesure.
6. **Le matériel minimal.** Une paire de baguettes et une surface suffisent pour commencer.
7. **La transparence.** Les sources sont citées, les choix pédagogiques sont expliqués, les erreurs sont signalées.

### 1.3 Non-objectifs

- Pas de monétisation.
- Pas de publicité.
- Pas d'affiliation.
- Pas de boutique.
- Pas d'abonnement.
- Pas de cours vidéo.
- Pas de compte utilisateur.
- Pas de practice room.
- Pas de feedback MIDI.
- Pas de forum.
- Pas d'application mobile.
- Pas de version anglaise au lancement.

---

## 2. Public et résultats attendus

### 2.1 Public

**Profil principal — débutant complet**
- 15 ans et plus.
- Aucune expérience musicale ou très peu.
- Possède une paire de baguettes et, idéalement, un pad ou une batterie.
- dispose de 15 à 25 minutes, 3 à 5 fois par semaine.
- Cherche une méthode gratuite, claire et française.

**Profil secondaire — débutant qui reprend**
- A déjà joué quelques mois, sans structuration.
- Veut combler ses lacunes techniques.
- Cherche des exercices précis et un plan de travail.

**Profil tertiaire — professeur ou école**
- Cherche des fiches imprimables à donner à ses élèves.
- Peut relire le contenu et le recommander.

### 2.2 Prérequis

Aucun prérequis musical. Le site part du principe que le lecteur :

- ne sait pas lire une partition ;
- ne connaît pas les termes « flam », « paradiddle » ou « ratamacue » ;
- ne sait pas nécessairement tenir des baguettes ;
- peut ne pas avoir de batterie complète.

### 2.3 Résultats attendus

À la fin du programme de 12 semaines, le débutant doit être capable de :

- tenir les baguettes avec une prise stable et détendue ;
- jouer un single stroke roll, un double stroke roll et un single paradiddle à tempo lent, proprement ;
- lire une cellule rythmique simple en 4/4 ;
- jouer un flam et un drag de base ;
- appliquer au moins 5 rudiments dans un groove ou un fill ;
- travailler seul avec un métronome ;
- identifier ses erreurs et savoir quoi corriger.

**Nuance pédagogique :** le programme de 12 semaines couvre les **12 rudiments fondamentaux** et introduit les autres. Les 40 fiches restent disponibles pour la suite. On ne prétend pas maîtriser 40 rudiments en 3 mois.

---

## 3. Ce qui existe déjà

| Ressource | Ce qu'elle apporte | Ce qui manque |
|---|---|---|
| **YouTube** | Démonstrations gratuites, nombreux professeurs | Pas de parcours ordonné, pas de fiches imprimables, dépend de la vidéo |
| **Académie Puchol** | Cours gratuits en français, guides débutant | Approche générale, peu centrée sur les 40 rudiments |
| **Batterie Facile** | Articles matériel et technique, ton simple | Couverture limitée des rudiments, pas de programme structuré |
| **La Baguetterie** | Guide débutant complet | Contenu orienté catalogue, pas de progression rudimentaire |
| **Batterie / Batteur Magazine** | Magazine spécialisé, partitions, tests | Payant, pas conçu comme un cours débutant |
| **Méthodes papier** (Stick Control, Syncopation, etc.) | Références techniques solides | Coûteuses, en anglais, sans mode d'emploi pour le débutant |
| **Forums** (La Drummerie, La Taverne des Batteurs) | Réponses de passionnés | Information dispersée, non structurée |

**La place du site :** un parcours gratuit, français, dédié aux rudiments, avec des fiches courtes, de la notation simplifiée et un plan de 12 semaines. Pas un catalogue de vidéos, pas un magazine, pas une méthode papier de plus.

---

## 4. Pédagogie

### 4.1 Les 40 rudiments, organisés en 4 familles

| Famille | Ce qu'elle travaille | Exemples |
|---|---|---|
| **Rolls** | Régularité, rebond, contrôle des doubles | Single stroke roll, double stroke roll, 5-stroke roll |
| **Diddles** | Combinaisons main droite / main gauche | Single paradiddle, double paradiddle |
| **Flams** | Ornements à deux mains | Flam, flam tap, flamacue |
| **Drags** | Ornements avec rebond | Drag, single drag tap, ratamacue |

### 4.2 Progression en 4 niveaux

**Niveau 1 — Fondations (semaines 1–4)**
- Posture, prise, rebond.
- Single stroke roll.
- Double stroke roll.
- Single stroke four et seven.
- Single paradiddle.
- Lecture des cellules de base.
- Métronome à 60–80 BPM.

**Niveau 2 — Consolidation (semaines 5–8)**
- Double paradiddle.
- Flam, flam accent, flam tap.
- Drag.
- Single ratamacue.
- Application à des grooves simples.
- Tempo 70–100 BPM.

**Niveau 3 — Extension (semaines 9–12)**
- 5, 6, 7, 9, 10 et 11 stroke rolls.
- Triple stroke roll.
- Triple paradiddle.
- Paradiddle-diddle.
- Flamacue, flam paradiddle, Swiss Army triplet.
- Application à des fills.
- Tempo 80–110 BPM.

**Niveau 4 — Autonomie (après le programme)**
- Les 40 rudiments.
- Travail de la dynamique.
- Combinaisons et variations.
- Application musicale.

### 4.3 Structure d'une séance

| Durée | Contenu |
|---:|---|
| 5 min | Échauffement : coups simples, rebond, poignets |
| 10 min | Rudiment du jour : lent, puis métronome |
| 5 min | Application : groove ou fill |
| 5 min | Jeu libre ou enregistrement |
| **25 min** | **Total** |

**Fréquence :** 4 séances par semaine minimum, 5 idéalement. Mieux vaut 15 minutes régulières que 2 heures une fois par mois.

### 4.4 Méthode de travail d'un rudiment

1. **Lire** la fiche et regarder la notation.
2. **Compter** à voix haute sans jouer.
3. **Jouer lentement** sans métronome, en vérifiant le geste.
4. **Jouer au métronome** au tempo de départ.
5. **Répéter 8 mesures** sans erreur.
6. **Monter de 5 BPM** seulement quand c'est propre.
7. **Enregistrer** et écouter.
8. **Appliquer** dans un groove ou un fill.

### 4.5 Critères de maîtrise

Un rudiment est considéré comme acquis lorsque :

- il est joué 8 mesures consécutives sans erreur ;
- le tempo cible est atteint sans tension ;
- les deux mains ont un volume équilibré ;
- le geste reste détendu ;
- le rudiment peut être joué fort, moyen et doux ;
- il peut être appliqué dans un exercice musical.

### 4.6 Erreurs fréquentes à traiter

- Serrer les baguettes trop fort.
- Frapper avec les bras au lieu des poignets et des doigts.
- Accélérer sans s'en rendre compte.
- Négliger la main faible.
- Travailer vite avant de travailler proprement.
- Ne jamais appliquer les rudiments à un groove.
- Changer de rudiment avant de l'avoir consolidé.

---

## 5. Programme de 12 semaines

| Semaine | Rudiments | Bases | Application | Tempo cible |
|---:|---|---|---|---:|
| 1 | Single stroke roll | Posture, prise, rebond | Premier groove binaire | 60–70 BPM |
| 2 | Double stroke roll | Lecture : noires et croches | Groove avec doubles | 60–80 BPM |
| 3 | Single stroke four, single stroke seven | Métronome, subdivision | Fill de 4 temps | 70–80 BPM |
| 4 | Single paradiddle | Accents, mains faibles | Groove paradiddle | 70–85 BPM |
| 5 | Double paradiddle | Coordination | Fill paradiddle | 70–85 BPM |
| 6 | Flam, flam accent | Ornements | Groove avec flams | 70–90 BPM |
| 7 | Flam tap, drag | Rebond et contrôle | Fill avec flams | 75–90 BPM |
| 8 | Single ratamacue | Révision mi-parcours | Application libre | 75–95 BPM |
| 9 | 5, 6, 7 stroke rolls | Vitesse contrôlée | Fill de rolls | 80–100 BPM |
| 10 | 9, 10, 11 stroke rolls | Régularité | Groove avec rolls | 80–100 BPM |
| 11 | Triple stroke, triple paradiddle, paradiddle-diddle | Coordination avancée | Fill combiné | 80–105 BPM |
| 12 | Flamacue, flam paradiddle, Swiss Army triplet | Révision et auto-évaluation | Morceau simple | 80–110 BPM |

**Rythme hebdomadaire :** 4 séances de 25 minutes + 1 séance libre. Chaque semaine introduit un rudiment principal et un rudiment secondaire. La semaine 8 et la semaine 12 servent de révision.

---

## 6. Bibliothèque des 40 rudiments

Chaque rudiment a sa fiche. Les fiches sont regroupées par famille et par niveau.

### 6.1 Rolls (15)

1. Single stroke roll
2. Single stroke four
3. Single stroke seven
4. Multiple bounce roll
5. Triple stroke roll
6. Double stroke open roll
7. Five stroke roll
8. Six stroke roll
9. Seven stroke roll
10. Nine stroke roll
11. Ten stroke roll
12. Eleven stroke roll
13. Thirteen stroke roll
14. Fifteen stroke roll
15. Seventeen stroke roll

### 6.2 Diddles (4)

16. Single paradiddle
17. Double paradiddle
18. Triple paradiddle
19. Single paradiddle-diddle

### 6.3 Flams (11)

20. Flam
21. Flam accent
22. Flam tap
23. Flamacue
24. Flam paradiddle
25. Single flammed mill
26. Flam paradiddle-diddle
27. Pataflafla
28. Swiss Army triplet
29. Inverted flam tap
30. Flam drag

### 6.4 Drags (10)

31. Drag
32. Single drag tap
33. Double drag tap
34. Lesson 25
35. Single dragadiddle
36. Drag paradiddle #1
37. Drag paradiddle #2
38. Single ratamacue
39. Double ratamacue
40. Triple ratamacue

### 6.5 Modèle d'une fiche de rudiment

Chaque fiche suit la même structure :

1. **Nom** du rudiment, famille, niveau.
2. **Objectif** en une phrase.
3. **Notation** en 4/4, avec coups d'échauffement.
4. **Tempo de travail** : départ et cible.
5. **Décomposition** main par main.
6. **Tempo de départ** et **tempo cible**.
7. **Consignes** de geste (rebond, hauteur, volume).
8. **Erreurs fréquentes**.
9. **Variantes**.
10. **Application** dans un groove ou un fill.
11. **Critère de validation**.
12. **Rudiment suivant** dans le programme.

**Longueur cible :** 500–800 mots par fiche, 1 schéma de sticking.

---

## 7. Contenus annexes

### 7.1 Les 8 leçons de base

| # | Leçon | Contenu |
|---|---|---|
| 1 | Tenir les baguettes | Prises française, allemande, américaine ; point d'équilibre ; erreurs |
| 2 | Posture et installation | Hauteur du siège, position des pieds, dos, relaxation |
| 3 | Le coup et le rebond | Fulcrum, poignet, doigts, rebond naturel |
| 4 | Lire les rythmes de base | Noires, croches, doubles croches, mesures 4/4 |
| 5 | Le métronome | Pourquoi, comment, tempo de départ, subdivisions |
| 6 | S'échauffer | Routine de 5 minutes sans matériel |
| 7 | Construire une séance | 25 minutes, objectifs, répétition, repos |
| 8 | S'enregistrer et s'auto-évaluer | Téléphone, écoute, critères, journal |

### 7.2 Les 12 exercices d'application

| # | Exercice | Rudiment appliqué |
|---|---|---|
| 1 | Groove binaire avec single stroke | Single stroke roll |
| 2 | Groove avec doubles | Double stroke roll |
| 3 | Fill de 4 temps | Single stroke four |
| 4 | Groove paradiddle | Single paradiddle |
| 5 | Fill paradiddle | Double paradiddle |
| 6 | Groove avec flams | Flam |
| 7 | Fill avec flams | Flam tap |
| 8 | Groove avec drags | Drag |
| 9 | Fill de rolls | 5 et 7 stroke rolls |
| 10 | Groove avec rolls | 9 et 11 stroke rolls |
| 11 | Fill combiné | Triple paradiddle |
| 12 | Morceau simple | Flamacue, Swiss Army triplet |

### 7.3 Ressources imprimables

- **Fiche « Programme 12 semaines »** : tableau de suivi, cases à cocher, tempos.
- **Poster « 40 rudiments »** : noms et séquences de sticking.
- **Journal de pratique** : date, rudiment, tempo, durée, notes.
- **Fiche de séance** : échauffement, rudiment, application, bilan.

Toutes les ressources sont gratuites, sans inscription, imprimables ou enregistrables en PDF depuis le navigateur.

### 7.4 Glossaire

60 termes environ : accent, backbeat, flam, drag, diddle, paradiddle, ratamacue, rebound, rudiment, stroke, subdivision, tempo, mesure, etc. Chaque définition renvoie à une fiche ou à une leçon.

---

## 8. Arborescence et pages

### 8.1 Arborescence

```
/
├── /programme/                 Programme de 12 semaines
├── /bases/                     8 leçons de base
│   ├── /bases/tenir-baguettes/
│   ├── /bases/posture/
│   └── ...
├── /rudiments/                 Bibliothèque des 40 rudiments
│   ├── /rudiments/single-stroke-roll/
│   ├── /rudiments/double-stroke-roll/
│   └── ...
├── /exercices/                 12 applications
├── /ressources/                Fiches imprimables, journal, poster
├── /glossaire/
├── /a-propos/
├── /contact/
├── /mentions-legales/
└── /confidentialite/
```

### 8.2 Accueil

- Promesse : « Apprends les rudiments de la batterie, pas à pas. »
- CTA : « Commencer le programme ».
- 3 étapes : tenir les baguettes → travailler les rudiments → appliquer en groove.
- Aperçu du programme de 12 semaines.
- 4 rudiments mis en avant.
- Accès aux ressources imprimables.
- Lien vers les 40 fiches.

### 8.3 Page Programme

- Explication du parcours.
- Tableau des 12 semaines.
- Temps nécessaire.
- Matériel requis.
- Critères de progression.
- CTA vers la semaine 1.

### 8.4 Page Rudiments

- Introduction aux 40 rudiments.
- Filtres par famille et par niveau.
- Tableau complet avec tempo cible.
- Liens vers chaque fiche.
- Poster imprimable.

### 8.5 Fiche de rudiment

- Fil d'Ariane.
- Titre, famille, niveau.
- Objectif.
- Notation simplifiée.
- Décomposition.
- Tempo de départ / cible.
- Consignes.
- Erreurs fréquentes.
- Variantes.
- Application.
- Critère de validation.
- Rudiment précédent / suivant.
- CTA vers le programme.

### 8.6 Page Bases

- Liste ordonnée des 8 leçons.
- Chaque leçon : 600–1 200 mots, schémas, exercice.
- Liens vers les rudiments concernés.

### 8.7 Page Exercices

- 12 exercices avec notation simplifiée.
- Niveau, rudiment travaillé, tempo.
- Version imprimable.

### 8.8 Page Ressources

- Ressources imprimables ou enregistrables en PDF.
- Aucun formulaire obligatoire.
- Licence d'utilisation : usage personnel et pédagogique, sans republication.

---

## 9. Expérience et design

### 9.1 Principes

- **Lisible.** Le contenu est le produit. Pas de distraction.
- **Mobile-first.** La majorité des débutants consulteront sur téléphone près de leur pad.
- **Imprimable.** Les fiches doivent rester lisibles en noir et blanc.
- **Rapide.** Pas de scripts lourds, pas de vidéo, pas de pop-up.
- **Accessible.** WCAG 2.2 AA.

### 9.2 Direction artistique

- **Palette :** papier chaud `#F6F1E7`, encre `#161616`, accent rouge `#D93A2B`, gris `#6B665E`.
- **Titres :** Bricolage Grotesque ou Space Grotesk.
- **Corps :** Source Serif 4, 18–20 px, interligne 1,7.
- **Notation :** IBM Plex Mono pour les indications de tempo.
- **Style :** carnet de pratique, annotations manuscrites, photos de baguettes et de pads. Pas de banque d'images générique.

### 9.3 Composants

- **Bloc notation** : séquence de sticking, tempo.
- **Bloc « À retenir »** : 3 points.
- **Bloc « Erreur fréquente »** : fond rouge clair.
- **Bloc « À toi de jouer »** : exercice concret.
- **Tableau de progression** : semaine, rudiment, tempo, fait.
- **Bouton imprimer** : version imprimable de la fiche.

### 9.4 Navigation

- Header : Programme, Bases, Rudiments, Exercices, Ressources, Glossaire, recherche.
- Footer : à propos, contact, mentions légales, confidentialité, sources.
- Fil d'Ariane.
- Liens « précédent / suivant » dans le programme.
- Recherche interne côté client.

### 9.5 Accessibilité

- Contraste AA.
- Navigation clavier.
- Focus visible.
- Textes alternatifs.
- Pas d'information par la couleur seule.
- `prefers-reduced-motion`.
- Formulaires avec labels.
- Langue `fr`.

### 9.6 Performance

- LCP < 2,5 s sur mobile 4G.
- CLS < 0,1.
- INP < 200 ms.
- Images AVIF/WebP.
- Polices auto-hébergées.
- Lighthouse ≥ 95.

---

## 10. Architecture technique

### 10.1 Choix

| Couche | Choix | Justification |
|---|---|---|
| Framework | **Next.js 16** (export statique) | SEO, performance, simplicité |
| Contenu | **Données TypeScript dans Git** | Versionné, gratuit, adapté à un seul auteur |
| Style | **CSS natif avec variables** | Aucune dépendance, contrôle total |
| Recherche | **Index client-side** | Statique, sans serveur |
| Notation | **Séquence de sticking en HTML/CSS** | Lisible, imprimable, sans dépendance |
| Hébergement | **GitHub Pages** | Gratuit, CDN |
| Analytics | **Aucun** ou Plausible | Respect de la vie privée |
| Newsletter | **Aucune au lancement** | Pas nécessaire pour la mission |

**Décision :** pas de CMS, pas de base de données, pas de compte. Le site est un ensemble de fichiers statiques.

### 10.2 Modèle de contenu

```yaml
---
title: "Single stroke roll"
slug: "single-stroke-roll"
family: "rolls"
level: 1
summary: "Le rudiment de base : deux coups alternés, réguliers et détendus."
tempoStart: 60
tempoTarget: 100
sticking: ["R", "L", "R", "L", "R", "L", "R", "L"]
prerequisite: "tenir-baguettes"
next: "double-stroke-roll"
---
```

### 10.3 Pourquoi cette stack

- Coût quasi nul.
- Pas de serveur à maintenir.
- Pas de faille de base de données.
- HTML complet pour les moteurs de recherche.
- Sauvegarde dans Git.
- Déploiement automatique à chaque commit.

### 10.4 Coûts techniques

| Poste | Coût |
|---|---:|
| Nom de domaine | 10–15 €/an |
| Hébergement | 0 € |
| Recherche | 0 € |
| Analytics | 0 € |
| **Total** | **10–15 €/an** |

---

## 11. Diffusion

Le site est gratuit. Il n'y a pas d'objectif de croissance commerciale, mais il doit être trouvable par les débutants.

**Priorités :**
1. **SEO de base** : titres clairs, descriptions, structure, sitemap, liens internes.
2. **Requêtes ciblées** : « rudiments batterie », « single stroke roll », « comment tenir les baguettes », « exercices batterie débutant ».
3. **Partenariats** : écoles de musique, professeurs, forums (La Drummerie, La Taverne des Batteurs).
4. **Poster imprimable** : ressource partageable, lien retour naturel.
5. **Bouche-à-oreille** : recommandation par les professeurs.

**Pas d'objectif :** pas de trafic cible, pas de campagne publicitaire, pas de newsletter obligatoire.

---

## 12. Qualité pédagogique et droit

### 12.1 Relecture

- La relecture par un **professeur de batterie** est prévue après le MVP.
- Les tempos seront testés par au moins un débutant.
- Les erreurs fréquentes seront vérifiées en situation.
- Les sources sont citées.

### 12.2 Sources

- Percussive Arts Society, *40 International Drum Rudiments*.
- Vic Firth, organisation des rudiments par niveaux.
- *Stick Control* (George Lawrence Stone) — référence, pas de reproduction.
- *Syncopation* (Ted Reed) — référence, pas de reproduction.
- *Realistic Rock* (Carmine Appice) — référence, pas de reproduction.

### 12.3 Droit d'auteur

- Les 40 rudiments sont des formules traditionnelles, non protégeables en tant que telles.
- Les **textes, séquences de sticking, schémas et ressources imprimables** sont créés pour le site.
- Aucune reproduction de méthode papier, de partition commerciale ou de vidéo.
- Les photos sont originales ou sous licence.
- Les citations courtes sont créditées.
- **Licence : propriété intégrale de LearnBatterie, tous droits réservés.** Toute reproduction ou republication nécessite une autorisation écrite.

### 12.4 Exactitude

- Pas de promesse de résultat.
- Pas de conseil médical.
- En cas de douleur, arrêter et consulter.
- Les tempos sont indicatifs, pas normatifs.

---

## 13. Accessibilité et données

- WCAG 2.2 AA.
- Navigation clavier.
- Contrastes vérifiés.
- Pages imprimables.
- Pas de compte.
- Pas de cookies publicitaires.
- Analytics désactivé ou sans cookie.
- Pas de formulaire de contact avec stockage : les échanges passent par GitHub Issues.
- Politique de confidentialité et mentions légales.

---

## 14. Planning

| Semaine | Livrables |
|---|---|
| 1 | Cadrage, arborescence, liste des 40 rudiments, choix techniques |
| 2 | Rédaction des 8 leçons de base |
| 3 | Rédaction des 12 fiches de niveau 1 |
| 4 | Rédaction des 14 fiches de niveau 2 |
| 5 | Rédaction des 14 fiches de niveau 3–4 |
| 6 | Notation, schémas, ressources imprimables |
| 7 | Développement du site, design, recherche |
| 8 | Intégration, tests, préparation de la relecture |
| 9 | Corrections, accessibilité, performance |
| 10 | Lancement, indexation, contact écoles |

**Version solo :** 10 semaines à 10–15 h/semaine.
**Version équipe :** 5–6 semaines avec un rédacteur, un développeur et un testeur.

---

## 15. Budget

### 15.1 Version lean

| Poste | Montant |
|---|---:|
| Nom de domaine | 15 € |
| Hébergement | 0 € |
| Design (template simple) | 0–300 € |
| Relecture pédagogique (ultérieure) | 0–200 € |
| **Total** | **0–500 €** |

### 15.2 Version confort

| Poste | Montant |
|---|---:|
| Nom de domaine | 15 € |
| Design et développement | 1 000–1 500 € |
| Relecture pédagogique (ultérieure) | 300–500 € |
| Notation et illustrations | 200–400 € |
| **Total** | **1 800–3 000 €** |

### 15.3 Temps de travail

| Tâche | Heures |
|---|---:|
| Rédaction des 8 leçons | 30–40 h |
| Rédaction des 40 fiches | 80–120 h |
| Notation et schémas | 20–35 h |
| Développement et design | 40–60 h |
| Relecture et tests | 20–30 h |
| **Total** | **200–300 h** |

---

## 16. Risques

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Erreur pédagogique | Moyenne | Élevé | Relecture ultérieure par un professeur, tests avec débutants |
| Surcharge de contenu | Élevée | Moyen | Programme de 12 semaines, une fiche à la fois |
| Confusion entre les 40 rudiments | Moyenne | Moyen | Familles, niveaux, prérequis, liens |
| Notation illisible | Moyenne | Moyen | Séquence de sticking grande, version imprimable, légende |
| Droit d'auteur | Faible | Élevé | Contenus originaux, pas de reproduction de méthodes |
| Maintenance | Moyenne | Faible | Site statique, peu de dépendances |
| Perte de motivation | Moyenne | Moyen | Périmètre court, MVP en 10 semaines |
| Dérive vers une plateforme | Moyenne | Élevé | Non-objectifs écrits, pas de compte, pas de vidéo |
| Accessibilité insuffisante | Faible | Moyen | Audit WCAG, tests clavier |

---

## 17. Critères d'acceptation du MVP

### 17.1 Contenu

- [ ] 8 leçons de base.
- [ ] 40 fiches de rudiments.
- [ ] 12 exercices d'application.
- [ ] 1 programme de 12 semaines.
- [ ] 1 glossaire de 60 termes.
- [ ] 4 ressources imprimables : programme, poster, journal, fiche de séance.
- [ ] Chaque fiche a une séquence de sticking, un tempo et un critère de validation.
- [ ] Relecture pédagogique planifiée après le MVP.
- [ ] Aucun contenu vidéo, aucun audio.
- [ ] Aucune publicité, aucun lien affilié, aucune vente.

### 17.2 Technique

- [ ] Site responsive, testé sur iOS et Android.
- [ ] Lighthouse ≥ 95 sur mobile.
- [ ] LCP < 2,5 s, CLS < 0,1, INP < 200 ms.
- [ ] Recherche interne fonctionnelle.
- [ ] Sitemap, robots.txt, canonicals.
- [ ] Données structurées `Article` et `HowTo`.
- [ ] 404 personnalisée.
- [ ] Pages imprimables.
- [ ] Sauvegarde Git.

### 17.3 Accessibilité

- [ ] WCAG 2.2 AA.
- [ ] Navigation clavier.
- [ ] Contrastes vérifiés.
- [ ] Textes alternatifs.
- [ ] Tests avec lecteur d'écran.

### 17.4 Lancement

- [ ] 10 débutants testent le programme.
- [ ] 3 professeurs sont sollicités pour une relecture ultérieure.
- [ ] 20 écoles/professeurs contactés.
- [ ] Aucune erreur critique dans Search Console.
- [ ] Site indexé.

---

## 18. Annexes

### 18.1 Les 40 rudiments

**Rolls (15)**
1. Single stroke roll
2. Single stroke four
3. Single stroke seven
4. Multiple bounce roll
5. Triple stroke roll
6. Double stroke open roll
7. Five stroke roll
8. Six stroke roll
9. Seven stroke roll
10. Nine stroke roll
11. Ten stroke roll
12. Eleven stroke roll
13. Thirteen stroke roll
14. Fifteen stroke roll
15. Seventeen stroke roll

**Diddles (4)**
16. Single paradiddle
17. Double paradiddle
18. Triple paradiddle
19. Single paradiddle-diddle

**Flams (11)**
20. Flam
21. Flam accent
22. Flam tap
23. Flamacue
24. Flam paradiddle
25. Single flammed mill
26. Flam paradiddle-diddle
27. Pataflafla
28. Swiss Army triplet
29. Inverted flam tap
30. Flam drag

**Drags (10)**
31. Drag
32. Single drag tap
33. Double drag tap
34. Lesson 25
35. Single dragadiddle
36. Drag paradiddle #1
37. Drag paradiddle #2
38. Single ratamacue
39. Double ratamacue
40. Triple ratamacue

### 18.2 Modèle de fiche

```text
Rudiment :
Famille :
Niveau :
Objectif :
Séquence de sticking :
Tempo de départ :
Tempo cible :
Décomposition :
Consignes :
Erreurs fréquentes :
Variantes :
Application :
Critère de validation :
Rudiment suivant :
```

### 18.3 Modèle de leçon de base

```text
Titre :
Objectif :
Prérequis :
Matériel :
Explication :
Schéma :
Exercice :
Erreurs fréquentes :
À retenir :
Rudiment lié :
```

### 18.4 Sources

- Percussive Arts Society, *40 International Drum Rudiments*.
- Vic Firth, *Rudiments*.
- George Lawrence Stone, *Stick Control* (référence).
- Ted Reed, *Progressive Steps to Syncopation* (référence).
- Carmine Appice, *Realistic Rock* (référence).
- WCAG 2.2, W3C.
- CNIL, recommandations RGPD.

### 18.5 Décisions à prendre

| Décision | Options | Recommandation |
|---|---|---|
| Nom | LearnBatterie / autre | LearnBatterie, provisoire |
| Audio | Maintenant / plus tard | Aucun audio au MVP |
| Notation | Séquence de sticking / portée complète | Séquence de sticking au MVP |
| Analytics | Aucun / Plausible | Aucun |
| Licence | Propriété intégrale / Creative Commons | Propriété intégrale, tous droits réservés |
| Public | Adultes / adolescents + adultes | 15 ans et plus |
| Relecteur | Maintenant / plus tard | Plus tard |
| Version anglaise | Oui / non | Non au lancement |

---

**Fin du cahier des charges.**
