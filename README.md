# Dashboard Utilisateur

Ceci est une application de tableau de bord utilisateur qui permet de visualiser, ajouter, modifier et supprimer des utilisateurs. Cette application utilise MSW (Mock Service Worker) pour simuler les requêtes API côté frontend.

## Fonctionnalités

- Affichage de la liste des utilisateurs
- Ajout d'un nouvel utilisateur
- Modification des détails d'un utilisateur existant
- Suppression d'un utilisateur

## Technologies utilisées

- React.js pour le frontend
- MSW (Mock Service Worker) pour simuler les requêtes API
- React Router pour la navigation
- Axios pour effectuer les requêtes HTTP
- Tailwind CSS pour le css

## Installation

Pour exécuter cette application localement, suivez ces étapes :

1. Cloner le dépôt : `git clone https://lien-vers-votre-repo.git`
2. Accéder au répertoire du projet : `cd nom-du-dossier`
3. Installer les dépendances : `npm install`

## Utilisation

Une fois les dépendances installées, démarrez l'application en utilisant la commande suivante :
'npm start' ou 'yarn start'

L'application sera accessible à l'adresse `http://localhost:3000`.

## Fonctionnement de l'application

Cette application simule un backend via MSW. Les différentes opérations CRUD (Create, Read, Update, Delete) peuvent être effectuées sur les utilisateurs, bien que ces opérations ne soient pas persistantes.

## Routes d'API simulées

- `GET /api/users` - Récupère tous les utilisateurs
- `POST /api/users` - Crée un nouvel utilisateur
- `PUT /api/users/:id` - Met à jour les détails d'un utilisateur
- `DELETE /api/users/:id` - Supprime un utilisateur

## Structure du projet

- `/src` : Contient les fichiers sources de l'application
  - `/components` : Composants réutilisables
  - `/pages` : Pages de l'application

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à cette application, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.
