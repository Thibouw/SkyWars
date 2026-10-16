# SkyWars

Jeu web de conquête d'île : îles flottantes, ressources, vaisseaux, combat par tours.

## Lancer

Ouvrir `index.html` dans un navigateur (aucun serveur ni build requis).

## Structure

- `index.html` — page + SVG de fond + ordre des scripts
- `css/style.css` — styles
- `js/config.js` — constantes (grille, jours, palettes)
- `js/data.js` — vaisseaux, bâtiments, compétences
- `js/assets.js` — sprites (base64)
- `js/state.js` — état global du jeu
- `js/utils.js` — aides purs
- `js/sprites.js` — teintes des sprites
- `js/engine.js` — simulation, IA, combat, ticks
- `js/render.js` — rendu carte/île/panneaux
- `js/battle.js` — animation de bataille (canvas)
- `js/ui.js` — interface, gestionnaires
- `js/main.js` — bootstrap
