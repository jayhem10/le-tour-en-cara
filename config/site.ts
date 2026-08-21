import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Armchair,
  ArrowLeftRight,
  ArrowUpDown,
  Baby,
  Bath,
  BatteryCharging,
  Car,
  Droplet,
  FlaskConical,
  Flame,
  Fuel,
  Gauge,
  Home,
  Lock,
  MapPin,
  Power,
  PowerOff,
  Recycle,
  Route,
  Ruler,
  Settings2,
  ShieldCheck,
  Shirt,
  ShowerHead,
  Sparkles,
  Sun,
  Trash2,
  Users,
  Utensils,
  Weight,
  Wind,
  Zap,
} from "lucide-react";

/** Une photo de la galerie, servie depuis /public/photos */
export interface Photo {
  src: string;
  alt: string;
}

/** Une caractéristique technique affichée sous forme de card avec icône */
export interface SpecItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

/** Les 3 dimensions du gabarit, mises en avant visuellement */
export interface VehicleDimensions {
  height: string;
  width: string;
  length: string;
}

/** Une catégorie d'équipements (ex: Conduite, Cuisine / Repas) avec sa liste d'éléments */
export interface EquipmentCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
}

/** Une étape du mini-tutoriel "Comment ça marche" */
export interface HowItWorksStep {
  title: string;
  description: string;
  /** Lien optionnel vers une autre section de la page (ex: ancre #caracteristiques) */
  link?: { href: string; label: string };
}

/**
 * Une application recommandée aux locataires.
 * `googlePlayUrl` et `androidNote` sont optionnels : certaines apps
 * (ex: LFP Block) ne sont pas distribuées officiellement sur Google Play.
 */
export interface RecommendedApp {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  androidNote?: string;
}

export interface ContactInfo {
  heading: string;
  message: string;
  phone?: string;
  phoneLabel?: string;
  phoneSecondary?: string;
  phoneSecondaryLabel?: string;
  whatsappUrl?: string;
}

/** Une condition de location fixée par le propriétaire (ex: animaux, permis...) */
export interface RentalConditionItem {
  label: string;
  value: string;
}

/** Modalités de règlement de la caution (le lieu / la carte sont affichés dans une card séparée) */
export interface DepositInfo {
  amount: string;
  description: string;
  address: string;
  /** Coordonnées précises, pour éviter les géocodages ambigus (plusieurs épingles) sur une adresse texte */
  lat: number;
  lng: number;
  mapsUrl: string;
}

/** Une consigne à suivre au moment de rendre le fourgon, affichée avec sa propre icône */
export interface ReturnGuidelineItem {
  icon: LucideIcon;
  text: string;
}

/** Un point important à connaître avant de partir (ex: consignes de sécurité batterie) */
export interface VanTip {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Un indicateur du bloc de contrôle du fourgon (alimentation, eau, énergie...) */
export interface ControlPanelIndicator {
  icon: LucideIcon;
  label: string;
  description: string;
}

/** Un groupe de boutons du bloc de contrôle (ex: boutons de gauche, boutons de droite) */
export interface ControlPanelGroup {
  title: string;
  items: ControlPanelIndicator[];
}

/** Présentation de la famille propriétaire, affichée en accueil (le site n'a pas vocation à vendre, seulement à informer) */
export interface AboutInfo {
  ownerNames: string;
  intro: string;
  paragraphs: string[];
  quote: string;
  quoteAuthor: string;
}

export interface SiteConfig {
  general: {
    vanName: string;
    model: string;
    year: number;
    tagline: string;
    description: string;
  };
  gallery: Photo[];
  dimensions: VehicleDimensions;
  specs: SpecItem[];
  equipment: EquipmentCategory[];
  /** Mot de bienvenue de la famille propriétaire */
  about: AboutInfo;
  howItWorks: HowItWorksStep[];
  apps: RecommendedApp[];
  contact: ContactInfo;
  /** Lien vers l'annonce (ex: Yescapa), affiché à la place d'un lien de réservation générique */
  listingUrl: string;
  listingNote: string;
  rentalConditions: RentalConditionItem[];
  deposit: DepositInfo;
  /** Consignes à suivre au moment de rendre le fourgon (propreté, linge, déchets, casse, réassort) */
  returnGuidelines: ReturnGuidelineItem[];
  /** Consignes importantes à connaître avant de partir (ex: batterie, voyants) */
  importantTips: VanTip[];
  /** Explication de la jauge centrale du bloc de contrôle Weinsberg */
  controlPanelNote: string;
  /** Boutons du bloc de contrôle Weinsberg, groupés (gauche = choix de la jauge, droite = réglages) */
  controlPanel: ControlPanelGroup[];
  /** Petit message de remerciement affiché en fin de page */
  thanksMessage: string;
  /** Invitation à donner des retours (ex: via WhatsApp) pour améliorer l'expérience des prochains locataires */
  feedbackNote: string;
  finalQuote: string;
  finalQuoteAuthor: string;
}

export const siteConfig: SiteConfig = {
  general: {
    vanName: "Le Tour en Cara'",
    model: "Weinsberg 600 MQH",
    year: 2021,
    tagline: "Bienvenue à bord du Weinsberg CaraTour 600.",
    description:
      "Ce site vous accompagne pendant votre séjour : toutes les infos utiles sur le fourgon, ses équipements et son fonctionnement sont juste en dessous.",
  },

  gallery: [
    { src: "/photos/exterieur-1.JPG", alt: "Vue extérieure du fourgon Weinsberg 600 MQH, côté conducteur" },
    { src: "/photos/interieur-cuisine.jpg", alt: "Coin cuisine aménagé avec évier, plaques et rangements" },
    { src: "/photos/interieur-lit.jpg", alt: "Grand lit fixe à l'arrière du fourgon" },
    { src: "/photos/interieur-salon.jpg", alt: "Coin salon avec table et banquettes" },
    { src: "/photos/exterieur-2.jpg", alt: "Fourgon garé face à un paysage de montagne" },
    { src: "/photos/exterieur-nuit.jpg", alt: "Fourgon aménagé de nuit, auvent déployé" },
  ],

  dimensions: {
    height: "2,82 m",
    width: "2,05 m",
    length: "6 m",
  },

  about: {
    ownerNames: "Émilie, Jérémy, Ysaé & Jiska",
    intro: "Bienvenue à bord !",
    paragraphs: [
      "Nous sommes Émilie et Jérémy, parents d'Ysaé (qui vient de fêter son premier anniversaire) et de Jiska, notre Bouvier Bernois.",
      "Le Weinsberg CaraTour 600, c'est notre façon de voyager : pas d'itinéraire fixe, on dort où l'envie nous prend, et on prend le temps de kiffer la route, où qu'elle nous mène.",
      "On vous laisse les clés avec plaisir, en espérant que le van vous fasse vivre de belles aventures. Bonne route !",
    ],
    quote: "Le bonheur n'est pas une destination à atteindre, mais une façon de voyager.",
    quoteAuthor: "Margaret Lee Runbeck",
  },

  specs: [
    { icon: Weight, label: "Poids total autorisé en charge (PTAC)", value: "3 500 kg" },
    { icon: ShieldCheck, label: "Places sécurisées", value: "4" },
    { icon: Users, label: "Couchages", value: "4" },
    { icon: Baby, label: "Fixations Isofix", value: "Non" },
    { icon: Fuel, label: "Carburant utilisé", value: "Diesel" },
    { icon: Settings2, label: "Boîte de vitesse", value: "Manuelle" },
    { icon: Gauge, label: "Consommation", value: "de 10 à 12 l/100 km" },
    { icon: Fuel, label: "Volume du réservoir de carburant", value: "80 l" },
    { icon: FlaskConical, label: "Additif", value: "AdBlue" },
    { icon: Droplet, label: "Volume du réservoir d'eau propre", value: "102 l" },
    { icon: Droplet, label: "Volume du réservoir d'eaux usées", value: "90 l" },
    { icon: Sun, label: "Panneaux solaires", value: "100 watts" },
  ],

  equipment: [
    {
      icon: Car,
      title: "Conduite",
      items: [
        "Direction assistée",
        "Régulateur de vitesse",
        "Fermeture centralisée",
        "Caméra de recul",
        "Autoradio",
        "Apple CarPlay / Android Auto",
        "Entrée audio / iPod",
        "Climatisation",
        "Chauffage",
        "Siège bébé",
        "Jeu de cales",
        "Kit sécurité",
        "Airbags",
      ],
    },
    {
      icon: Home,
      title: "Vie à bord",
      items: [
        "Chauffage espace de vie",
        "Siège conducteur pivotant",
        "Siège passager pivotant",
        "Linge de lit (sur demande)",
        "Nécessaire de ménage",
        "Consommables",
        "Extincteur",
        "Siège auto Joie (sur demande)",
        "Guide des plus beaux villages de France",
        "Livre de recettes nomades",
      ],
    },
    {
      icon: Utensils,
      title: "Cuisine / Repas",
      items: [
        "Machine à café Outin portable (à batterie)",
        "Plaques de cuisson",
        "Réfrigérateur avec grand compartiment congélateur",
        "Table intérieure",
        "4 places repas",
        "Évier",
        "Kit de vaisselle (x4)",
      ],
    },
    {
      icon: Bath,
      title: "Toilette",
      items: ["Douche intérieure", "WC", "Lavabo"],
    },
    {
      icon: Armchair,
      title: "Extérieur",
      items: [
        "Soute à bagages",
        "Table extérieure",
        "2 chaises extérieures",
        "Parasol",
        "1 à 2 jerricans alimentaires 20 L (sur demande)",
      ],
    },
    {
      icon: Zap,
      title: "Autonomie",
      items: [
        "Chauffe-eau / chauffage au gaz",
        "Prises 12 V, USB et 220 V",
        "Plaques de cuisson au gaz",
        "Réfrigérateur en 12 V",
        "Panneaux solaires (100 W)",
        "Raccordement électrique + adaptateur",
        "Autonomie estimée : 3 jours",
        "Batterie auxiliaire LiFePO4 (voir l'app LFP Block pour suivre le niveau)",
      ],
    },
  ],

  howItWorks: [
    {
      title: "Télécharger l'application",
      description:
        "Installez Park4night depuis l'App Store ou Google Play (voir la section « Apps recommandées » ci-dessous).",
    },
    {
      title: "Se connecter avec le compte fourni",
      description:
        "Utilisez l'identifiant et le mot de passe affichés dans la section « Accès Park4night » de ce site pour vous connecter.",
    },
    {
      title: "Filtrer les spots utiles",
      description:
        "Utilisez les filtres (aires camping-car, points d'eau, vidange, stationnement nocturne autorisé) pour trouver rapidement un spot adapté au fourgon.",
    },
    {
      title: "Vérifier le gabarit avant de s'engager",
      description:
        "Avant d'emprunter une route étroite ou un parking couvert, vérifiez toujours les dimensions du fourgon.",
      link: { href: "#caracteristiques", label: "Voir les caractéristiques techniques" },
    },
    {
      title: "Consulter les avis et signaler un problème",
      description:
        "Lisez les avis récents avant de vous arrêter, et signalez tout spot fermé ou problématique pour aider les autres utilisateurs.",
    },
  ],

  apps: [
    {
      id: "park4night",
      name: "Park4night",
      description: "Trouvez des aires et spots de stationnement pour camping-cars et fourgons partout en Europe.",
      icon: MapPin,
      appStoreUrl: "https://apps.apple.com/fr/app/park4night/id430946556",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=fr.tramb.park4night",
    },
    {
      id: "lfp-block",
      name: "LFP Block",
      description: "Suivez en temps réel l'état de la batterie LiFePO4 du fourgon (charge, tension, autonomie).",
      icon: BatteryCharging,
      appStoreUrl: "https://apps.apple.com/fr/app/lfpblock/id1548404075",
      androidNote: "Disponible sur Android via APK (nous contacter pour le lien de téléchargement).",
    },
    {
      id: "polarsteps",
      name: "Polarsteps",
      description: "Suivez et partagez votre itinéraire de voyage automatiquement, avec une carte de votre trajet.",
      icon: Route,
      appStoreUrl: "https://apps.apple.com/us/app/polarsteps/id947925763",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.polarsteps",
    },
    {
      id: "windy",
      name: "Windy",
      description: "Consultez les prévisions météo et de vent détaillées avant de prendre la route ou de vous installer.",
      icon: Wind,
      appStoreUrl: "https://apps.apple.com/app/windy-weather-radar-forecast/id1161387262",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.windyty.android",
    },
  ],

  contact: {
    heading: "Un souci ou une question pendant votre séjour ?",
    message:
      "Ce site vous accompagne pendant votre location : en cas d'urgence (panne, souci avec le fourgon...), appelez-nous directement. Pour une question moins urgente, WhatsApp fonctionne tout aussi bien.",
    phone: "06 62 15 80 04",
    phoneLabel: "Jérémy",
    phoneSecondary: "06 58 41 54 92",
    phoneSecondaryLabel: "Émilie",
    whatsappUrl: "https://wa.me/33662158004",
  },

  listingUrl: "https://www.yescapa.fr/campers/121217",
  listingNote:
    "Envie de relouer le fourgon une prochaine fois ? Retrouvez l'annonce sur Yescapa, et pensez à y laisser un petit commentaire si vous avez passé un bon séjour !",

  rentalConditions: [
    { label: "Voyage à l'étranger", value: "Autorisé" },
    { label: "Permis de conduire", value: "Permis B" },
    { label: "Animaux à bord", value: "Autorisé - sauf sur les lits" },
    { label: "Véhicule fumeur", value: "Non autorisé" },
    { label: "Dépassement kilométrique", value: "0,25 € par km supplémentaire" },
  ],

  deposit: {
    amount: "2 000 €",
    description: "Je gère moi-même le règlement de la caution, par virement bancaire directement entre nous.",
    address: "3 allée de la Charrière, 69570 Dardilly",
    lat: 45.8230537,
    lng: 4.7580819,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=45.8230537,4.7580819",
  },

  returnGuidelines: [
    { icon: Fuel, text: "Réservoir de carburant complété comme au départ" },
    { icon: Sparkles, text: "Fourgon nettoyé, rendu propre" },
    { icon: Droplet, text: "Eaux usées vidangées" },
    { icon: Trash2, text: "Affaires personnelles et déchets retirés" },
    { icon: BatteryCharging, text: "Niveau de la batterie vérifié (voir l'app LFP Block)" },
    {
      icon: Shirt,
      text: "Si vous avez utilisé le linge de lit : défaites les lits et posez le linge sur la banquette arrière",
    },
    {
      icon: Recycle,
      text: "Déchets jetables dans nos containers à votre retour : plastique dans un sac ouvert et non recyclable dans une poubelle fermée",
    },
    {
      icon: Bath,
      text: "Videz la cassette des toilettes et remettez de l'eau avec un peu de liquide vaisselle dedans",
    },
    {
      icon: Utensils,
      text: "S'il reste de la vaisselle sale, laissez-la dans l'évier, on la passera au lave-vaisselle à la maison",
    },
    {
      icon: AlertTriangle,
      text: "Merci de nous prévenir si quelque chose a été cassé, ou s'il manque des produits nettoyants, des sacs poubelle, etc.",
    },
  ],

  importantTips: [
    {
      icon: PowerOff,
      title: "Autoradio Kenwood : pensez à couper l'alimentation",
      description:
        "Après utilisation, remettez bien le réglage d'alimentation de l'autoradio Kenwood sur 0. Laissé allumé (même en veille), il continue de consommer du courant et peut vider la batterie du fourgon, rendant le démarrage impossible.",
    },
    {
      icon: AlertTriangle,
      title: "Voyant AdBlue ou voyant huile allumé ? Prévenez-nous",
      description:
        "Si un voyant AdBlue ou niveau d'huile s'allume sur le tableau de bord pendant votre location, merci de nous prévenir rapidement afin qu'on puisse s'en occuper.",
    },
    {
      icon: Flame,
      title: "Bouteille de gaz : comment ça marche",
      description:
"Le robinet de la bouteille de gaz reste ouvert normalement, mais vous pouvez le fermer si besoin : il est dans le coffre, trappe de gauche. Le petit logo flamme doit pointer vers le haut pour que le gaz passe. Après l'avoir rouvert, ça peut prendre quelques secondes avant que le feu arrive aux plaques, pas de panique. Si la bouteille est vide, contactez-nous avant d'en racheter une : on vous rembourse par virement dès réception du ticket de caisse, à nous envoyer sur WhatsApp."    },
    {
      icon: Zap,
      title: "Électricité : que faire si la multiprise ne fonctionne pas",
      description:
        "Vérifiez d'abord le niveau et l'état sur l'app dédiée (LFP Block). Si la multiprise ne fonctionne pas, assurez-vous qu'elle est bien allumée et que l'interrupteur situé au niveau du lit à l'arrière est également en position allumée (lumière bleue).",
    },
    {
      icon: ArrowUpDown,
      title: "Toit relevable (popup) : attention à l'ouverture et à la fermeture",
      description:
        "À l'ouverture, la popup prend pas mal de hauteur : vérifiez qu'aucun obstacle ne gêne, pour ne pas l'abîmer ni endommager le panneau solaire. À la fermeture, verrouillez bien la partie métallique sans coincer la bâche, et enclenchez toutes les boucles à clip.",
    },
    {
      icon: Lock,
      title: "Avant de prendre la route : fenêtres et lanterneaux",
      description: "Pensez à bien verrouiller les fenêtres et à fermer les lanterneaux avant de démarrer.",
    },
    {
      icon: AlertTriangle,
      title: "Coffre extérieur : ne fermez jamais le verrou Thule avec les clés à l'intérieur",
      description:
        "Il n'existe pas de double de la clé du verrou Thule. Si vous fermez le coffre alors que les clés sont restées à l'intérieur, il sera bloqué et impossible à rouvrir. Vérifiez toujours que vous avez bien les clés en main avant de verrouiller.",
    },
    {
      icon: Droplet,
      title: "Vidanger les eaux grises (eaux usées)",
      description:
        "Sous le fourgon, en dessous de la caissette des toilettes, tournez la poignée noire puis inclinez le tuyau vers le bas pour laisser s'écouler l'eau grise.",
    },
  ],

  controlPanelNote:
    "La jauge centrale affiche le niveau (de 0 à 100 %, R = réserve) de l'élément sélectionné avec les boutons de gauche.",

  controlPanel: [
    {
      title: "Boutons de gauche : choisir ce qu'affiche la jauge",
      items: [
        {
          icon: BatteryCharging,
          label: "Batterie véhicule",
          description: "Affiche le niveau de la batterie moteur sur la jauge centrale.",
        },
        {
          icon: BatteryCharging,
          label: "Batterie cellule",
          description:
            "Affiche le niveau de la batterie auxiliaire (habitation) qui alimente l'éclairage et les prises.",
        },
        {
          icon: Droplet,
          label: "Niveau d'eau",
          description: "Affiche le niveau du réservoir d'eau propre sur la jauge centrale.",
        },
      ],
    },
    {
      title: "Boutons de droite : réglages",
      items: [
        {
          icon: Power,
          label: "Marche / arrêt",
          description: "Allume ou éteint le panneau de contrôle.",
        },
        {
          icon: ShowerHead,
          label: "Pompe à eau",
          description: "Active ou coupe la pompe à eau (évier, douche).",
        },
        {
          icon: Sun,
          label: "Luminosité",
          description: "Active ou coupe l'éclairage des différents espaces du fourgon.",
        },
      ],
    },
  ],

  thanksMessage:
    "Emilie, Ysaé et Jérémy vous remercient de la confiance que vous nous accordez pour ce voyage. Profitez bien de votre séjour à bord, et bonne route !",

  feedbackNote:
    "N'hésitez pas à nous écrire sur WhatsApp pendant ou après votre location : vos retours et vos idées nous aident à améliorer l'expérience des prochains locataires.",

  finalQuote: "Le monde est un livre, et ceux qui ne voyagent pas n'en lisent qu'une page.",
  finalQuoteAuthor: "Saint Augustin",
};

// Icônes ré-exportées pour usage ponctuel hors config (ex: gabarit mis en avant)
export const dimensionIcons: Record<keyof VehicleDimensions, LucideIcon> = {
  height: ArrowUpDown,
  width: ArrowLeftRight,
  length: Ruler,
};
