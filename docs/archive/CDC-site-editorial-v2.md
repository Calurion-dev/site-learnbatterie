# Cahier des charges — LearnBatterie

**Site éditorial 100 % informatif pour apprendre la batterie**

- Version : 2.0
- Date : octobre 2026
- Statut : proposition à valider
- Périmètre : site de contenu francophone, sans vidéo et sans plateforme interactive au lancement.
- Document précédent : `docs/archive/CDC-plateforme-v1.md` (version plateforme, conservée pour mémoire).

---

## 0. Résumé exécutif

**Le problème.** Un débutant qui veut apprendre la batterie trouve des milliers de vidéos YouTube, quelques blogs français, des forums et des magazines. Mais l'information est dispersée, rarement structurée, souvent anglophone, parfois ancienne ou intéressée. Il ne sait pas quoi lire, dans quel ordre, ni à qui faire confiance. Les cours particuliers coûtent 25–30 €/h et ne répondent pas aux questions matérielles du quotidien.

**La solution.** Un site éditorial français, indépendant et structuré, qui répond aux questions concrètes des batteurs débutants et intermédiaires : quel matériel acheter, comment tenir les baguettes, quel exercice travailler, comment progresser, où trouver des partitions. Des guides longs, des articles courts, des schémas, des exemples audio, des fiches d'exercices et des PDF téléchargeables. **Pas de vidéo, pas de practice room, pas de compte utilisateur au lancement.**

**Le MVP.** 40 articles à la mise en ligne, dont 4 guides piliers, répartis en 4 silos : Débuter, Progresser, Matériel, Jouer. Site statique rapide, recherche interne, newsletter, statistiques, pages légales. Lancement en 12 semaines.

**Le budget.** 15 000–25 000 € en version lean, 30 000–45 000 € en version confort. Coût de fonctionnement : 2 000–4 000 €/mois.

**Les indicateurs à 12 mois.** 100 articles publiés, 20 000–30 000 sessions organiques/mois, 2 000–3 000 abonnés newsletter. Ce sont des hypothèses de travail, pas des promesses.

---

## 1. Contexte et problème

### 1.1 Ce que vit le débutant

Les recherches et les témoignages de batteurs convergent vers cinq difficultés :

1. **Trop d'informations, pas d'ordre.** YouTube propose des cours excellents et des vidéos contradictoires, sans parcours lisible. Le débutant passe plus de temps à chercher qu'à jouer.
2. **Pas de retour.** Personne ne lui dit s'il tient mal ses baguettes, s'il frappe trop fort, s'il joue en avance ou en retard.
3. **Des questions matérielles sans réponse claire.** Acoustique ou électronique ? Quel budget ? Quel casque ? Comment jouer en appartement ? Les réponses sont souvent noyées dans des comparatifs peu transparents.
4. **Le coût et les horaires des cours.** 25–30 €/h en moyenne en France, avec une disponibilité limitée. Tout le monde n'est pas prêt à s'engager immédiatement.
5. **Le découragement.** La progression est lente, les objectifs flous, et le plaisir diminue quand on ne sait pas quoi travailler.

### 1.2 Ce que le site apporte

Le site ne remplace pas un professeur. Il fait ce qu'un bon professeur ne peut pas faire à grande échelle :

- répondre **avant** l'achat et **avant** la première leçon ;
- donner un **ordre de lecture** et un **plan d'entraînement** ;
- expliquer des gestes et des notions avec des **schémas, des partitions et des extraits audio** ;
- fournir des **ressources téléchargeables** (fiches, programmes, posters) ;
- offrir une information **indépendante et datée**, avec des sources et une politique de test claire.

### 1.3 Pourquoi maintenant

- La demande pour l'apprentissage musical en ligne continue de croître : le marché mondial est estimé à **4,61 Md$ en 2026**, avec une projection à **9,36 Md$ en 2031** (CAGR 15,23 %, Mordor Intelligence). Les estimations varient selon le périmètre, mais la tendance est robuste.
- Les recherches « apprendre la batterie », « quelle batterie choisir » ou « batterie appartement » sont des intentions durables, peu saisonnières, avec une forte composante matérielle.
- Les concurrents français sont soit des blogs marchands, soit des sites de professeurs, soit des magazines. Peu combinent **profondeur pédagogique, transparence matérielle et SEO structuré**.
- La production vidéo est chère et lente. Un site textuel peut être lancé plus vite, enrichi progressivement, et reste très bien référencé.

### 1.4 Ce que le site n'est pas

- Ce n'est pas une école de musique en ligne avec cours vidéo.
- Ce n'est pas un forum ni une communauté.
- Ce n'est pas un moteur de feedback MIDI.
- Ce n'est pas un magazine d'actualité people.
- Ce n'est pas un site marchand : il recommande, il ne vend pas de batterie.

---

## 2. Marché et concurrence

### 2.1 Données de marché utiles

| Indicateur | Valeur | Source / remarque |
|---|---:|---|
| Marché mondial de l'enseignement musical en ligne (2026) | 4,61 Md$ | Mordor Intelligence |
| Projection 2031 | 9,36 Md$ | Mordor Intelligence |
| CAGR 2026–2031 | 15,23 % | Mordor Intelligence |
| Part des applications dans le marché | 50,75 % | Mordor Intelligence, 2025 |
| Part des cours auto-rythmés | 49,05 % | Mordor Intelligence, 2025 |
| Cours particuliers de batterie en France | 25–30 €/h | Superprof, ProfesseurParticulier |
| Batterie électronique débutant | 349–399 € | Roland TD-02K, Alesis Nitro Max |
| Abonnement Drumeo | 30 $/mois ou 279 $/an | Prix public, octobre 2026 |
| Abonnement Melodics | 131,88–179,88 $/an | Prix public, octobre 2026 |
| Abonnement Drum Coach | 59,99 $/an | Prix public, octobre 2026 |
| imusic-school | 9,90–14,90 €/mois | Prix public, France |

**Lecture.** Le marché est assez large pour un site éditorial, la concurrence française est fragmentée et les attentes des débutants restent mal couvertes.

### 2.2 Concurrents éditoriaux français

| Site | Nature | Forces | Faiblesses |
|---|---|---|---|
| **Batterie Facile** (batteriefacile.com) | Blog pédagogique et matériel | Ton simple, articles sur les baguettes, casques, e-drums, partitions | Couverture limitée, peu de guides piliers, marque peu connue |
| **Académie Puchol** (academiepuchol.fr) | Site d'un professeur | Cours gratuits, guides débutant, crédibilité pédagogique, vidéos | Dépend d'une personne, structure SEO perfectible, offre limitée |
| **La Baguetterie** (baguetterie.fr) | E-commerce avec guide | Guide « Apprendre la batterie » complet, autorité marchande | Contenu orienté catalogue, peu de mises à jour éditoriales |
| **Batterie / Batteur Magazine** (batteriemagazine.com) | Magazine papier et numérique | Actualité, interviews, tests, partitions, guide des écoles | Modèle payant, contenu peu optimisé pour la recherche, pas de parcours débutant |
| **La Drummerie** | Forum | Communauté, réponses de passionnés | Information non structurée, difficile à retrouver |
| **La Taverne des Batteurs** | Forum | Communauté | Même limite |
| **YouTube** | Vidéo | Gratuit, infini, démonstrations | Pas de structure, pas de correction, dépend de l'attention |
| **Drumeo / Melodics / Drum Coach** | Plateformes | Cours structurés, feedback, morceaux | Anglais, payant, vidéo ou MIDI obligatoire |

### 2.3 Concurrents anglophones éditoriaux

Des sites comme **E-Drum Picks**, **Electronic Drum Advisor**, **e-drumset.com**, **DrumEssentials** ou **Drummer Survival** montrent qu'un site éditorial de guides et de conseils débutant peut trouver son public. Leur faiblesse en France : langue, disponibilité des modèles et contexte culturel.

### 2.4 Analyse de la brèche

La brèche n'est pas « encore un blog de batterie ». Elle est :

> **Le site français qui répond d'abord aux questions, avec une structure de progression claire, des ressources réellement utiles et une transparence totale sur les recommandations matérielles.**

Trois différenciateurs :

1. **Parcours, pas catalogue.** Chaque article sait où il se situe dans un silo et quel est le prochain article à lire.
2. **Preuves, pas promesses.** Schémas, partitions, extraits audio, sources, dates de mise à jour, méthodologie de test.
3. **Transparence assumée.** Les critères de recommandation et la méthodologie de test sont publics.

### 2.5 SWOT

| Forces | Faiblesses |
|---|---|
| Coût de production contenu inférieur à la vidéo ; SEO durable ; français ; structure claire ; contenu réutilisable | Pas de notoriété initiale ; pas de communauté ; dépendance à Google ; contenu facile à copier |
| **Opportunités** | **Menaces** |
| Demande stable ; concurrents français peu structurés ; IA qui valorise les sources fiables | AI Overviews qui réduisent les clics ; mises à jour Google ; concurrence de sites établis ; hausse du coût des liens |

---

## 3. Cibles et personas

### 3.1 Persona principal — Thomas, 34 ans, débutant

- **Situation.** Il vient d'acheter ou veut acheter une batterie électronique. Il a un appartement, un budget de 400–800 €, et 20 minutes par jour.
- **Questions.** « Quelle batterie ? », « Est-ce que je vais déranger les voisins ? », « Par où je commence ? », « Combien de temps pour jouer un morceau ? »
- **Ce qu'il veut.** Une réponse claire, un comparatif honnête, un premier plan d'action.
- **Ce qui le fait partir.** Un article qui ne répond qu'après 800 mots de blabla, un comparatif qui recommande le produit le plus cher, une vidéo de 25 minutes.

### 3.2 Persona secondaire — Sofia, 27 ans, reprise

- **Situation.** Elle a joué deux ans au lycée, s'y remet. Elle cherche des exercices, des rudiments, des grooves, des partitions.
- **Questions.** « Comment travailler mon indépendance ? », « Quel fill pour débuter ? », « Comment jouer ce groove ? »
- **Ce qu'elle veut.** Des fiches courtes, progressives, avec audio et notation.
- **Ce qui la fait partir.** Du contenu trop débutant ou trop théorique.

### 3.3 Persona tertiaire — Karim, 42 ans, parent

- **Situation.** Il cherche un cadeau ou un premier kit pour son enfant de 8–12 ans.
- **Questions.** « Quelle batterie pour un enfant ? », « Est-ce trop bruyant ? », « Faut-il un professeur ? »
- **Ce qu'il veut.** Un guide d'achat rassurant, des critères objectifs, un budget.
- **Valeur.** Fort besoin d'informations claires avant l'achat, faible fréquence de retour.

### 3.4 Persona tertiaire — Professeur / école

- **Situation.** Il cherche des ressources à recommander à ses élèves.
- **Ce qu'il veut.** Des fiches imprimables, des exercices progressifs, des articles fiables.
- **Valeur.** Backlinks, prescription, crédibilité.

### 3.5 Jobs-to-be-done

| Moment | Job | Contenu attendu |
|---|---|---|
| Avant l'achat | « Aide-moi à choisir sans me faire avoir » | Guide d'achat, comparatif, budget, questions à se poser |
| Première semaine | « Dis-moi quoi faire aujourd'hui » | Installation, tenue des baguettes, premier rythme, routine 10 min |
| Premier mois | « Aide-moi à ne pas abandonner » | Plan 30 jours, erreurs fréquentes, métronome, objectifs |
| Mois 2–6 | « Aide-moi à progresser » | Rudiments, independence, grooves, fills, dynamique |
| Achat suivant | « Que dois-je acheter ensuite ? » | Casque, baguettes, pad, double pédale, cymbales |
| Jeu en groupe | « Comment jouer avec d'autres ? » | Tempo, écoute, setlists, répétition |

---

## 4. Positionnement et ligne éditoriale

### 4.1 Promesse

> **Apprendre la batterie, sans se perdre.**

Le site donne des réponses claires, hiérarchisées et vérifiées aux batteurs francophones, du premier achat au jeu en groupe.

### 4.2 Les 4 piliers

| Pilier | Promesse | Exemples de contenus |
|---|---|---|
| **Débuter** | Faire les bons choix et démarrer proprement | Quel kit, quel budget, posture, premier beat, installation |
| **Progresser** | Savoir quoi travailler et comment | Rudiments, independence, grooves, fills, tempo, dynamique |
| **Matériel** | Acheter au bon prix, sans mauvaise surprise | Guides d'achat, comparatifs, casques, baguettes, pads |
| **Jouer** | Passer de l'exercice à la musique | Partitions, morceaux faciles, styles, jeu en groupe |

### 4.3 Ton et style

- **Direct.** La réponse arrive dans les 40–60 premiers mots.
- **Tutoiement.** Le site parle à un batteur, pas à un comité.
- **Concret.** Chaque conseil est actionnable : quoi faire, combien de temps, à quel tempo.
- **Sans jargon inutile.** Les termes techniques sont définis à leur première occurrence.
- **Humble.** On ne prétend pas remplacer un professeur. On dit ce qu'on sait et ce qu'on ne sait pas.
- **Daté.** Chaque article indique sa date de publication et de dernière mise à jour.

### 4.4 Principes éditoriaux

1. **Répondre avant de raconter.** Pas d'introduction de 500 mots.
2. **Une promesse par article.** Le titre et l'introduction annoncent la même chose.
3. **Des sources.** Chaque affirmation technique ou matérielle importante est justifiée.
4. **Des tests honnêtes.** Un produit non testé est présenté comme tel.
5. **Zéro classement influencé.** Les recommandations reposent sur des critères publics.
6. **Des mises à jour.** Les guides d'achat sont revus au moins deux fois par an.
7. **Pas de contenu généré sans relecture humaine.** L'IA peut aider à structurer, jamais à publier.

### 4.5 Nom et identité (à valider)

- **Nom de travail :** LearnBatterie.
- **Alternative :** Le Batteur Débutant, Tempo Facile, Derrière les Fûts.
- **Signature :** « Apprendre la batterie, sans se perdre. »
- **Identité visuelle :** éditoriale, chaleureuse, inspirée des pochettes de vinyles et des affiches de concert. Fond papier, noir profond, un accent rouge-orangé. Typographie expressive pour les titres, très lisible pour le corps.

---

## 5. Objectifs et indicateurs

### 5.1 Objectifs

| Horizon | Objectif |
|---|---|
| **6 mois** | Être indexé, publier 60 articles, atteindre 5 000 sessions organiques/mois, 500 abonnés newsletter |
| **12 mois** | 100 articles, 20 000–30 000 sessions/mois, 2 000 abonnés newsletter |
| **24 mois** | 180 articles, 80 000 sessions/mois, 6 000–8 000 abonnés newsletter |
| **36 mois** | Autorité reconnue en France, 150 000 sessions/mois, 10 000 abonnés newsletter, éventuelle plateforme |

### 5.2 Indicateurs

**Acquisition**
- Sessions organiques.
- Pages indexées.
- Position moyenne sur les 50 requêtes prioritaires.
- CTR moyen.
- Nombre de backlinks de qualité.

**Engagement**
- Temps de lecture médian.
- Taux de scroll à 75 %.
- Pages par session.
- Taux de clic sur les liens internes.
- Écoutes audio.

**Audience**
- Taux d'inscription newsletter.
- Taux de retour.
- Abonnés actifs.
- Taux d'ouverture des emails.

**Qualité**
- Nombre d'articles mis à jour.
- Nombre de corrections factuelles.
- Part des articles avec sources.
- Score Lighthouse.

### 5.3 North Star

**Sessions organiques qualifiées** (visiteurs venant de la recherche et lisant au moins 2 pages) + **abonnés newsletter actifs**. Le trafic seul ne suffit pas : un visiteur qui ne lit rien ne revient pas.

---

## 6. Périmètre

### 6.1 MVP — site informatif (12 semaines)

**Inclus**
- Site statique responsive.
- 4 guides piliers (3 000–5 000 mots chacun).
- 36 articles clusters (1 200–2 000 mots).
- 1 glossaire de 60 termes.
- 10 fiches d'exercices avec notation et audio court.
- 10 guides d'achat / comparatifs.
- Recherche interne.
- Newsletter.
- Pages : accueil, 4 hubs, à propos, contact, mentions légales, politique de confidentialité, politique éditoriale.
- SEO technique complet.
- Statistiques d'audience et événements de conversion.

**Exclu du MVP**
- Vidéo.
- Cours vidéo.
- Compte utilisateur.
- Practice room.
- Feedback MIDI.
- Forum / commentaires.
- Application mobile.
- Podcast.
- Version anglaise.

### 6.2 V2 — enrichissement (mois 4–9)

- 60 articles supplémentaires.
- Outil métronome gratuit (Web Audio API).
- Lecteur de partitions alphaTab pour les exercices originaux.
- Quiz « Quel kit pour moi ? ».
- Espace « Mon plan 30 jours » sans compte (localStorage + PDF).

### 6.3 V3 — plateforme (mois 12+, optionnel)

- Compte utilisateur.
- Suivi de pratique.
- Cours vidéo.
- Feedback MIDI sur batterie électronique.
- Application mobile.

**Décision :** V3 n'est lancée que si le site atteint 50 000 sessions/mois, 5 000 abonnés newsletter et une demande explicite des lecteurs. La plateforme est un autre métier ; elle ne doit pas fragiliser le site éditorial.

---

## 7. Arborescence et expérience

### 7.1 Arborescence

```
/
├── /debuter/                  Hub + articles
│   ├── /debuter/quel-batterie-choisir/
│   ├── /debuter/tenir-baguettes/
│   ├── /debuter/premier-rythme/
│   └── ...
├── /progresser/               Hub + articles
│   ├── /progresser/rudiments/
│   ├── /progresser/independance/
│   └── ...
├── /materiel/                 Hub + guides d'achat
│   ├── /materiel/meilleure-batterie-electronique-debutant/
│   ├── /materiel/casque-batterie/
│   └── ...
├── /jouer/                    Hub + partitions et morceaux
│   ├── /jouer/morceaux-faciles-batterie/
│   └── ...
├── /glossaire/
├── /a-propos/
├── /politique-editoriale/
├── /contact/
├── /newsletter/
├── /mentions-legales/
└── /confidentialite/
```

**Règles d'URL**
- Minuscules, tirets, sans accents.
- Pas de date dans l'URL.
- Pas de catégorie en double.
- Redirections 301 si un slug change.

### 7.2 Modèles de pages

**Accueil**
- Hero : promesse + recherche + CTA « Commencer ».
- Parcours en 3 étapes : choisir, débuter, progresser.
- 4 hubs.
- Derniers articles.
- Guide d'achat mis en avant.
- Newsletter.
- Preuve d'autorité : auteur, méthode, mises à jour.

**Hub**
- Introduction courte (150 mots).
- Parcours recommandé (liste ordonnée).
- Tous les articles du silo, filtrables par niveau.
- Guide pilier mis en avant.
- FAQ.
- Newsletter.

**Article**
- Fil d'Ariane.
- Titre + réponse en 40–60 mots.
- Métadonnées : auteur, date, temps de lecture, niveau.
- Sommaire sticky.
- Corps avec H2/H3, encadrés, schémas, audio, notation.
- « À retenir » en 3 points.
- Articles liés.
- Bio auteur.
- Date de mise à jour.
- CTA newsletter.

**Fiche d'exercice**
- Objectif.
- Niveau.
- Tempo de départ.
- Notation.
- Audio.
- Variantes.
- Erreurs fréquentes.
- Progression.
- PDF imprimable.

**Guide d'achat**
- Verdict en 3 lignes.
- Tableau comparatif.
- Critères de sélection.
- Recommandations par budget.
- Ce qu'il faut éviter.
- Méthodologie de test.
- FAQ.
- Mise à jour.

### 7.3 Parcours utilisateur

**Parcours 1 — Avant l'achat**
Recherche Google « quelle batterie pour débuter » → guide pilier → comparatif → guide budget → newsletter → retour au site pour « premier rythme ».

**Parcours 2 — Première semaine**
Recherche « comment tenir les baguettes » → article → fiche exercice → routine 10 minutes → plan 30 jours → newsletter.

**Parcours 3 — Progression**
Recherche « rudiments batterie » → guide pilier → fiches individuelles → exercices audio → article « routine 30 minutes » → fiche PDF gratuite.

### 7.4 Navigation

- Header : Débuter, Progresser, Matériel, Jouer, Glossaire, recherche.
- Footer : à propos, politique éditoriale, contact, mentions légales, newsletter, RSS.
- Fil d'Ariane sur toutes les pages.
- Liens internes contextuels : 3–6 par article.
- « Prochain article » en fin de lecture.

---

## 8. Plan éditorial

### 8.1 Les 4 silos et le glossaire

| Silo | Rôle | Nombre d'articles au lancement |
|---|---|---:|
| Débuter | Attirer et rassurer les débutants | 12 |
| Progresser | Fidéliser et approfondir | 10 |
| Matériel | Capter l'intention d'achat | 10 |
| Jouer | Passer à la pratique musicale | 8 |
| Glossaire | SEO longue traîne et définitions | 60 termes |
| **Total** | | **40 articles + 60 termes** |

### 8.2 Les 40 articles du lancement

**Débuter (12)**

| # | Titre | Requête cible | Intention | Format |
|---|---|---|---|---|
| 1 | Apprendre la batterie : le guide complet pour débuter | apprendre la batterie | Information | Pilier 4 000 mots |
| 2 | Comment tenir ses baguettes : les 3 prises expliquées | tenir baguettes batterie | Information | 1 800 mots + schémas |
| 3 | Quelle batterie choisir pour débuter ? Acoustique ou électronique | quelle batterie choisir débutant | Comparaison | 2 200 mots |
| 4 | Combien coûte une batterie pour débuter ? Budget complet | prix batterie débutant | Information | 1 800 mots |
| 5 | Batterie en appartement : 8 solutions pour jouer sans déranger | batterie appartement | Information | 1 800 mots |
| 6 | Comment lire une partition de batterie | lire partition batterie | Tutoriel | 2 000 mots + notation |
| 7 | Ton premier rythme à la batterie : le rock beat | premier rythme batterie | Tutoriel | 1 500 mots + audio |
| 8 | Installer sa batterie : position, réglages, accessoires | installer batterie | Tutoriel | 1 800 mots |
| 9 | Échauffement batterie : la routine de 10 minutes | échauffement batterie | Tutoriel | 1 200 mots + audio |
| 10 | Combien de temps faut-il pour apprendre la batterie ? | combien de temps apprendre batterie | Information | 1 500 mots |
| 11 | Apprendre seul ou prendre des cours ? Le vrai comparatif | apprendre batterie seul | Comparaison | 2 000 mots |
| 12 | Les 10 erreurs de débutant à éviter | erreurs débutant batterie | Information | 1 800 mots |

**Progresser (10)**

| # | Titre | Requête cible | Intention | Format |
|---|---|---|---|---|
| 13 | Les 40 rudiments de batterie : guide complet | rudiments batterie | Information | Pilier 4 500 mots |
| 14 | Le single stroke roll : technique et exercices | single stroke roll | Tutoriel | 1 500 mots + audio |
| 15 | Le double stroke roll : la méthode pas à pas | double stroke roll | Tutoriel | 1 500 mots + audio |
| 16 | Les paradiddles : 8 variantes utiles | paradiddle batterie | Tutoriel | 1 800 mots + audio |
| 17 | Flams et drags : les ornements essentiels | flam batterie | Tutoriel | 1 500 mots + audio |
| 18 | Indépendance des mains et des pieds : 12 exercices | indépendance batterie | Tutoriel | 2 000 mots + audio |
| 19 | Ghost notes : le groove qui respire | ghost notes batterie | Tutoriel | 1 500 mots + audio |
| 20 | 20 fills faciles pour débuter | fills batterie | Tutoriel | 1 800 mots + audio |
| 21 | Travailler son tempo au métronome | travailler tempo batterie | Tutoriel | 1 800 mots |
| 22 | La routine de pratique de 30 minutes | routine batterie | Tutoriel | 1 500 mots + PDF |

**Matériel (10)**

| # | Titre | Requête cible | Intention | Format |
|---|---|---|---|---|
| 23 | Meilleure batterie électronique pour débuter en 2026 | meilleure batterie électronique débutant | Transaction | Pilier 3 500 mots |
| 24 | Meilleure batterie acoustique pour débuter | meilleure batterie acoustique débutant | Transaction | 2 500 mots |
| 25 | Alesis Nitro Max vs Roland TD-02K : lequel choisir ? | alesis nitro max vs roland td-02k | Comparaison | 2 000 mots |
| 26 | Quel casque pour jouer de la batterie électronique ? | casque batterie électronique | Transaction | 2 000 mots |
| 27 | Quelles baguettes choisir ? Tailles, bois, modèles | baguettes batterie | Transaction | 1 800 mots |
| 28 | Meilleur pad d'entraînement | pad entraînement batterie | Transaction | 1 800 mots |
| 29 | Meilleure batterie pour enfant | batterie enfant | Transaction | 2 000 mots |
| 30 | Batterie silencieuse : mythes et solutions réelles | batterie silencieuse | Information | 1 800 mots |
| 31 | Les accessoires indispensables pour débuter | accessoires batterie débutant | Transaction | 1 500 mots |
| 32 | Double pédale : faut-il commencer tout de suite ? | double pédale débutant | Information | 1 500 mots |

**Jouer (8)**

| # | Titre | Requête cible | Intention | Format |
|---|---|---|---|---|
| 33 | 10 morceaux faciles à la batterie pour débuter | morceaux faciles batterie | Information | 2 500 mots |
| 34 | Où trouver des partitions de batterie ? | partition batterie débutant | Information | 1 800 mots |
| 35 | Jouer du rock : 5 grooves incontournables | groove rock batterie | Tutoriel | 2 000 mots + audio |
| 36 | Jouer du funk : les bases du groove | groove funk batterie | Tutoriel | 2 000 mots + audio |
| 37 | Jouer du jazz : shuffle et cymbal ride | groove jazz batterie | Tutoriel | 2 200 mots + audio |
| 38 | Jouer du reggae : le one drop | groove reggae batterie | Tutoriel | 1 500 mots + audio |
| 39 | Comment jouer en groupe pour la première fois | jouer en groupe batterie | Information | 2 000 mots |
| 40 | Improviser un solo : par où commencer | solo batterie | Tutoriel | 1 800 mots |

### 8.3 Calendrier de production

| Période | Objectif | Cadence |
|---|---|---|
| Semaines 1–12 | 40 articles + 4 piliers + glossaire | 4–5 articles/semaine |
| Mois 4–6 | 30 articles supplémentaires | 2–3/semaine |
| Mois 7–12 | 30 articles + mises à jour | 2/semaine |
| Année 2 | 80 articles + refonte des piliers | 2/semaine |

**Règle :** ne pas publier plus vite que la capacité de relecture. Un article faible coûte plus cher qu'un article absent.

### 8.4 Modèles de contenu

**Guide pilier (3 000–5 000 mots)**
- Réponse directe.
- Définition et enjeux.
- Étapes numérotées.
- Schémas et exemples audio.
- Erreurs fréquentes.
- Plan d'action.
- FAQ.
- Sources.
- Liens vers les clusters.

**Article cluster (1 200–2 000 mots)**
- Réponse directe.
- 3–6 sections.
- Un exemple concret.
- Une erreur à éviter.
- Un exercice ou une action.
- Liens vers le pilier et 2 articles voisins.

**Guide d'achat (2 500–3 500 mots)**
- Verdict.
- Tableau comparatif.
- Critères.
- Sélections par budget.
- À éviter.
- Méthodologie.
- FAQ.
- Divulgation.

**Fiche d'exercice (800–1 200 mots)**
- Objectif.
- Niveau.
- Notation.
- Audio.
- Tempo.
- Variantes.
- Erreurs.
- Progression.

**Glossaire (150–400 mots)**
- Définition.
- Exemple.
- Lien vers un article.

### 8.5 Règles de maillage interne

- Chaque cluster linke vers son pilier.
- Chaque pilier linke vers tous ses clusters.
- Chaque article linke vers 2–4 articles du même silo.
- Les guides d'achat linkent vers les articles « Débuter » pertinents.
- Les articles « Jouer » linkent vers les fiches d'exercices.
- Pas de lien interne sans ancre descriptive.
- Mise à jour des liens lors de chaque nouvelle publication.

---

## 9. UX/UI et design

### 9.1 Principes

- **La lecture d'abord.** Le contenu est le produit. Pas de carrousel, pas de pop-up intrusif, pas de vidéo en autoplay.
- **La confiance se voit.** Auteur, date, sources, méthodologie, divulgation.
- **Le mobile est la référence.** 60–70 % du trafic attendu.
- **La vitesse fait partie du design.** Pas de police lourde, pas d'image inutile.
- **L'accessibilité n'est pas une option.** WCAG 2.2 AA.

### 9.2 Direction artistique

- **Palette :** papier chaud `#F6F1E7`, encre `#161616`, accent `#E4472B`, gris `#6B665E`.
- **Titres :** Bricolage Grotesque ou Space Grotesk, graisse 600–700.
- **Corps :** Source Serif 4 ou Instrument Sans, 18–20 px, interligne 1,7.
- **Code / notation :** IBM Plex Mono.
- **Photos :** vraies photos de batterie, lumière naturelle, cadrages serrés. Pas de banque d'images générique.
- **Schémas :** trait noir, accent rouge, légendes courtes.
- **Motif :** cercles de cymbales, lignes de portée, textures de peau.

### 9.3 Composants

- **Carte article** : catégorie, titre, temps de lecture, niveau.
- **Bloc « À retenir »** : 3 puces.
- **Bloc « Erreur fréquente »** : fond rouge clair.
- **Bloc « Exercice »** : tempo, notation, audio.
- **Lecteur audio** : play/pause, vitesse 0,75×/1×, téléchargement.
- **Tableau comparatif** : sticky header sur mobile.
- **Verdict matériel** : « Pour qui », « Pour qui pas », « Budget ».
- **Sommaire** : sticky desktop, accordéon mobile.
- **Bio auteur** : photo, parcours, liens.
- **CTA newsletter** : inline, sans pop-up.

### 9.4 Accessibilité

- Contraste AA minimum.
- Navigation clavier complète.
- Focus visible.
- Textes alternatifs.
- Transcripts des audio.
- Pas d'information portée par la couleur seule.
- `prefers-reduced-motion` respecté.
- Formulaires avec labels.
- Langue déclarée `fr`.
- Tests avec NVDA et VoiceOver.

### 9.5 Performance

- LCP < 2,5 s sur mobile 4G.
- CLS < 0,1.
- INP < 200 ms.
- Images en AVIF/WebP, dimensions explicites.
- Polices auto-hébergées, `font-display: swap`.
- Pas de JavaScript inutile.
- Score Lighthouse ≥ 95 en performance, SEO, accessibilité, bonnes pratiques.

---

## 10. Architecture technique

### 10.1 Choix recommandé

| Couche | Choix | Justification |
|---|---|---|
| Framework | **Next.js 15** (App Router, export statique) | SEO, performance, écosystème, images optimisées |
| Contenu | **MDX dans le dépôt Git** | Simple, versionné, gratuit, adapté à 1–2 rédacteurs |
| Style | **Tailwind CSS** | Rapidité, cohérence, faible CSS final |
| Recherche | **Pagefind** | Index statique, aucune infrastructure |
| Hébergement | **Vercel** ou **Cloudflare Pages** | Déploiement continu, CDN, coût faible |
| Analytics | **Plausible** ou **Umami** | Mesure d'audience légère, respect de la vie privée |
| Newsletter | **Buttondown** ou **ConvertKit** | Double opt-in, intégration simple |
| Audio | **Cloudflare R2** ou fichiers statiques | Coût faible, CDN |
| Commentaires | **Aucun** | Coût de modération, risque juridique |

**Décision :** MDX + Git pour le MVP. Si plus de deux rédacteurs ou besoin d'édition par des non-techniciens, migrer vers **Sanity** ou **Payload**. Ne pas installer un CMS headless dès le premier jour.

### 10.2 Pourquoi un site statique

- Coût d'hébergement quasi nul.
- Sécurité : pas de base de données exposée.
- Performance : pages pré-générées, CDN.
- SEO : HTML complet, pas de rendu client.
- Simplicité : pas de serveur à maintenir.
- Sauvegarde : le contenu est dans Git.

### 10.3 Modèle de contenu

Frontmatter type :

```yaml
---
title: "Comment tenir ses baguettes : les 3 prises expliquées"
slug: "tenir-baguettes"
description: "Prises française, allemande et américaine : laquelle choisir, comment placer ses doigts et quel exercice faire pour trouver la bonne."
publishedAt: "2026-10-20"
updatedAt: "2026-10-20"
author: "prenom-nom"
category: "debuter"
tags: ["baguettes", "technique", "debutant"]
keyword: "tenir baguettes batterie"
intent: "information"
level: "debutant"
format: "tutoriel"
featuredImage: "/images/tenir-baguettes.jpg"
imageAlt: "Mains tenant des baguettes au-dessus d'une caisse claire"
audio: "/audio/tenir-baguettes.mp3"
notation: null
draft: false
---
```

### 10.4 Intégrations

- **Newsletter** : formulaire inline + page dédiée, double opt-in, export CSV.
- **Recherche** : Pagefind, résultats instantanés, pas de dépendance serveur.
- **SEO** : `sitemap.xml`, `robots.txt`, RSS, canonicals, Open Graph, JSON-LD.
- **Partage** : boutons sobres, pas de scripts tiers lourds.

### 10.5 Suivi et événements

| Événement | But |
|---|---|
| `newsletter_signup` | Mesurer la conversion |
| `pdf_download` | Mesurer l'usage des ressources |
| `audio_play` | Mesurer l'usage des ressources |
| `scroll_75` | Mesurer la lecture réelle |
| `internal_link_click` | Comprendre les parcours |
| `search` | Identifier les besoins non couverts |

### 10.6 Sécurité et sauvegarde

- HTTPS obligatoire.
- Dépendances mises à jour mensuellement.
- Aucun secret dans le dépôt.
- Sauvegarde du contenu dans Git + export mensuel.
- 2FA sur Vercel, GitHub, newsletter.
- Politique de mots de passe via gestionnaire.

### 10.7 Coûts techniques

| Poste | Coût mensuel |
|---|---:|
| Hébergement | 0–20 € |
| Nom de domaine | ~1–2 €/mois |
| Analytics | 0–9 € |
| Newsletter | 0–29 € |
| Audio/CDN | 0–10 € |
| Outils SEO | 0–100 € |
| **Total** | **~20–170 €/mois** |

---

## 11. SEO

### 11.1 Stratégie

Le SEO est le canal principal. Le site doit être construit comme une bibliothèque, pas comme un fil d'actualité.

**Trois niveaux de contenu :**
1. **Piliers** : requêtes larges, forte autorité, 3 000–5 000 mots.
2. **Clusters** : requêtes spécifiques, 1 200–2 000 mots, liés au pilier.
3. **Glossaire** : définitions courtes, longue traîne, maillage.

### 11.2 Recherche de mots-clés

Processus :
1. Lister 200 requêtes à partir de Google Suggest, « People Also Ask », forums, YouTube, concurrents.
2. Classer par intention : information, comparaison, transaction, navigation.
3. Estimer le volume et la difficulté avec un outil (Semrush, Ahrefs ou Google Keyword Planner).
4. Analyser les 5 premiers résultats : format, longueur, angle, lacunes.
5. Attribuer une priorité P0/P1/P2.
6. Écrire un brief pour chaque article P0.

**Ne pas inventer de volumes.** Les chiffres seront validés avec un outil avant le lancement.

### 11.3 Clusters prioritaires

| Cluster | Requête tête | Intention | Contenu |
|---|---|---|---|
| Apprentissage | apprendre la batterie | Information | Pilier + 12 clusters |
| Achat débutant | quelle batterie choisir | Transaction | Pilier + 8 guides |
| Technique | rudiments batterie | Information | Pilier + 10 clusters |
| Pratique | exercices batterie | Information | Fiches + audio |
| Style | groove rock / funk / jazz | Information | 4 guides |
| Matériel | casque, baguettes, pad | Transaction | 6 comparatifs |
| Partition | partition batterie débutant | Information | Guide + ressources |
| Progression | combien de temps apprendre | Information | 3 articles |
| Jeu en groupe | jouer en groupe batterie | Information | 2 articles |

### 11.4 SEO on-page

- **Title** : 50–60 caractères, requête + bénéfice.
- **Meta description** : 150–160 caractères, réponse + promesse.
- **H1** : un seul, proche du title, sans répétition.
- **URL** : courte, descriptive.
- **Introduction** : réponse directe en 40–60 mots.
- **H2/H3** : structure logique, questions réelles.
- **Tableaux** : comparatifs, budgets, tempos.
- **Images** : nom de fichier descriptif, alt utile, compression.
- **FAQ** : 3–5 questions, réponses courtes.
- **Sources** : liens externes de qualité.
- **Maillage** : 3–6 liens internes contextuels.
- **CTA** : newsletter, ressource, article suivant.

### 11.5 SEO technique

- Sitemap XML automatique.
- `robots.txt` propre.
- Canonicals.
- Balises `hreflang` si versions régionales (pas au lancement).
- Données structurées : `Article`, `HowTo`, `FAQPage`, `Product`, `Review`, `BreadcrumbList`.
- Open Graph et Twitter Cards.
- URLs stables et redirections 301.
- 404 personnalisée.
- Pages de catégories indexables.
- Pagination correcte.
- RSS.
- Core Web Vitals.
- Indexation vérifiée dans Search Console.

### 11.6 E-E-A-T

- **Expérience** : photos originales, tests réels, exemples de terrain.
- **Expertise** : auteurs batteurs, biographies, crédits.
- **Autorité** : sources, partenariats, mentions.
- **Confiance** : sources citées, corrections datées, politique éditoriale.

**À mettre en place :**
- Page « À propos » détaillée.
- Page « Politique éditoriale ».
- Page « Méthodologie de test ».
- Page auteur pour chaque rédacteur.
- Date de publication et de mise à jour.
- Adresse de contact.
- Mentions légales.

### 11.7 Netlinking

**Priorités :**
1. Partenariats avec écoles de musique et professeurs.
2. Articles invités sur des sites de musique.
3. Présence sur les forums (La Drummerie, La Taverne des Batteurs) sans spam.
4. Études originales : « Prix des cours de batterie en France », « Budget d'un débutant ».
5. Outils gratuits : métronome, quiz, PDF.
6. Relations avec les marques : tests, prêts, interviews.

**Objectif :** 10 backlinks de qualité les 3 premiers mois, 50 à 12 mois. Pas d'achat de liens en réseau.

### 11.8 Mises à jour

- Guides d'achat : tous les 6 mois.
- Articles techniques : tous les 12 mois.
- Prix : vérification trimestrielle.
- Réécriture si baisse de position ou de CTR.
- Journal des modifications visible.

### 11.9 IA et recherche générative

- Écrire pour être cité : réponses courtes, faits datés, sources, données originales.
- Ne pas publier de contenu IA non relu.
- Surveiller les requêtes brandées et les citations dans les AI Overviews.
- Développer la newsletter pour réduire la dépendance à Google.

---

## 12. Acquisition

### 12.1 Répartition visée

| Canal | Part à 12 mois | Rôle |
|---|---:|---|
| SEO | 70 % | Moteur principal |
| Newsletter | 10 % | Fidélisation |
| Réseaux sociaux | 10 % | Diffusion, marque |
| Communautés / forums | 5 % | Crédibilité |
| Backlinks / partenariats | 5 % | Autorité |

### 12.2 SEO

Voir section 11. Priorité aux requêtes à intention claire, aux guides d'achat et aux fiches pratiques.

### 12.3 Newsletter

- Lead magnet : « Le plan 30 jours pour débuter » (PDF gratuit).
- Formulaire inline en fin d'article.
- Page dédiée.
- Bienvenue automatique avec 3 conseils.
- Cadence hebdomadaire.

### 12.4 Réseaux sociaux

- **Instagram** : extraits de notation, schémas, conseils courts, photos de kits.
- **Pinterest** : infographies « quel kit pour quel budget », « 10 exercices ».
- **YouTube Shorts** : plus tard, uniquement pour rediriger vers les articles. Pas de production vidéo au lancement.
- **TikTok** : optionnel, même logique.

### 12.5 Communautés

- La Drummerie, La Taverne des Batteurs : répondre utilement, pas de spam.
- Groupes Facebook de batteurs français.
- Reddit r/drums : en anglais, occasionnel.
- Discord de batteurs.

### 12.6 Partenariats

- Écoles de musique et professeurs : ressources gratuites, échange de liens.
- Magasins de musique : tests, pas de contenu influencé.
- Marques : prêts de matériel, interviews, pas de validation éditoriale.
- Blogues et médias musicaux : articles invités.

### 12.7 Lancement

1. Publier 40 articles avant l'annonce.
2. Vérifier l'indexation.
3. Contacter 20 écoles/professeurs avec une ressource gratuite.
4. Publier 3 études originales ou infographies.
5. Lancer la newsletter.
6. Annoncer sur les forums et réseaux.
7. Suivre les premières requêtes dans Search Console.

---

## 13. Production et gouvernance

### 13.1 Équipe

| Rôle | Temps | Mission |
|---|---|---|
| Rédacteur en chef / éditeur | 0,5–1 ETP | Ligne éditoriale, briefs, relecture, planning |
| Rédacteurs batteurs | 2–4 freelances | Articles, fiches, guides |
| Correcteur | 0,2 ETP | Orthographe, style, cohérence |
| Développeur | 10–15 jours | Site, intégrations, SEO technique |
| Designer | 5–10 jours | Identité, templates, composants |
| Consultant SEO | 2–5 jours | Recherche, architecture, audit |
| Photographe / illustrateur | 3–5 jours | Photos, schémas, notation |

### 13.2 Workflow

1. **Idée** : validée par la recherche de mots-clés.
2. **Brief** : requête, intention, angle, plan, sources, maillage.
3. **Rédaction** : respect du modèle et du style.
4. **Relecture** : fond, forme, faits, liens.
5. **SEO** : title, meta, H1, maillage, schema.
6. **Publication** : date, auteur, image, audio.
7. **Suivi** : indexation, position, CTR.
8. **Mise à jour** : tous les 6–12 mois.

### 13.3 Checklist qualité

- [ ] La promesse du titre est tenue.
- [ ] La réponse arrive dans les 60 premiers mots.
- [ ] Chaque affirmation technique est sourcée ou expliquée.
- [ ] Les prix sont datés.
- [ ] Les liens affiliés sont signalés.
- [ ] Les images ont un alt.
- [ ] Les audio ont une transcription.
- [ ] Le maillage interne est présent.
- [ ] Le schema est valide.
- [ ] L'article est relu par un humain.
- [ ] La date de mise à jour est visible.

### 13.4 Charte de style

- Tutoiement.
- Phrases courtes.
- Voix active.
- Pas de majuscules décoratives.
- Nombres en chiffres pour les mesures, en lettres pour les petits nombres.
- Termes anglais conservés s'ils sont usuels (groove, fill, ghost notes), définis à la première occurrence.
- Unités : cm, mm, kg, €, BPM.
- Dates : « 20 octobre 2026 ».

### 13.5 Sources et vérification

- Sources primaires : notices, sites de marques, normes, études.
- Sources secondaires : presse spécialisée, professeurs reconnus.
- Pas de source unique pour un prix.
- Vérification des liens tous les 6 mois.
- Correction visible : « Mis à jour le … ».

### 13.6 Politique IA

- L'IA peut aider à la recherche, au plan, à la reformulation.
- Aucun article publié sans relecture humaine.
- Les photos et schémas sont originaux ou licenciés.
- Les textes générés ne doivent pas inventer de faits, de prix ou de tests.
- Mention si un contenu a été assisté par IA, si nécessaire.

---

## 14. Planning et budget

### 14.1 Planning 12 semaines

| Semaine | Livrables |
|---|---|
| 1 | Cadrage, validation du périmètre, recherche de mots-clés, arborescence |
| 2 | Brief des 40 articles, choix du nom, brief identité |
| 3 | Identité visuelle, maquettes, choix techniques |
| 4 | Développement du socle, templates, CMS/MDX |
| 5–8 | Rédaction et relecture (5 articles/semaine) |
| 9 | SEO technique, recherche, newsletter, analytics |
| 10 | Pages légales, accessibilité |
| 11 | Tests, corrections, performance, contenu restant |
| 12 | Lancement, indexation, 20 prises de contact, annonce |

### 14.2 Budget lean

| Poste | Montant |
|---|---:|
| Stratégie et recherche de mots-clés | 1 500 € |
| Identité visuelle et design | 2 000 € |
| Développement | 5 000 € |
| Rédaction (40 articles) | 6 000 € |
| Relecture et correction | 1 500 € |
| Photos, schémas, notation | 1 500 € |
| Juridique (CGU, confidentialité) | 800 € |
| Outils (an 1) | 1 200 € |
| Lancement et relations presse | 1 000 € |
| **Total** | **20 500 €** |

**Fourchette : 15 000–25 000 €** selon le recours aux freelances et le niveau de design.

### 14.3 Budget confort

| Poste | Montant |
|---|---:|
| Stratégie, SEO, contenus | 15 000 € |
| Design et développement | 10 000 € |
| Rédaction (60 articles) | 10 000 € |
| Photos et illustrations | 3 000 € |
| Juridique et administratif | 1 500 € |
| Outils et lancement | 3 000 € |
| **Total** | **42 500 €** |

**Fourchette : 30 000–45 000 €.**

### 14.4 Coût de fonctionnement

| Poste | Mensuel |
|---|---:|
| Rédaction (8–10 articles) | 1 200–2 000 € |
| Relecture | 300–500 € |
| Outils | 100–200 € |
| SEO / consultant | 300–800 € |
| Divers | 100–300 € |
| **Total** | **2 000–3 800 €/mois** |

---

## 15. Risques

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| SEO lent (6–12 mois) | Élevée | Élevé | Budget de 12–18 mois, newsletter, réseaux |
| Mise à jour Google | Moyenne | Élevé | Qualité, diversification, marque |
| AI Overviews / baisse des clics | Moyenne | Moyen | Contenu original, données, newsletter |
| Concurrence de sites établis | Élevée | Moyen | Angle français, profondeur, transparence |
| Contenu de faible qualité | Moyenne | Élevé | Relecture, experts, checklist |
| Droits d'auteur (partitions, photos) | Moyenne | Élevé | Contenus originaux, licences, pas de relevés intégraux |
| Épuisement du rédacteur | Moyenne | Moyen | Cadence réaliste, freelances, banque d'articles |
| RGPD / cookies | Faible | Moyen | Analytics sans cookie, politique claire |
| Dépendance à une seule personne | Élevée | Élevé | Documentation, plusieurs auteurs, processus |

---

## 16. Critères d'acceptation du MVP

### 16.1 Contenu

- [ ] 4 guides piliers de 3 000–5 000 mots.
- [ ] 36 articles clusters de 1 200–2 000 mots.
- [ ] 1 glossaire de 60 termes.
- [ ] 10 fiches d'exercices avec notation et audio.
- [ ] 10 guides d'achat ou comparatifs.
- [ ] Chaque article a un auteur, une date, une source et un maillage.
- [ ] Aucun contenu vidéo.

### 16.2 Technique

- [ ] Site responsive, testé sur iOS et Android.
- [ ] Lighthouse ≥ 95 (performance, SEO, accessibilité, bonnes pratiques) sur mobile.
- [ ] LCP < 2,5 s, CLS < 0,1, INP < 200 ms.
- [ ] `sitemap.xml`, `robots.txt`, RSS, canonicals.
- [ ] Données structurées valides.
- [ ] Recherche interne fonctionnelle.
- [ ] Redirections 301.
- [ ] 404 personnalisée.
- [ ] Sauvegarde et versionnement.

### 16.3 Fonctionnel

- [ ] Newsletter avec double opt-in.
- [ ] Analytics et événements.
- [ ] Formulaire de contact.
- [ ] Pages légales complètes.
- [ ] Politique éditoriale et méthodologie de test.
- [ ] Accessibilité WCAG 2.2 AA (audit).

### 16.4 Lancement

- [ ] 40 articles indexés.
- [ ] 10 backlinks de qualité.
- [ ] 20 écoles/professeurs contactés.
- [ ] 3 infographies ou études originales.
- [ ] Newsletter annoncée.
- [ ] Aucune erreur critique dans Search Console.

### 16.5 Go / no-go à 6 mois

**Go** si :
- 30 articles supplémentaires publiés ;
- 5 000 sessions organiques/mois ;
- 500 abonnés newsletter ;
- taux de rebond < 70 %.

**No-go / pivot** si :
- moins de 1 500 sessions/mois ;
- aucune requête en top 20 ;
- moins de 100 abonnés ;
- impossible de produire 2 articles/semaine.

---

## 17. Annexes

### 17.1 Hypothèses à valider

1. **Nom** : LearnBatterie est un nom de travail.
2. **Marché** : France d'abord, francophonie ensuite.
3. **Budget** : 15 000–25 000 € en lean.
4. **Audio** : extraits courts enregistrés ou générés, pas de vidéo.
5. **Équipe** : un éditeur + freelances.
6. **Cadence** : 4–5 articles/semaine pendant 12 semaines.
7. **CMS** : MDX au lancement.
8. **Plateforme interactive** : V3, seulement si traction.

### 17.2 Sources

- Mordor Intelligence, *Online Music Education Market*, 2026.
- Superprof, tarifs des cours de batterie, 2026.
- ProfesseurParticulier, tarifs des cours de batterie, 2026.
- Drumeo, page tarifs, octobre 2026.
- Melodics, page tarifs, octobre 2026.
- Drum Coach, page tarifs, octobre 2026.
- imusic-school, page tarifs, octobre 2026.
- Roland, Alesis, fiches produits, octobre 2026.
- Batterie Facile, Académie Puchol, La Baguetterie, Batterie/Batteur Magazine, consultation octobre 2026.
- E-Drum Picks, Electronic Drum Advisor, e-drumset.com, DrumEssentials, Drummer Survival, consultation octobre 2026.
- Percussive Arts Society, 40 International Drum Rudiments.
- Vic Firth, organisation des rudiments par niveaux.
- CNIL, recommandations RGPD et mesure d'audience.
- WCAG 2.2, W3C.

### 17.3 Glossaire de travail

| Terme | Définition |
|---|---|
| Backbeat | Accent sur les temps 2 et 4, souvent à la caisse claire |
| BPM | Battements par minute, unité de tempo |
| Charley | Charleston, paire de cymbales actionnée au pied |
| Fill | Phrase de transition entre deux sections |
| Ghost note | Note très faible jouée entre les temps forts |
| Groove | Cellule rythmique répétée qui porte le morceau |
| Mesure | Groupe de temps délimité par des barres |
| Paradiddle | Combinaison de coups simples et doubles |
| Rudiment | Formule de base du jeu de batterie |
| Tempo | Vitesse d'exécution, en BPM |

### 17.4 Modèle de brief

```text
Titre :
Requête cible :
Intention :
Niveau :
Format :
Longueur :
Promesse :
Réponse directe (40–60 mots) :
Plan :
Sources :
Maillage interne :
Mots-clés secondaires :
CTA :
```

### 17.5 Modèle de fiche d'exercice

```text
Nom :
Objectif :
Niveau :
Tempo de départ :
Notation :
Audio :
Consigne :
Variantes :
Erreurs fréquentes :
Progression :
PDF :
```

---

## 18. Décisions à prendre

| Décision | Options | Recommandation |
|---|---|---|
| Nom | LearnBatterie / autre | Valider avant le design |
| Marché | France / francophonie | France d'abord |
| Budget | Lean / confort | Lean 20 k€ |
| Audio | Oui / non | Oui, extraits courts |
| Outil métronome | MVP / V2 | V2 |
| CMS | MDX / Sanity | MDX |
| Newsletter | Buttondown / ConvertKit | Buttondown |

---

**Fin du cahier des charges.**
