# 1date-1image

"1date-1image" est un site web interactif qui vous permet de découvrir une image liée à l'espace en fonction d'une date.

## Table des matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Introduction

"1date-1image" utilise l'API de la NASA pour récupérer et afficher des images liées à l'espace en fonction de la date fournie par l'utilisateur.

## Fonctionnalités

- Récupérer des images de l'API de la NASA en fonction de la date.
- Afficher l'image avec un titre et une description.
- Design réactif.

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votreutilisateur/1date-1image.git
   ```
2. Naviguez dans le répertoire du projet :
   ```sh
   cd 1date-1image
   ```

## Utilisation

1. Ouvrez `index.html` dans votre navigateur web.
2. Entrez une date au format `YYYY-mm-dd` dans le champ de recherche.
3. Cliquez sur le bouton "Rechercher" pour récupérer et afficher l'image.

## Aperçu du Code

### JavaScript

La fonctionnalité principale en JavaScript est implémentée dans [js/index.js](js/index.js).

- `sendApiRequest`: Envoie une requête à l'API de la NASA avec la date fournie et gère la réponse.
- `useApiData`: Met à jour le DOM avec les données reçues de l'API.

### CSS

Le style est défini dans [css/style.css](css/style.css).

- `.rechercher`: Styles pour le champ de recherche et le bouton.
