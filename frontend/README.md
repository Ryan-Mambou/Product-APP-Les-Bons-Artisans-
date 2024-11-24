# Les bons artisans

Apres avoir cloner le repo, suivez les instructions suivantes pour installer les dépendances et lancer l'application.

## Frontend

1. Deplacer vous dans le dossier frontend
2. Installer les dépendances
3. Executer l'app

```bash
cd frontend
npm install
npm run dev
```

## Backend

1. Deplacer vous dans le dossier frontend
2. Installer les dépendances
3. Executer l'app

```bash
cd backend
npm install
node app.js
```

Instructions supplementaires:

- J'ai choisi `productDB` comme nom de la base de données
- Creer un fichier .env et ajouter une variable d'environnement
- Cette variables d'environnement vous permettra de vous connecter à la base de données mongoDB
- Le nom des la variable d'environnement est la suivante:
  - MONGODB_URI

## Utilisation de l'application

- La page d'accueil de l'application est accessible à l'adresse http://localhost:5173
- Cette page est notre page racine et c'est également elle qui contient la liste des produits disponibles sur le site.
- Pour pouvoir ajouter, modifier ou supprimer des produits, vous devez vous connecter en utilisant votre compte email et mot de passe.
- Pour vous connecter, vous devez vous rendre sur la page de connexion de l'application disponible grace a un lien dans la page d'accueil.
- Un utilisateur peut modifier ou supprimer un produit que si celui-ci est le proprietaire de celui-ci.

## Fonctionnalités

- API REST en Node.js/Express lie a une base de données MongoDB. Le CRUD est effectué via des routes.
- Interface utilisateur avec React et Material-UI qui permet de visualiser, ajouter, modifier et supprimer des produits.
- Authentification avec email et mot de passe et utlisation des tokens JWT.
- Utilisation de redux pour gérer les états de l'application.
