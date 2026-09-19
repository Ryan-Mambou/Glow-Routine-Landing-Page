export type Locale = "en" | "fr";

export const locales: { id: Locale; label: string; flag: string }[] = [
  { id: "en", label: "EN", flag: "🇬🇧" },
  { id: "fr", label: "FR", flag: "🇫🇷" },
];

export const translations = {
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      reviews: "Reviews",
      download: "Download free",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Skincare, simplified",
      titleLine1: "Your skin",
      titleLine2: "deserves a",
      titleEmphasis: "daily ritual",
      subtitle:
        "Track your skincare products, build morning and evening routines, and watch your glow grow day by day.",
      download: "Download free",
      seeFeatures: "See features",
    },
    highlights: [
      "Free to download",
      "Morning & evening routines",
      "AI-powered skincare coach",
      "Track any product",
    ],
    features: {
      eyebrow: "Everything you need",
      titleLine1: "Designed for your",
      titleEmphasis: "glow-up journey",
      subtitle:
        "Six powerful features that work together to keep your skin on track.",
      items: [
        {
          title: "Daily Routines",
          description:
            "Build personalized morning and evening routines. Track each step and build the consistency habit that actually sticks.",
        },
        {
          title: "Product Shelf",
          description:
            "Your personal skincare library. Add any product, track when you opened it, and always know what is in your collection.",
        },
        {
          title: "AI Glow Coach",
          description:
            "Ask anything about skincare and get personalized guidance. Your private coach knows your routine and helps you optimize it.",
        },
        {
          title: "Photo Diary",
          description:
            "Capture your skin's journey over time. Side-by-side comparisons show the real progress your routine is making.",
        },
        {
          title: "Streak Tracking",
          description:
            "Build momentum with daily streaks. See your success rate, monthly consistency, and celebrate every milestone.",
        },
        {
          title: "History Calendar",
          description:
            "A beautiful calendar view of your entire skincare journey to see which days you completed your routine at a glance.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      titleLine1: "Three steps to",
      titleEmphasis: "glowing skin",
      subtitle: "Getting started takes less than two minutes.",
      steps: [
        {
          tag: "Add products",
          title: "Build your shelf",
          description:
            "Add your cleansers, serums, moisturizers, and SPF to your personal product library. Just type the name and brand and GlowRoutine keeps track of everything for you.",
        },
        {
          tag: "Create routines",
          title: "Set your morning & evening rituals",
          description:
            "Arrange your products in the right order for your AM and PM routines. The app guides you step by step so you never skip a layer.",
        },
        {
          tag: "Track & glow",
          title: "Check in daily and watch the magic",
          description:
            "Mark each step as complete, take progress photos, and chat with your AI coach when you have questions. Your streak keeps you accountable while your skin does the rest.",
        },
      ],
    },
    reviews: {
      eyebrow: "Glow members",
      titleLine1: "Loved by",
      titleEmphasis: "skincare fans",
      subtitle: "Real people, real results.",
      items: [
        {
          handle: "Glow Member · 47-day streak",
          quote:
            "I've tried every habit tracker but this is the first one that actually made me consistent with skincare. The streak feature is so motivating.",
        },
        {
          handle: "Glow Member · 100% success rate",
          quote:
            "The AI coach is incredible. I asked about layering retinol with niacinamide and got a genuinely helpful answer tailored to my products.",
        },
        {
          handle: "Glow Member · 3 months in",
          quote:
            "The before and after photo diary made me emotional. Three months of consistent routine and the difference is visible.",
        },
      ],
    },
    cta: {
      titleLine1: "Start your glow",
      titleEmphasis: "journey today",
      subtitle: "Free to download. No subscription required to get started.",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    footer: {
      links: ["Privacy", "Terms", "Support", "Instagram"],
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      how: "Comment ça marche",
      reviews: "Avis",
      download: "Télécharger",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      eyebrow: "Le skincare, simplifié",
      titleLine1: "Votre peau",
      titleLine2: "mérite un",
      titleEmphasis: "rituel quotidien",
      subtitle:
        "Suivez vos produits, créez vos routines du matin et du soir, et voyez votre glow grandir jour après jour.",
      download: "Télécharger",
      seeFeatures: "Voir les fonctionnalités",
    },
    highlights: [
      "Gratuit",
      "Routines matin & soir",
      "Coach skincare IA",
      "Tous vos produits",
    ],
    features: {
      eyebrow: "Tout ce qu'il vous faut",
      titleLine1: "Pensé pour votre",
      titleEmphasis: "transformation",
      subtitle:
        "Six fonctionnalités qui travaillent ensemble pour garder votre peau sur la bonne voie.",
      items: [
        {
          title: "Routines quotidiennes",
          description:
            "Créez vos routines du matin et du soir. Cochez chaque étape et construisez une habitude qui tient vraiment.",
        },
        {
          title: "Bibliothèque produits",
          description:
            "Votre collection personnelle. Ajoutez n'importe quel produit, suivez sa date d'ouverture, et sachez toujours ce que vous avez.",
        },
        {
          title: "Coach Glow IA",
          description:
            "Posez toutes vos questions skincare et recevez des conseils personnalisés. Votre coach connaît votre routine.",
        },
        {
          title: "Journal photo",
          description:
            "Capturez l'évolution de votre peau. Les comparaisons avant/après montrent les vrais progrès de votre routine.",
        },
        {
          title: "Suivi des streaks",
          description:
            "Gardez le rythme avec vos streaks. Voyez votre taux de réussite, votre constance, et célébrez chaque étape.",
        },
        {
          title: "Calendrier",
          description:
            "Un calendrier de tout votre parcours skincare, pour voir en un coup d'œil les jours où vous avez tenu votre routine.",
        },
      ],
    },
    how: {
      eyebrow: "Comment ça marche",
      titleLine1: "Trois étapes vers",
      titleEmphasis: "une peau lumineuse",
      subtitle: "Commencer prend moins de deux minutes.",
      steps: [
        {
          tag: "Ajouter des produits",
          title: "Constituez votre bibliothèque",
          description:
            "Ajoutez vos nettoyants, sérums, crèmes et SPF. Tapez le nom et la marque, GlowRoutine s'occupe du reste.",
        },
        {
          tag: "Créer vos routines",
          title: "Réglez vos rituels matin & soir",
          description:
            "Classez vos produits dans le bon ordre pour le matin et le soir. L'app vous guide étape par étape.",
        },
        {
          tag: "Suivre & briller",
          title: "Cochez chaque jour et voyez la magie",
          description:
            "Validez chaque étape, prenez des photos, et discutez avec votre coach IA. Votre streak vous motive, votre peau fait le reste.",
        },
      ],
    },
    reviews: {
      eyebrow: "La communauté Glow",
      titleLine1: "Adopté par les",
      titleEmphasis: "fans de skincare",
      subtitle: "De vraies personnes, de vrais résultats.",
      items: [
        {
          handle: "Membre Glow · 47 jours de streak",
          quote:
            "J'ai testé tous les trackers d'habitudes, mais c'est le premier qui m'a vraiment rendue régulière. Le streak est trop motivant.",
        },
        {
          handle: "Membre Glow · 100% de réussite",
          quote:
            "Le coach IA est incroyable. J'ai demandé comment superposer rétinol et niacinamide, et la réponse était vraiment adaptée à mes produits.",
        },
        {
          handle: "Membre Glow · 3 mois",
          quote:
            "Le journal photo avant/après m'a émue. Trois mois de routine constante, et la différence se voit vraiment.",
        },
      ],
    },
    cta: {
      titleLine1: "Commencez votre",
      titleEmphasis: "glow aujourd'hui",
      subtitle: "Gratuit. Sans abonnement pour commencer.",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    footer: {
      links: ["Confidentialité", "Conditions", "Support", "Instagram"],
      rights: "Tous droits réservés.",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
