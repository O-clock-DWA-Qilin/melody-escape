# Chasse au trésor

Dans cet exercice, vous allez créer une application Express qui simule une chasse au trésor. Votre application Express doit avoir plusieurs routes qui représentent différentes "zones" dans la chasse au trésor. Chaque zone peut contenir soit un indice pour la prochaine zone, soit le trésor lui-même.
Tu as un exemple ici => https://hubert-le-lapin-6f94e3efd3fa.herokuapp.com/

## Exercice 1 - Comprendre l'existant

Voici la structure actuelle du projet
```
/
│
├── app/
│   ├── controllers.js
│   ├── middlewares.js
│   ├── partials.js
│   └── router.js
│
├── public/
│   ├── css/
│   └── img/
│
├── .gitignore
├── .env.example
├── index.js
└── package.json
```
- `/ :` Racine du projet, contient tous les autres fichiers et dossiers.
- `app/ :` Contient le code de l'application Express.
    - `controllers.js :` Gère les requêtes d'une route spécifique entrantes et génère les réponses.
    - `middlewares.js :` Contient les fonctions middleware qui vont gérer nos routes généralistes.
    - `partials.js :` Peut contenir des templates HTML partiels que vous pouvez réutiliser à plusieurs endroits dans votre application.
    - `router.js :` Définit les routes pour l'application.
- `public/ :` C'est le dossier où vous mettez les fichiers statiques (comme les images, le CSS etc) qui doivent être servis directement par le serveur web.
    - `css/ :` Contient les fichiers CSS pour le style du site web.
    - `img/ :` Contient les images utilisées sur le site web.
- `.gitignore :` Spécifie les fichiers/dossiers à ignorer dans le suivi de version Git.
- `.env.example :` Ce fichier est un modèle pour le fichier .env qui stocke les variables d'environnement. Les valeurs réelles ne sont généralement pas mises dans le contrôle de version, c'est pourquoi il y a un modèle.
- `index.js :` Fichier principal de l'application, initialise et configure Express, et démarre le serveur.
- `package.json :` Contient les métadonnées du projet, incluant les dépendances du projet.

  Tu es libre d'organiser comme tu le souhaites mais tu dois absolument utiliser le router d'express.

  ## Exercice 2 - Créez un middleware qui enregistre des informations sur chaque visite (par exemple, l'heure de la visite).

  ## Exercice 3 - Définissez plusieurs routes pour différentes "zones" de la chasse au trésor.

  ## Exercice 4 - Définissez une page d'erreur 404 si l'utilisateur tente d'acceder à une zone qui n'existe pas.

  ## BONUS

  - Faites en sorte que votre middleware vérifie si l'utilisateur est autorisé à accéder à la zone actuelle (par exemple, s'il a déjà visité toutes les zones précédentes dans le bon ordre).
  - Pour ajouter un défi supplémentaire, vous pouvez même essayer de limiter le nombre de visites par IP et par heure (par exemple, pour éviter le "spam" des requêtes).
