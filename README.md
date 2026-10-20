# LearnBatterie

Site pédagogique gratuit pour apprendre les rudiments de la batterie aux débutants.

## Contenu

- **Programme de 12 semaines** : un rudiment principal par semaine, quatre séances de 25 minutes.
- **8 leçons de base** : prise des baguettes, posture, rebond, lecture rythmique, métronome, échauffement, organisation des séances, auto-évaluation.
- **40 fiches de rudiments** : rolls, diddles, flams et drags, avec sticking, tempo de départ, tempo cible, étapes, erreurs fréquentes et application.
- **12 exercices** : grooves et fills pour appliquer les rudiments.
- **4 ressources imprimables** : programme, poster, journal de pratique, fiche de séance.
- **Glossaire** : 60 termes expliqués simplement.

## Principes

- Gratuit, sans publicité, sans affiliation, sans compte.
- Pas de vidéo ni d'audio pour le moment.
- Contenu original protégé par le droit d'auteur.
- Les 40 rudiments sont des formules traditionnelles de la Percussive Arts Society.

## Développement

```bash
npm install
npm run dev
npm run build
npm run preview
```

Le site est généré en statique avec Next.js et exporté dans `out/`.

## Déploiement

Le workflow GitHub Actions `.github/workflows/deploy.yml` construit le site et le publie sur GitHub Pages à chaque push sur `main`.

## Structure

```text
app/            pages Next.js
components/     composants partagés
data/           contenu pédagogique (rudiments, leçons, exercices, glossaire, programme)
lib/            types, configuration et index de recherche
public/         fichiers statiques
docs/           cahier des charges et archives
```

## Licence

Contenu protégé, tous droits réservés. Voir `/mentions-legales/`.
