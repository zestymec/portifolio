import type { ExperienceItem } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "alkhidmat",
    company: "Alkhidmat Foundation Pakistan",
    role: "Software Engineer / Intern",
    period: "2024 — Present",
    location: "Pakistan",
    description:
      "Architecting and shipping production-grade mobile applications that power philanthropy at scale — from Zakat calculators to multi-lingual donor experiences.",
    type: "work",
    highlights: [
      {
        id: "mobile-arch",
        title: "Mobile App Architecture",
        description:
          "Led React Native CLI architecture with Hermes optimization, custom native modules, and performance-first navigation patterns for the Alkhidmat donor app.",
        tags: ["React Native CLI", "Hermes", "Native Modules", "TypeScript"],
      },
      {
        id: "philanthropy",
        title: "Philanthropy Logic Engine",
        description:
          "Engineered complex donation, Zakat, and Sadaqah calculation engines supporting global donors with region-aware rules, currency conversion, and audit trails.",
        tags: ["Business Logic", "Zakat Engine", "Multi-Currency", "Validation"],
      },
      {
        id: "ux-audit",
        title: "UX/UI Performance Audits",
        description:
          "Conducted multi-lingual UX audits and performance optimizations — reducing render times, improving accessibility, and localizing content for Urdu, English, and Arabic.",
        tags: ["i18n", "Performance", "Accessibility", "UX Audit"],
      },
    ],
  },
  {
    id: "bazaura",
    company: "Bazaura",
    role: "Founder & Brand Manager",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Managing an e-commerce brand end-to-end — from WordPress storefront development and graphic design to marketing orchestration and customer experience.",
    type: "brand",
    highlights: [
      {
        id: "wordpress",
        title: "WordPress E-Commerce",
        description:
          "Built and maintained a high-converting WordPress storefront with custom themes, WooCommerce integrations, and SEO-optimized product pages.",
        tags: ["WordPress", "WooCommerce", "SEO", "Custom Themes"],
      },
      {
        id: "design",
        title: "Graphic Design & Branding",
        description:
          "Designed cohesive brand assets, product visuals, and social media creatives that elevated Bazaura's market presence and conversion rates.",
        tags: ["Figma", "Branding", "Product Design", "Social Media"],
      },
      {
        id: "marketing",
        title: "Marketing Orchestration",
        description:
          "Orchestrated multi-channel marketing campaigns across Instagram and TikTok, driving organic growth through content strategy and audience engagement.",
        tags: ["Content Strategy", "Instagram", "TikTok", "Analytics"],
      },
    ],
  },
];
