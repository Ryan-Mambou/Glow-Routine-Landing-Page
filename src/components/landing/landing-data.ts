export type Feature = {
  icon: string;
  title: string;
  description: string;
  iconColorClass: string;
};

export type Step = {
  tag: string;
  title: string;
  description: string;
};

export type Testimonial = {
  initials: string;
  name: string;
  handle: string;
  quote: string;
};

export const highlightItems = [
  "Free to download",
  "Morning & evening routines",
  "AI-powered skincare coach",
  "Track any product",
];

export const features: Feature[] = [
  {
    icon: "🌅",
    title: "Daily Routines",
    description:
      "Build personalized morning and evening routines. Track each step and build the consistency habit that actually sticks.",
    iconColorClass: "bg-[#FDE0E0]",
  },
  {
    icon: "📦",
    title: "Product Shelf",
    description:
      "Your personal skincare library. Add any product, track when you opened it, and always know what is in your collection.",
    iconColorClass: "bg-[#FDE8D0]",
  },
  {
    icon: "🤖",
    title: "AI Glow Coach",
    description:
      "Ask anything about skincare and get personalized guidance. Your private coach knows your routine and helps you optimize it.",
    iconColorClass: "bg-[#EAE0F8]",
  },
  {
    icon: "📸",
    title: "Photo Diary",
    description:
      "Capture your skin's journey over time. Side-by-side comparisons show the real progress your routine is making.",
    iconColorClass: "bg-[#D8F4EC]",
  },
  {
    icon: "🔥",
    title: "Streak Tracking",
    description:
      "Build momentum with daily streaks. See your success rate, monthly consistency, and celebrate every milestone.",
    iconColorClass: "bg-[#FAF0D0]",
  },
  {
    icon: "📅",
    title: "History Calendar",
    description:
      "A beautiful calendar view of your entire skincare journey to see which days you completed your routine at a glance.",
    iconColorClass: "bg-[#D8EAF8]",
  },
];

export const steps: Step[] = [
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
];

export const testimonials: Testimonial[] = [
  {
    initials: "SL",
    name: "Sophie L.",
    handle: "Glow Member · 47-day streak",
    quote:
      "I've tried every habit tracker but this is the first one that actually made me consistent with skincare. The streak feature is so motivating.",
  },
  {
    initials: "MK",
    name: "Maya K.",
    handle: "Glow Member · 100% success rate",
    quote:
      "The AI coach is incredible. I asked about layering retinol with niacinamide and got a genuinely helpful answer tailored to my products.",
  },
  {
    initials: "JR",
    name: "Jade R.",
    handle: "Glow Member · 3 months in",
    quote:
      "The before and after photo diary made me emotional. Three months of consistent routine and the difference is visible.",
  },
];

export const footerLinks = ["Privacy", "Terms", "Support", "Instagram"];
