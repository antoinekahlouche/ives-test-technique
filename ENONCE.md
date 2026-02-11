# Test Technique – Backend Node.js avec OAuth2 (& SSO)

Ce test technique a pour objectif d’évaluer vos compétences sur un projet backend Node.js, en lien avec l’implémentation d’un système d’autorisation sécurisé basé sur OAuth2.

Temps alloué 2 heures dont 15 minutes de présentation et compte-rendu.

---

## Objectif général

Développer une API backend en Node.js permettant :

1. La gestion d’un système de **tâches** (CRUD)

2. L’implémentation d’un **serveur OAuth2** (Authorization Server)

3. La **délégation de l’authentification (SSO)** à un système LDAP par exemple

---

## Fonctionnalités attendues

### 1. Gestion de tâches (API REST)

- CRUD complet : créer, lire, modifier, supprimer une tâche

- Chaque tâche est liée à un utilisateur authentifié

- Pas de base de données externe (en mémoire, JSON)

- Architecture MVC et arborescence structurée du projet

- Une version orientée objet avec des classes

### 2. Système OAuth2 (Authorization Code Flow + Refresh Token)

- Implémenter un 'Authorization Server', respectant les spécifications OAuth2

    avec le scénario 'Authorization Code Flow'

- Génération de :
    - `authorization_code`

    - `access_token` (JWT)

    - `refresh_token`

- Contrôle de :
    - `client_id`

    - `redirect_uri`

- Endpoint `/authorize`, `/token`

- Utiliser le 'Resource Server' précédemment développé

- Développer un 'Client Application' consommateur OAuth2 (`/callback`)

### 3. Délégation de l’authentification (SSO)

- L’utilisateur ne s’authentifie pas directement via mot de passe local

- Plusieurs méthodes d’authentification :
    - **via LDAP** (mock ou réel)

    - **via Google** (OAuth2, ex. `passport-google-oauth20`)

- Si l’utilisateur est authentifié avec succès, il accède à l’application via un jeton d’accès

---

## Contraintes techniques

- **Node.js + Express + Axios**

- **Architecture MVC** ou claire par séparation des responsabilités

- **Ressources utiles** (https://datatracker.ietf.org/doc/html/rfc6749, https://jwt.io/, https://aaronparecki.com/oauth-2-simplified/)

- Utilisation de **Git (GitHub)** avec votre compte personnel avec un accès pour partager avec le compte jpb-ives/jeanpierre.brochet@ives.fr, l'utilisation du dépôt :
    - Historique de commits propre et structuré

---
