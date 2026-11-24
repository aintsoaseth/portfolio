export const NAVIGATION = [
    //   { key: "home", link: "home", icon: "home" },
    { key: "projects", link: "projects", icon: "project" },
    { key: "stack", link: "stack", icon: "stack" },
    { key: "service", link: "service", icon: "service" },
    { key: "contact", link: "contact", icon: "contact" },
];

export const PROJECTS = [
    {
        "title": "Clearmind Analytics — OCR",
        "image": "ocr_xa8h22",
        "content": "Application de démonstration IA pour Clearmind Analytics. Extraction automatique de données depuis des factures (PDF/image) via OCR, avec vérification et correction manuelle des données extraites. Inclut un module ATS pour l'analyse de CV",
        "stack": ["Next.js", "TypeScript", "TanStack Query", "Framer Motion", "FastAPI", "Python", "Firestore", "Google Cloud Storage", "Docker"],
        "client": "Clearmind Analytics",
        "year": 2026,
        "url": "https://ocr.clearmind-analytics.com/",
        "type": "fullstack",
        "category": "client"
    },
    {
        title: "Clearmind Analytics",
        image: "clearmind_w2f9bp",
        content: "Développement et deploiement du site web responsive et réactive pour Clearmind Analytics",
        stack: ["NextJs", "Tailwindcss", "App hosting", "Firebase", "GCP"],
        client: "Clearmind Analytics",
        year: 2026,
        url: "https://www.clearmind-analytics.com",
        type: 'frontend',
        category: "client"
    },
    {
        title: "Plateforme de AthenaEvent",
        image: "athenaEvent_yggnfd",
        content: "AthenaEvent est une plateforme de référence à Madagascar dédiée à la gestion d'événements, à la billetterie en ligne et à la gestion des participants. Le développement de l'interface utilisateur frontend s'est concentré sur l'accessibilité, la rapidité d'exécution et une expérience utilisateur fluide adaptée au marché local, incluant des fonctionnalités de billetterie, de gestion de badges et des outils interactifs pour les exposants.",
        stack: ["NextJs", "Tailwindcss", "App hosting", "Firebase", "GCP", "PAPI pour le payement en ligne"],
        client: "Clearmind Analytics",
        year: 2026,
        url: "https://athena-event.com",
        type: 'frontend',
        category: "client"
    },
    {
        title: "Site vitrine B2B Infrastructure Télécom & IT",
        image: "gss_vin9qm",
        content: "Site vitrine développé pour GSS (Global Solutions Services), une entreprise malgache spécialisée dans le déploiement d'infrastructures télécom et la fourniture d'équipements IT professionnels. Conçu avec Next.js 15 et TypeScript, le site met en avant l'expertise terrain de l'entreprise à travers un design moderne à fort contraste, un mode sombre/clair entièrement réactif, et une section partenaires animée. Formulaire de contact fonctionnel avec envoi d'emails transactionnels (notification interne + confirmation client) via SMTP Zoho, déployé sur Firebase App Hosting",
        stack: ["NextJs", "Tailwindcss", "shadcn/ui", "App hosting", "Firebase", "Nodemailer"],
        client: "Clearmind Analytics",
        year: 2026,
        url: "https://www.gss-madagascar.com",
        type: 'frontend',
        category: "client"
    },
    {
        title: "Chevening alumni Madagascar",
        image: "chevening_mv1t2j",
        content: "Site web vitrine pour l'association des alumni malgaches du programme de bourses Chevening (UK). Construit en Next.js/TypeScript avec un annuaire filtrable de 40+ alumni, des profils détaillés, et une section impact documentant les projets communautaires sur le terrain",
        stack: ["NextJs", "Tailwindcss", "App hosting", "Firebase"],
        client: "Chevening alumni Madagascar",
        year: 2026,
        url: "https://cheveningalumnimadagascar.com/",
        type: 'frontend',
        category: "client"
    },
    {
        title: "Lux voyage",
        image: "voyage_we6nga",
        content: "Développement d'inteface utilisateur moderne, responsive et réactive pour une agence de voyage afin d'attirer plus de clients.",
        stack: ["ReactJs", "Tailwindcss", "ShadcnUI", "Cloudinary"],
        client: "Moi même",
        year: 2025,
        url: "https://lux-voyage-by-seth.vercel.app/",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Portfolio de Cynthia",
        image: "ceth_kf1kax",
        content: "Développement d'un portfolio pour une conseillère clientèle afin de mettre en valeur ses compétences et son travail",
        stack: ["ReactJs", "Tailwindcss", "ShadcnUI", "Framer motion"],
        client: "Cynthia Rakotoharinomena",
        year: 2025,
        url: "https://cynthia-rakotoharinomena.vercel.app/",
        type: 'frontend',
        category: "client"
    },
    {
        title: "Amoron'i mania",
        image: "country_tzjgow",
        content: "Développement du site web du region AMORON'I MANIA pour mettre en valeur la visibilté de la region ainsi d'attirer les touristes",
        stack: ["ReactJs", "Tailwindcss", "ShadcnUI"],
        client: "",
        year: 2025,
        url: "https://amoronimania.vercel.app/",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "E-Commerce Admin Dashboard",
        image: "commerce_joy849",
        content: "E-Commerce Admin Dashboard est une application web qui permet de gérer les produits, les utilisateurs et les commandes d'une boutique en ligne.",
        stack: ["ReactJs", "TailwindCss", "Shadcn"],
        year: 2025,
        url: "https://ventesbyseth.vercel.app",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Portfolio v2",
        image: "v2_kfklru",
        content: "Création de mon portfolio version 2",
        stack: ["ReactJs", "i18n", "Tailwindcss", "ShadcnUI", "Framer motion"],
        year: 2025,
        url: "https://sethtafika-v2.vercel.app/",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Portfolio 3d",
        image: "3d_bdiwzm",
        content: "Création d'un portfolio 3D pour apprendre et acquérir des nouveaux connaissances en 3D ",
        stack: ["ReactJs", "Css", "React three"],
        year: 2025,
        url: "https://sethtafika-3d.vercel.app/",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Agent RAG",
        image: "rag_j7zem7",
        content: "Création d'un agent rag en basant sur mes info pour répondre à toutes questions des uilisateurs",
        stack: ["ReactJs", "Css", "NodeJs", "Express"],
        year: 2025,
        url: "Pas encore en ligne",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Ancien portfolio",
        image: "h_vtuoep",
        content: "Création de mon portfolio pour vous montrer mes compétences en développement frontend web",
        stack: ["ReactJs", "Css", "Framer motion"],
        year: 2024,
        url: "https://sethtafika.vercel.app",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Mikrea",
        image: "mikrea_bmvfan",
        content: "Intégration du site web du projet MikRea afin d'élargir mes compétences en développement frontend web",
        stack: ["NextJs", "Css"],
        client: "Amis",
        year: 2023,
        url: "Pas encore en ligne",
        type: 'frontend',
        category: "perso"
    },
    {
        title: "Enjoy'B",
        image: "enjoyB_egk0nh",
        content: "Intégration d'un site web pour lire, ajouter et télécharger une bande dessinée.",
        stack: ["NextJs", "Css"],
        year: 2024,
        url: "https://enjoyb-seth.vercel.app/",
        type: 'frontend',
        category: "perso"
    },
];

export const MOBILES = [
    {
        title: "Suivi Scolaire & Présence NFC",
        image: "nfc_tbyuyx",
        content: "Un écosystème complet de suivi scolaire et périscolaire, composé de deux applications Flutter connectées au même backend Firebase. Côté surveillants, une application de pointage par badge NFC permet d'enregistrer en temps réel les entrées et sorties des élèves, et une interface d'administration desktop pour la gestion des élèves, classes et emplois du temps. Côté parents, un portail mobile expose ces mêmes données en temps réel : statut de présence de l'enfant, historique des entrées/sorties, réservations cantine et profil familial. L'ensemble s'appuie sur Firebase Auth avec un contrôle d'accès strict basé sur les rôles (RBAC), Cloud Firestore comme base de données temps réel partagée entre les deux apps, BLoC/Cubit pour la gestion d'état, GetIt pour l'injection de dépendances, et GoRouter pour une navigation sécurisée avec redirection automatique.",
        stack: ["Flutter", "NFC (nfc_manager)", "Firebase Auth", "Cloud Firestore", "BLoC/Cubit", "GoRouter", "GetIt (Service Locator)", "Windows Desktop"],
        client: "Établissement Scolaire", // À adapter selon ton vrai client
        year: 2026,
        url: "",
        type: "mobile & desktop",
        category: "client"
    },
    {
        "title": "Athena EventHub",
        "image": "eventhub_xuuygp",
        "content": "Athena EventHub est une plateforme complète de gestion d'événements composée d'une application mobile Flutter (Android) et d'un backend Spring Boot déployé sur Cloud Run. L'app permet aux visiteurs de s'inscrire à des événements (gratuits, payants, publics ou authentifiés), de personnaliser leur badge vCard, de payer via Mobile Money ou voucher, et d'accéder à leur QR code d'entrée. L'architecture repose sur BLoC/Cubit avec HydratedBloc pour la persistance, une navigation style Facebook (PageView + indicateur animé), un système de cache multi-niveaux (shared_preferences + fallback GCP bucket) pour absorber les cold-starts Cloud Run, et une suite de tests unitaires et widgets avec bloc_test et mocktail.",
        "stack": ["Flutter", "Spring Boot", "Firebase Firestore", "BLoC", "HydratedBloc", "Freezed", "Dio", "Hive", "Cloud Run", "GCP"],
        "client": "Clearmind Analytics",
        "year": 2026,
        "url": "",
        "type": "mobile",
        "category": "client"
    },
    {
        title: "Pass Check",
        image: "pass_check_qojblb",
        content: "PassCheck est une solution complète de gestion d'accès aux événements, composée d'une application mobile Flutter pour le scan de badges QR (classiques et vCard v3.0) et d'une application desktop Windows pour la gestion des entrées en backoffice. L'ensemble s'appuie sur Firebase Auth, Firestore en temps réel et une imprimante thermique iDPRT SP450 via ZPL pour l'impression de badges à la volée. Le système gère le check-in/check-out des participants, la détection des doublons, un cache local Hive pour le mode hors-ligne, et l'export des données en Excel",
        stack: ["Flutter", "Firebase Auth", "Cloud Firestore", "Hive", "BLoC", "Freezed", "ZPL", "Inno Setup"],
        client: "Clearmind Analytics",
        year: 2026,
        url: "",
        type: 'mobile',
        category: "client"
    },
    {
        title: "Recall Me",
        image: "recall_me_ae1dsd",
        content: "Application Flutter de productivité personnelle combinant gestion de tâches, notes et assistant IA. L'utilisateur crée et organise ses tâches par catégorie et priorité, planifie des rappels via des notifications locales programmées, et rédige des notes avec recherche instantanée et liste paginée en défilement infini. Un assistant IA construit un prompt contextuel à partir des tâches et notes courantes et répond en streaming via l'API compatible OpenAI de Groq (llama-3.3-70b-versatile). L'app s'appuie sur une API REST consommée avec Dio (intercepteur d'authentification par token, gestion centralisée des réponses), une persistance de session « Remember me » via HydratedBloc, un thème clair/sombre basculable depuis le profil, et une édition de profil complète. Architecture feature-first en couches (presentation/domain/data), injection de dépendances avec GetIt.",
        stack: ["Flutter", "Dart", "Dio (API REST)", "BLoC/Cubit", "HydratedBloc", "GetIt (Service Locator)", "flutter_local_notifications", "Groq API (RAG)"],
        year: 2025,
        url: "",
        type: "mobile",
        category: "perso"
    },
    {
        title: "Géolocalisation",
        image: "geo_ubtkqu",
        content: "Création d'une application mobile pour geolocalisé des parkings, arrets à fianarantsoa avec une carte interactive",
        stack: ["Expo", "EAS Build", "Google maps", "Qgis", "OSM"],
        client: "PNUD",
        year: 2025,
        url: "",
        type: 'mobile',
        category: "perso"
    },
    {
        title: "Generate",
        image: "generate_h39ehs",
        content: "Création d'un application mobile pour générer et scanner des QRcode avec un interface plus attirante pour elargir mes compétences en développement mobile",
        stack: ["Expo", "EAS Build"],
        client: "Amis",
        year: 2025,
        url: "",
        type: 'mobile',
        category: "perso"
    },
    {
        title: "E-commerce",
        image: "e_commerce_gkqram",
        content: "Une application mobile que j'ai créer pour faire des achats en ligne des meubles avec un interface simple et facile à utiliser",
        stack: ["Flutter", "Dart"],
        year: 2025,
        url: "https://github.com/tafikaSeth/e_commerce.git",
        type: 'mobile',
        category: "perso"
    }
];

export const TEXT_KEYS = ["get", "in", "touch"];