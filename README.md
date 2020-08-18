# Cahier des charges : “O'Rinjin”
## __Sommaire:__

* ### [Partie I : Présentation du projet](#presentation)
* ### [Partie II : Objectifs](#objectifs)
* ### [Partie III : Description de l’équipe](#description)
* ### [Partie IV : Fonctionnalités](#fonctionnalites)
* ### [Partie V : User Stories](#stories)
* ### [Partie VI : Liste des technologies](#technologies)
* ### [Partie VII : Liste des routes](#routes)
* ### [Partie VIII : Arborescence](#arborescence)
* ### [Partie IX : Wireframes](#wireframes) 
* ### [Partie X : Base de données](#donnees) 
* ### [Partie XI : Guide des messages de commit](#commit)

---

### __Partie I : Présentation du projet__ <a id="presentation"></a>
Ce projet sera réalisé par une équipe de quatre développeurs. Hélène David et Julien Spagnolo pour la partie backend, ainsi que Bryan Magalong et Jonathan Raso pour la partie frontend. La réalisation de ce dernier se déroulera sur un mois, s’étalant du 03/04/20 au 30/04/20. La présentation de ce dernier devra être réalisé au plus tard le 05/05/20.

L’objectif principal de ce site sera la mise en relation entre personnes qui sont à la recherche d’une aide particulière concernant plusieurs domaines différents. Il peut s’agir d’un dépannage, d’un covoiturage,d’un service divers ou autre. Il s’agit avant tout de créer un réseau d’entraide sans aucun but lucratif, ce qui veut dire que toutes les annonces ne pourront être faite qu’à titre gracieux ou bien en échange d’un autre service si les deux parties sont en accord avec ce principe. Il sera donc possible de consulter les offres d’entraide, et aussi, d’en créer une fois l’utilisateur connecté. Cette liste d’annonces sera indiquée sur une carte intéractive (google map ou autre), afin que l’utilisateur puisse voir quelles sont les offres à proximité de son domicile.

Le projet “O’Rinjin” aura pour cible principale les particuliers. Il s'adresse aussi bien aux étudiants recherchant un service sans avoir besoin de le payer, qu’aux salariés ou retraités qui souhaite organiser entre eux un réseau d’entraide via ces différentes annonces. Il n’a pas pour but de cibler les entreprises, mais son utilisation par ces derniers est envisageable. 

Cette application web sera limité au marché français, voir francophone, dans un premier temps. Il devra donc être consultable intégralement en français afin de faciliter son utilisation par les futurs utilisateurs. 

Enfin, son utilisation doit également être fonctionnelle sur support mobile. C’est pourquoi le site sera responsive et donc consultable aussi bien sur ordinateur de bureau que sur téléphone portable.

---

### __Partie II : Objectifs__ <a name="objectifs"></a>
L’objectif majeur du site consiste à mettre en relation des particuliers qui sont à la recherche d’entraide dans plusieurs domaines différents (dépannage, covoiturage, gardiennage, …).
Chacun pourra ainsi demander de l’aide, en proposer ou encore répondre au besoin d’un autre membre.
Le but est de mettre en place un réseau d’entraide local et gratuit, entre voisins de palier ou de quartier.
Une fois connecté, chacun pourra consulter les offres et les demandes situé à proximité de chez lui grâce à une carte interactive. Il sera aussi possible de rajouter une annonce afin de bénéficier de l’aide disponible.

---

### __Partie III : Description de l’équipe__ <a id="description"></a>
Le projet est réalisé par 4 développeurs :
**Bryan Magalong**: Lead dev front-end et référent technique
**Jonathan Raso**: Product owner et dev front-end
**Julien Spagnolo**: Lead dev back-end, Git Master et référent technique
**Hélène David**: Scrum Master et dev back-end

---

### __Partie IV : Fonctionnalités__ <a id="fonctionnalites"></a>

Le site web doit présenter les fonctionnalités suivantes : 

* Authentification
* Menu de navigation
* Visiteur
    * Formulaire d’inscription
    * Mapping GPS du visiteur
    * Fil d’actualité des aides les plus récentes
         * Affichage limité des détails des aides
* Utilisateur connecté
    * Fil d’actualité des aides
    * Possibilité de commenter / répondre une aide postée
    * Description détaillée d’une aide
    * Formulaire de création d’une aide
        * Options selon le type de service choisi
    * Visualisation de ses demandes d’aide
    * Visualisation de ses propositions d’aide
    * Formulaire d’édition du profil d’un utilisateur
    * Description détaillée du profil d’un utilisateur
    * Suppression de son compte
* BackOffice pour l’administration et la modération
    * Gestion des modérateurs
    * Gestion des annonces
    * Gestion des types de services
    * Suppression des commentaires

---

#### __Futures évolutions:__
Plusieurs perspectives d’améliorations ont pu être identifiées :

* Signaler un contenu inapproprié ou un utilisateur
    * Un utilisateur aura la possibilité de signaler les aides et les utilisateurs qu’il jugera inappropriés. Un système de tickets ou de messages internes pourra être implémenté afin de permettre aux modérateurs et/ou administrateurs d’examiner les contenus et utilisateurs signalés.
* Notation des utilisateurs
    * Les utilisateurs pourraient être notés par d’autres utilisateurs selon la qualité des aides qu’ils fournissent. Cette fonctionnalité pourrait prendre la forme de notation avec des étoiles (Amazon) ou d’accumulation de bages (Reddit).

* Groupes privés
    * Si un utilisateur souhaite proposer ses services à un groupe restreint d’utilisateurs, il pourrait créer un groupe privé dans lequel seuls les membres du groupe pourront proposer ou demander de l’aide. Cela implique une gestion des droits au sein du groupe (invitations de membres, suppression du groupe, etc…) et des invitations.

* Messagerie instantanée et interne
    * On pourrait également introduire une messagerie instantanée entre 2 utilisateurs ou en groupe et une messagerie interne.

* Géolocalisation de l’utilisateur
    * On pourrait localiser en temps réel un utilisateur lorsqu’il accède au site.

* Recherche des services via des tags
    * On utilisateur pourrait faire un tri des services par tags pour une recherche plus précise.
---
### __Partie V : User Stories:__ <a id="stories"></a>
#### Accueil

|En tant que|Je veux|Afin de|
|-|-|-|
|visiteur|pouvoir m’authentifier|pouvoir avoir un compte d’utilisateur sur ce site|
|visiteur|pouvoir m’inscrire|pouvoir accéder aux parties du site réservées aux utilisateurs connectés|
|visiteur|pouvoir me géolocaliser|recevoir des annonces d’aides ciblées|
|visiteur|pouvoir visualiser un aperçu des annonces les plus récentes|voir un exemple des annonces disponibles sur le site|
---
#### Aides
|En tant que|Je veux|Afin de|
|-|-|-|
|utilisateur|pouvoir visualiser la liste des annonces de mon périmètre|accéder intuitivement aux aides désirées|
|utilisateur|pouvoir visualiser la liste de mes demandes d’aide|accéder intuitivement à mes demandes|
|utilisateur|pouvoir créer une demande/proposition d’aide|la rendre visible pour les autres utilisateurs|
|utilisateur|pouvoir modifier une demande/proposition d’aide|rectifier une demande si besoin|
|utilisateur|pouvoir supprimer une demande/proposition d’aide|retirer une aide qui n’est plus voulue|
|utilisateur|pouvoir choisir le type d’aide|choisir le plus adapté|
|utilisateur|pouvoir commenter une aide|répondre à une aide|
|utilisateur|pouvoir visualiser le contenu détaillé de chaque aide|voir si celle-ci peut me correspondre|
---
#### Utilisateurs
|En tant que|Je veux|Afin de|
|-|-|-|
|utilisateur|pouvoir visualiser le profil détaillé de chaque utilisateur|voir son ancienneté, sa fiabilité,...|
|utilisateur|pouvoir modifier le contenu de mon profil|modifier les éléments nécessaires|
|utilisateur|pouvoir envoyer un message privé à un autre utilisateur|le contacter pour avoir plus de précisions|
|utilisateur|pouvoir supprimer mon compte|ne plus avoir mes informations dans la base de données du site|
---
#### Back Office
|En tant que|Je veux|Afin de|
|-|-|-|
|super admin|pouvoir supprimer un utilisateur||
|super admin|pouvoir ajouter un modérateur|lui donner les droits liés aux modérateurs|
|super admin|pouvoir supprimer un modérateur|lui retirer les droits liés aux modérateurs|
|super admin|pouvoir visualiser la liste des modérateurs|voir l’ensemble des modérateurs et connaître leur nombre|
|super admin|pouvoir créer une catégorie de service|ajouter une nouvelle catégorie|
|super admin|pouvoir modifier une catégorie de service|mettre à jour les catégories|
|super admin|pouvoir supprimer une catégorie de service|retirer l’une des catégories|
|super admin et modérateur|pouvoir me connecter au back office|gérer et consulter  les annonces|
|super admin et modérateur|pouvoir consulter la liste des annonces|voir l’ensemble des annonces et connaître leur nombre|
|super admin et modérateur|pouvoir modifier une annonce|modifier les éléments de l’annonce qui ne respectent pas la charte du site|
|super admin et modérateur|pouvoir supprimer une annonce|supprimer celles qui ne respectent pas la charte du site|
|super admin et modérateur|pouvoir supprimer un commentaire|retirer les commentaires haineux, injurieux,...|

## __Partie VI : Liste des technologies utilisées__ <a id="technologies"></a>

#### Partie front:

Pour développer la partie front-end de notre application, nous avons choisi d’utiliser la librairie react, qui sera accompagnée de plusieurs éléments différents pour compléter les fonctionnalités manquantes (notamment react-router, redux, …).

Le choix de cette librairie a été motivé par plusieurs raisons.

En premier lieu, la possibilité de réutiliser les composants créés et de les modifier selon le besoin (utile notamment pour les différents formulaires sur ce projet).

C’est également la modification des éléments du DOM qui ont besoin d’être modifiés, et cela sans toucher aux parties ne nécessitant pas de changement. Le virtual DOM va rendre ces changements plus rapides et plus précis puisqu’il n’y aura pas de rechargement complet du DOM, mais seulement des parties qui doivent être modifiées. Nous pourrons donc faire de ce site une single page application, et rendre le site plus adapté pour les utilisateurs mobiles notamment.
React utilise un système d’état local (state) pour distinguer les composants à modifier. Lorsque un state d’un composant change, React met à jour uniquement ce composant dans le virtual DOM. 
La librairie Redux permet de centraliser les states des différents composants. Ces derniers n’auront donc qu’un seul flux d’information et seront plus facile à maintenir.

Nous pouvons également nous appuyer sur un grand nombre de packages disponibles et prévu pour fonctionner avec react, ce qui va nous permettre de réaliser ce projet en restant dans le délai qui nous est imposé.

Le projet “O'Rinjin” est prévu comme une single page application, comme nous l’avons vu plus haut dans le cahier des charges. Afin de rendre cela possible, il nous faut prévoir un système de routing qui soit directement géré côté front pour ne pas avoir à recharger la page à chaque changement d’url. Nous allons donc nous appuyer sur React-Router. En utilisant cette librairie, nous pouvons donc changer seulement les composants nécessaires sans recharger la page entière à chaque fois. Il est également très utile de pouvoir avoir accès aux paramètres d’url, et la librairie React-Router met à disposition un hook (useParams) qui permet de récupérer la partie dynamique d’une url. Etant donné que nous allons utiliser les pratiques les plus récentes, l’utilisation des hooks est préférables.

React est une librairie qui gère uniquement l’interface du site, on utilisera le client HTTP Axios pour communiquer avec notre API. Axios a l’avantage d’avoir un support plus étendu des navigateurs que son équivalent Fetch. De plus, il s’occupe de transformer automatiquement nos réponses en format JSON, facilitant ainsi le traitement des données.

En ce qui concerne la partie intégration de notre projet, nous allons utiliser le framework Semantic UI, et plus particulièrement Semantic-UI-React. Avec l’utilisation de ce framework, nous pouvons gérer la réalisation des version mobiles et desktop de notre projet. Notre volonté étant d’avoir un site fonctionnel aussi bien sur plateforme mobile que sur desktop, c’est le choix qui nous semble le plus adapté pour répondre aux exigences du cahier des charges en terme de responsive design.

Pour la gestion du mapping des utilisateurs ou des services proposés, nous allons utiliser la librairie Leaflet, qui est open-source et qui dispose des éléments nécessaires pour correspondre au cahier des charges de ce projet. Il faudra également utiliser React Leaflet qui va nous permettre d’avoir à disposition des composants prévus pour être utilisable dans une application React. Ces composants vont nous permettre de mettre en place une map avec les informations sur les différents services proposés, avec l’utilisation de quelques composants fournis par React Leaflet.

---

#### Partie back:

Pour développer la partie back-end nous avons choisi d’utiliser le framework Symfony.
Symfony semble adapté à notre projet car il offre un environnement de travail stable et fonctionnel et permet l’utilisation de l’api pour le back-end.

Il dispose d'énormément de fonctionnalités et de composants natifs qui nous simplifieront la tâches et nous aideront à produire du code facile à mettre à jour, par exemple.
L’architecture en MVC proposée par ce framework permet de découper proprement le code, ainsi les différents intervenants de notre projet pourront facilement le modifier.

Par ailleurs, Symfony offre des mesures de sécurité préventives pour éviter le CSRF et les injections SQL, des précautions indispensables dans le cadre de notre projet.

L’aspect logiciel libre de symfony cadre tout particulièrement avec notre projet qui se veut lui aussi gratuit et accessible au plus grand nombre.
Enfin symfony a la chance de compter une vaste communauté de développeurs, qui créent sans cesse de nouveaux bundles pour s’améliorer en permanence.

Nous comptons utiliser de façon complémentaire les bundles Faker et Nelmio Alice pour créer des fixtures, autrement dit des fausses données, par exemple, simuler de faux noms d’utilisateurs ou encore de fausses adresses.

Le bundle EasyAdmin, nous permettra de gérer rapidement et facilement les CRUD de la partie Back-Office, ce qui nous permettra de tenir les délais impartis et de nous concentrer sur d’autres fonctionnalités.

Pour gérer les confirmations des adresses mail des utilisateurs au moment de leur inscription sur le site, nous nous servirons du bundle Swift Mailer.

Pour la gestion des rôle, le bundle Voter sera également utilisé.

## __Partie VII : Liste des routes__ <a id="routes"></a>

#### Front
|Route|Method|Description|
|-|-|-|
|/|GET|Page d’accueil lors de l’arrivée sur le site|
|/login|GET|Permet de se connecter|
|/register|GET|Permet de s’enregistrer|
|/team|GET|Affiche la page de l’équipe|
|/{user}|GET|Affiche le panel de contrôle du compte utilisateur|
|/{user}/update|GET|Permet l’affichage de l’utilisateur {user}|
|/{user}/services|GET|Permet l’affichage des services de l’utilisateur {user}|
|/services|GET|Permet l’affichage de tous les services|
|/service/{uuid}|GET|Permet l’affichage du service sélectionné|
|/service/{uuid}/update|GET|Permet de modifier le service sélectionné|
|/service/add|GET|Permet l’ajout d’un service (offre ou demande)|
---
#### API
|Route|Method|Controller|Description|Response|
|-|-|-|-|-|
|/api/login_check|POST|SecurityController|Envoi les informations de connexion à l'API|201|
|/api/users|GET|UserController|Retourne la liste de tout les utilisateurs|200|
|/users/home|GET|UserController|Retourne la liste de 6 utilisateurs pour la démonstration en page d'accueil visiteur|200|
|/register|POST|UserController|Envoi vers l'api, les données pour la création de l'utilisateur|201|
|/api/users/{user}|GET|UserController|Retourne un JSON du compte utilisateur sélectionné|200|
|/api/users/{id}|PUT|UserController|Envoi les information de modification d'un utilisateur vers l'API|200|
|/api/users/{id}|DELETE|UserController|Supprime le compte de l'utilisateur|204|
|/services/home|GET|ServiceController|Renvoi les trois service les plus récent en page d'accueil visiteur|200|
|/api/services/user/{userId}|GET|ServiceController|Renvoi la liste des services d'un utilisateur|200|
|/api/services/filter/{postalCode}|GET|ServiceController|Renvoi la liste des services filtré par code postal (i.e. 84, 75, 69...)|200|
|/api/services|GET|ServiceController|Renvoi la liste des services|200|
|/api/services/{user}|GET|ServiceController|Renvoi le service demandé via l'id|200|
|/api/services|POST|ServiceController|Envoi à l'API les données à ajouter en BDD pour la création d'un service (offre ou demande)|201|
|/api/services/{id}|PUT|ServiceController|Envoi à l'API les données à modifier le service sélectionné en rapport avec l'identifiant unique|200|
|/api/services/{id}|DELETE|ServiceController|envoi à l'api une demande de suppression du service sélectionné via l'identifiant|204|
|/api/comments|GET|CommentController|Renvoi la liste des commentaires|200|
|/api/comments/{id}|GET|CommentController|Renvoi le commentaire demandé via l'id|200|
|/api/comments|POST|CommentController|Envoi à l'API les données à ajouter en BDD pour la création d'un commentaire|201|
|/api/comments/{id}|PUT|CommentController|Envoi à l'API les données à modifier le commentaire sélectionné en rapport avec l'identifiant|200|
|/api/comments/{id}|DELETE|CommentController|envoi à l'api une demande de suppression du commentaire l'identifiant|204|
|/api/service-categories|GET|ServiceCategoryController|Renvoi la liste des catégories|200|
|/api/service-categories/{id}|GET|ServiceCategoryController|Renvoi le catégories demandé via l'id|200|
|/api/service-categories|POST|ServiceCategoryController|Envoi à l'API les données à ajouter en BDD pour la création d'une catégories|201|
|/api/service-categories/{id}|PUT|ServiceCategoryController|Envoi à l'API les données à modifier le catégories sélectionné en rapport avec l'identifiant|200|
|/api/service-categories/{id}|DELETE|ServiceCategoryController|envoi à l'api une demande de suppression du catégories l'identifiant|204|
---
## Back
### Administration
|Route|Method|Controller|Description|
|-|-|-|-|
|/login|GET|SecurityController|Redirige vers le formulaire de login du panneau d'administration|
|/logout|GET|SecurityController|Redirige vers le formulaire de login du panneau d'administration|
|/admin/|GET|EasyAdminController|Permet l'accès et l'affichage du panneau d'administration une fois le login passé|
---

## __Partie VIII : Arborescence du projet__ <a id="arborescence"></a>

![Arborescence O'Reijin](Arborescence/Arborescence@2x.png)

## __Partie IX : WIREFRAMES__ <a id="wireframes"></a>

![Wireframes O'Reijin](Wireframes/Wireframe_Accueil_Utilisateur_Connecte_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Accueil_Utilisateur_Connecte_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Connexion_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Connexion_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Creation_Modification_Service_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Creation_Modification_Service_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_HomePage_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_HomePage_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Inscription_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Inscription_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Liste_Annonces_Utilisateurs_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Liste_Annonces_Utilisateurs_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Notre_Equipe_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Notre_Equipe_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Profil_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Profil_Mobile.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Service_Detaille_Desktop.PNG)
![Wireframes O'Reijin](Wireframes/Wireframe_Service_Détaille_Mobile.PNG)

## __Partie X : Base de données__ <a id="donnees"></a>
### Projet MVP: MCD et Dictionnaire de données
![MCD MVP](MCD/MCD_sans_bonus.jpg)
---
### user
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant de l'utilisateur|
|first_name|VARCHAR 50|NOT NULL|Prénom de l'utilisateur|
|last_name|VARCHAR 50|NOT NULL|Nom de l'utilisateur|
|address|VARCHAR 70|NOT NULL|Adresse de l'utilisateur|
|postal_code|VARCHAR 10|NOT NULL|Code postal de l'utilisateur|
|city|VARCHAR 50|NOT NULL|Ville de l'utilisateur|
|latitude|VARCHAR 50|NOT NULL|l'atitude calculé par le front|
|longitude|VARCHAR 50|NOT NULL|l'atitude calculé par le front|
|email|VARCHAR 70|UNIQUE, NOT NULL|Email de l'utilisateur|
|birth_date|DATETIME|NOT NULL|Date de naissance de l'utilisateur|
|password|VARCHAR 30|NOT NULL|Mot de passe de l'utilisateur|
|avatar|VARCHAR 100|NULL|Chemin de l'avatar format img ou png de l'utilisateur|
|roles|JSON|NOT NULL|Roles de l'utilisateur ("ADMIN", "USER", "MODO")|
|created_at|DATETIME|NOT NULL|Date de création de l'utilisateur|
|updated_at|DATETIME|NULL|Date de modification de l'utilisateur|
---
### service_category
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant de la catégorie|
|title|VARCHAR 60|UNIQUE, NOT NULL|Titre de la catégorie|
|slug|VARCHAR 70|UNIQUE, NOT NULL|Slug de la catégorie|
|created_at|DATETIME|NOT NULL|Date de création de la catégorie|
|updated_at|DATETIME|NULL|Date de modification de la catégorie|
|created_by|INT|NOT NULL|Catégorie créée par ...|
|updated_by|INT|NULL|Catégorie mise à jour par ...|
---
### service
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant du service|
|title|VARCHAR 60|NOT NULL|titre du service|
|body|TEXT|NOT NULL|Description du service|
|type|INT|NOT NULL|Indique si c'est une demande de service(0) ou une proposition de service(1)|
|image|VARCHAR 100|NULL|Image liée au service|
|active|TINYINT|NOT NULL|le service est ouvert ou clos (false, true) || 1, 0)|
|user_id|TINYINT|FOREIGN_KEY, NOT NULL|Clef étrangère de la table user|
|service_category_id|TINYINT|FOREIGN_KEY, NOT NULL|Clef étrangère de la table service_category|
|created_at|DATE|NOT NULL|Date de création du service|
|updated_at|DATE|NULL|Date de modification du service|
|created_by|INT|NOT NULL|Service créé par ...|
|updated_by|INT|NULL|Service mis à jour par ...|
---
### comment
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant du commentaire|
|body|TEXT|NOT NULL|Réponse/Commentaire à un service|
|is_blocked|TINYINT|NOT NULL|Le commentaire est visible ou pas (BOOL)|
|user_id|INT|FOREIGN_KEY, NOT NULL|Relation avec l'identifiant de l'utilisateur|
|service_id|INT|FOREIGN_KEY, NOT NULL|Relation avec l'identifiant du service|
|created_at|DATETIME|NOT NULL|Date de création du commentaire|
|updated_at|DATETIME|NULL|Date de modification du commentaire|
#### MCD Projet final: MCD et Dictionnaire de données
![MCD final](MCD/MCD%20avec%20bonus.jpg)
---
#### user
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant de l'utilisateur|
|first_name|VARCHAR 50|NOT NULL|Prenom de l'utilisateur|
|last_name|VARCHAR 50|NOT NULL|Nom de l'utilisateur|
|address|VARCHAR 70|NOT NULL|Adresse de l'utilisateur|
|postal_code|VARCHAR 10|NOT NULL|Code postal de l'utilisateur|
|city|VARCHAR 50|NOT NULL|Ville de l'utilisateur|
|latitude|VARCHAR 50|NOT NULL|l'atitude calculé par le front|
|longitude|VARCHAR 50|NOT NULL|l'atitude calculé par le front|
|email|VARCHAR 70|UNIQUE, NOT NULL|Email de l'utilisateur|
|birth_date|DATETIME|NOT NULL|Date de naissance de l'utilisateur|
|password|VARCHAR 150|NOT NULL|Mot de passe de l'utilisateur|
|avatar|VARCHAR 100|NULL|Chemin de l'avatar format img ou png de l'utilisateur|
|roles|JSON|NOT NULL|Roles de l'utilisateur ("ADMIN", "USER", "MODO")|
|created_at|DATETIME|NOT NULL|Date de création de l'utilisateur|
|updated_at|DATETIME|NULL|Date de modification de l'utilisateur|
---
## service_category
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant de la catégorie|
|title|VARCHAR 60|UNIQUE, NOT NULL|Titre de la catégorie|
|slug|VARCHAR 70|UNIQUE, NOT NULL|slug de la catégorie|
|created_at|DATETIME|NOT NULL|Date de création de la catégorie|
|updated_at|DATETIME|NULL|Date de modification de la catégorie|
|created_by|INT|NOT NULL|Catégorie créée par ...|
|updated_by|INT|NULL|Catégorie mise à jour par ...|
---
## service
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant du service|
|title|VARCHAR 60|NOT NULL|titre du service|
|body|TEXT|NOT NULL|Description du service|
|type|TINYINT|NOT NULL|Indique si c'est une demande de service(0) ou une proposition de service(1)|
|image|VARCHAR 100|NULL|Image liée au service|
|active|TINYINT|NOT NULL|le service est ouvert ou clos (false, true) || 1, 0)|
|user_id|INT|FOREIGN_KEY, NOT NULL|Clef étrangère de la table user|
|service_category_id|INT|FOREIGN_KEY, NOT NULL|Clef étrangère de la table service_category|
|created_at|DATETIME|NOT NULL|Date de création du service|
|updated_at|DATETIME|NULL|Date de modification du service|
|created_by|INT|NOT NULL|Service créé par ...|
|updated_by|INT|NULL|Service mis à jour par ...|
---
## comment
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant du commentaire|
|body|TEXT|NOT NULL|Réponse à un service|
|is_blocked|TINYINT|NOT NULL|Le commentaire est visible ou pas (BOOL)|
|user_id|INT|FOREIGN_KEY, NOT NULL|Relation avec l'identifiant de l'utilisateur|
|service_id|INT|FOREIGN_KEY, NOT NULL|Relation avec l'identifiant du service|
|created_at|DATETIME|NOT NULL|Date de création du commentaire|
|updated_at|DATETIME|NULL|Date de modification du commentaire|
---
## service_tag (table pivot)
|Property|Type|Specificity|Description|
|-|-|-|-|
|tag_id|INT|PRIMARY KEY, FOREIGN_KEY, NOT NULL|Relation ManyToMany à la table tag|
|service_id|INT|PRIMARY KEY, FOREIGN_KEY, NOT NULL|Relation ManyToMany à la table service|
---
## tag
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant du tag|
|name|VARCHAR 60|UNIQUE, NOT NULL|Nom du tag|
|slug|VARCHAR 80|UNIQUE, NOT NULL|Slug du tag|
|created_at|DATETIME|NOT NULL|Date de création du tag|
|updated_at|DATETIME|NULL|Date de modification du tag|
|created_by|INT|NOT NULL|Tag créé par ...|
|updated_by|INT|NULL|Tag mis à jour par ...|
---
## user_rating
|Property|Type|Specificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Identifiant du commentaire|
|rate|TINYINT|NOT NULL|Note de l'utilisateur de 1 à 5|
|comment|TEXT|NULL|Commentaire sur l'utilisateur|
|user_id|INT|FOREIGN_KEY, NOT NULL|Relation avec l'identifiant de l'utilisateur|
|created_at|DATETIME|NOT NULL|Date de création du commentaire|
|updated_at|DATETIME|NULL|Date de modification du commentaire|
|created_by|INT|NOT NULL|Commentaire créé par ...|
|updated_by|INT|NULL|Commentaire mis à jour par ...|
---
## __Partie XI : Guide des messages de commit__ <a id="commit"></a>

|Type de commit|Emoji|
|-|-|
|Initial Commit|:tada:|
|Improve structure/format of the code|:art:|
|Add new feature|:sparkles:|
|Work In Progress|:construction:|
|Refactoring|:recycle:|
|Fixing a bug|:bug:|
|Add comment/doc|:pencil:|
|Merge|:white_check_mark:|
|Add dependency|:heavy_plus_sign:|
|Remove dependency|:heavy_minus_sign:|
