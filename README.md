Description

Ce projet est une application web pour gérer et visualiser une ligue de basketball.
Elle permet de :

Afficher les équipes et leurs statistiques (victoire, défaite, points, etc.)

Consulter les joueurs et coachs par équipe et par poste

Filtrer les joueurs par nom et saison

Visualiser le classement des équipes

Consulter le calendrier des matchs avec scores si disponibles

L’interface est construite avec React, Next.js, TypeScript, et Tailwind CSS, avec des animations Framer Motion.

🔧 Installation
Prérequis

Node.js ≥ 18

npm ou yarn

Étapes

Cloner le dépôt

git clone https://github.com/ton-utilisateur/basketball-league.git
cd basketball-league


Installer les dépendances

npm install
# ou
yarn install


Lancer l’application en développement

npm run dev
# ou
yarn dev


Ouvrir l’application

Ouvrir [http://localhost:3000](https://league-app-pi.vercel.app/)
 dans le navigateur.

🚀 Guide de démarrage

La page principale affiche les équipes et leurs onglets (Équipe, Liste, Jeux, Stats).

Dans l’onglet Liste, vous pouvez filtrer les joueurs et coachs par nom ou par saison.

La page Classement affiche le classement des équipes avec victoire, défaite et points.

La page Calendrier affiche la liste des matchs avec date et score si disponible.

Navigation :

Chaque équipe est sélectionnable via son slug.

Les joueurs sont regroupés par poste (PG, SG, SF, etc.) et filtrés par équipe.

Les coachs sont filtrés par équipe et par recherche.

🏗️ Architecture du projet
basketball-league/
│
├─ app/
│  ├─ equipes/
│  │  ├─ _components/
│  │  │  ├─ FilterPlayer.tsx
│  │  │  ├─ PlayerCard.tsx
│  │  │  ├─ CoachCard.tsx
│  │  │  └─ Herostat.tsx
│  │  ├─ [slug]/
│  │  │  └─ page.tsx   # Détail d'une équipe
│  │  ├─ Classement.tsx
│  │  └─ Calendrier.tsx
│  └─ page.tsx          # Page d'accueil
│
├─ data/
│  ├─ players.ts
│  ├─ coaches.ts
│  ├─ teams.ts
│  ├─ seasons.ts
│  └─ games.ts
│
├─ types/
│  └─ ligue.ts          # Types TS pour Player, Coach, Team
│
├─ components/
│  ├─ ui/               # Composants UI (Select, Button, Separator, etc.)
│
├─ styles/
│  └─ globals.css
│
├─ package.json
└─ tsconfig.json


Stack technique :

Next.js (App Router) pour la structure des pages et le rendu côté serveur.

React + TypeScript pour la robustesse du code et typage fort.

Tailwind CSS pour le style et la réactivité.

Framer Motion pour les animations sur les onglets et cartes.
