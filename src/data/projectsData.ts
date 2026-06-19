import type { Project } from "@/types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "alkhidmat-app",
    title: "Alkhidmat Donor App",
    description:
      "Production React Native app powering global philanthropy — featuring Zakat calculators, multi-lingual support, and real-time donation tracking.",
    tags: ["React Native", "TypeScript", "Hermes", "i18n"],
    category: "mobile",
    githubUrl: "https://github.com/zestymec",
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80", // TODO: Umer - Replace with actual asset link
    featured: true,
  },
  {
    id: "bazaura-store",
    title: "Bazaura E-Commerce",
    description:
      "Full-featured WordPress e-commerce storefront with custom theme, WooCommerce integration, and conversion-optimized product pages.",
    tags: ["WordPress", "WooCommerce", "PHP", "SEO"],
    category: "web",
    liveUrl: "https://bazaura.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472851294607-062f824d29cc?w=800&q=80", // TODO: Umer - Replace with actual asset link
    featured: true,
  },
  {
    id: "portfolio-v2",
    title: "Portfolio Website",
    description:
      "Ultra-clean Next.js portfolio with Framer Motion animations, glassmorphism design, and modular TypeScript architecture.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "web",
    githubUrl: "https://github.com/zestymec/umer",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // TODO: Umer - Replace with actual asset link
    featured: true,
  },
  {
    id: "zakat-calculator",
    title: "Zakat Calculator Engine",
    description:
      "Open-source Zakat calculation library with region-aware rules, Nisab thresholds, and multi-currency support for global Muslim donors.",
    tags: ["TypeScript", "Open Source", "Finance", "i18n"],
    category: "opensource",
    githubUrl: "https://github.com/zestymec",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "task-manager",
    title: "TaskFlow Mobile",
    description:
      "Minimalist React Native task manager with offline-first architecture, gesture navigation, and dark mode support.",
    tags: ["React Native", "AsyncStorage", "Gestures", "Dark Mode"],
    category: "mobile",
    githubUrl: "https://github.com/zestymec",
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "api-starter",
    title: "Express API Starter",
    description:
      "Production-ready Express.js boilerplate with MongoDB, JWT auth, rate limiting, and comprehensive TypeScript types.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "opensource",
    githubUrl: "https://github.com/zestymec",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // TODO: Umer - Replace with actual asset link
  },
];

export const PROJECT_FILTERS = [
  { id: "all" as const, label: "All" },
  { id: "mobile" as const, label: "Mobile Apps" },
  { id: "web" as const, label: "Web Apps" },
  { id: "opensource" as const, label: "Open Source" },
];
