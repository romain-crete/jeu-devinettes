# Jeu de devinettes en console

Mini-jeu en JavaScript exécuté dans la console du navigateur : le joueur doit deviner un nombre entier aléatoire compris entre `1` et `100` à l'aide des indications « Trop Bas » et « Trop Haut ».

## Structure du projet

- `index.html` : page minimale qui charge le script.
- `script.js` : configuration (`min`, `max`), objet `statistique` (`tentative`, `secret`, `historique`, `tempsDebut`, `tempsFin`, `duree`, `aGagne`), fonctions du jeu (`genererNombre`, `verifierTentative`, `demanderTentative`, `afficherResultat`, `jouer`) et lancement de la partie.

## Utilisation

1. Ouvrir `index.html` dans un navigateur.
2. Ouvrir la console développeur (`F12` → onglet *Console*).
3. Saisir les propositions dans la fenêtre `prompt()` jusqu'à trouver le nombre secret ou cliquer sur *Annuler* pour quitter.
4. Consulter l'historique des essais, la durée en secondes et le bilan dans la console.

## Contexte

Projet réalisé dans le cadre de la formation Concepteur Développeur d'Applications (AFPA).
