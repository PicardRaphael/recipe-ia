# MonProjetAI - Gestion des recettes avec NextJS et GPT

## Introduction

MonProjetAI est une application de gestion de recettes qui exploite les sorties structurées de GPT-4 avec NextJS pour fournir des recettes dynamiques. Ce projet montre trois manières différentes d'intégrer GPT-4, en utilisant des approches de streaming, synchrones, et avec la bibliothèque Versal AI. L'objectif est de démontrer comment créer une API robuste tout en offrant une interface utilisateur réactive.

## Fonctionnalités

- 💬 **Génération de recettes dynamiques** : Utilise GPT-4 pour générer des recettes structurées selon les préférences des utilisateurs (par exemple : brownies au chocolat, spaghetti carbonara).
- ⚙️ **Intégration avec trois approches API** :
Versal AI : Utilise la bibliothèque @ai-sdk/openai pour simplifier les requêtes à OpenAI.
Requêtes synchrones : Envoie des requêtes directes à OpenAI et reçoit la réponse complète avant de l'afficher.
Requêtes en streaming : Les données sont reçues par petits morceaux (tokens), offrant une expérience utilisateur plus fluide pour les grandes quantités de données.
- 🖥️ **Interface utilisateur avec ShadCN** : Mise en place d'une barre de navigation dynamique et de composants UI.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/monProjetAI/recipe-ia.git
   cd recipe-ia
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Configurez votre clé API OpenAI :
   - Créez un fichier `.env.local` à la racine du projet et ajoutez votre clé API OpenAI :
     ```bash
     OPENAI_API_KEY=your_api_key
     ```
   - Ou configurez la variable d'environnement `OPENAI_API_KEY` dans votre terminal :
     ```bash
     export OPENAI_API_KEY=your_api_key
     ```
4. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

## Utilisation

- Versal AI : Utilisez la bibliothèque pour simplifier l'intégration avec OpenAI, en spécifiant un schéma JSON pour structurer les réponses.
- Synchronous : Envoyez des requêtes directes à OpenAI pour recevoir une réponse complète.
- Streaming : Activez un flux de données pour afficher les résultats en temps réel pendant leur génération.

Accédez à l'application via http://localhost:3000, via la sidebar ou via le lien suivant :

http://localhost:3000/streaming
http://localhost:3000/synchronous
http://localhost:3000/vercel-ai

Entrez le nom d'une recette dans le champ de texte (par exemple : "Spaghetti carbonara"), et explorez les trois modes d'API.

## Technologies
- NextJS : Cadre utilisé pour construire l'application.
- OpenAI GPT-4 : API utilisée pour générer des réponses basées sur des schémas JSON définis.
- Zod : Bibliothèque utilisée pour valider les schémas JSON des recettes.
- ShadCN : Composants d'interface utilisateur pour NextJS.