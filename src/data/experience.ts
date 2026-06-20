import type { ExperienceItem, MerArchitectureLayer } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "alkhidmat",
    company: "Alkhidmat Foundation Pakistan",
    role: "Web & Mobile Development Intern",
    period: "2024 — Present",
    location: "Lahore HQ — Media & Marketing Web Dept.",
    description:
      "Designing UI layers, building cross-platform mobile modules via React Native CLI, resolving parent class style overlaps, and optimizing donation/campaign tracking elements for a national philanthropy platform.",
    type: "work",
    href: "/experience/alkhidmat",
    highlights: [
      {
        id: "ui-layers",
        title: "UI Layer Architecture",
        description:
          "Designing and implementing glassmorphic, accessible UI layers for the Alkhidmat donor experience with multi-lingual support.",
        tags: ["React Native CLI", "TypeScript", "UI/UX", "i18n"],
      },
      {
        id: "mobile-modules",
        title: "Cross-Platform Mobile Modules",
        description:
          "Building production mobile modules with Hermes optimization, custom navigation, and parent class style conflict resolution.",
        tags: ["React Native", "Hermes", "JS/TS", "Native Modules"],
      },
      {
        id: "donation-tracking",
        title: "Donation & Campaign Tracking",
        description:
          "Optimizing donation flows, Zakat calculation elements, and campaign tracking dashboards for global donor engagement.",
        tags: ["Campaign Analytics", "Zakat Engine", "Performance"],
      },
    ],
  },
  {
    id: "bazaura",
    company: "Bazaura",
    role: "Brand Manager & Venture Lead",
    period: "2023 — Present",
    location: "bazaura.pk — Remote",
    description:
      "Leading full-funnel digital operations — domain routing, WooCommerce optimization, Meta/TikTok Ads Manager pipelines, and conversion-focused landing page architecture.",
    type: "brand",
    href: "/experience/bazaura",
    highlights: [
      {
        id: "domain-routing",
        title: "Domain & Infrastructure",
        description:
          "Managing domain routing, DNS configuration, SSL pipelines, and storefront uptime for bazaura.pk.",
        tags: ["DNS", "WooCommerce", "SSL", "CDN"],
      },
      {
        id: "ads-pipeline",
        title: "Meta & TikTok Ads Manager",
        description:
          "Orchestrating paid acquisition funnels across Meta and TikTok with creative asset pipelines and ROAS tracking.",
        tags: ["Meta Ads", "TikTok Ads", "Analytics", "ROAS"],
      },
      {
        id: "landing-metrics",
        title: "Landing Page Optimization",
        description:
          "Building and A/B testing high-converting product landing pages with SEO-optimized content and visual assets.",
        tags: ["SEO", "Conversion", "A/B Testing", "Landing Pages"],
      },
    ],
  },
  {
    id: "mern-ecommerce",
    company: "MERN E-Commerce Platform",
    role: "Architect & Lead Developer",
    period: "2025 — Present",
    location: "Personal Project — Production Build",
    description:
      "Architecting a production-ready, highly optimized MERN Stack e-commerce platform from scratch with full payment, inventory, and admin systems.",
    type: "project",
    href: "/experience/mern-ecommerce",
    highlights: [
      {
        id: "backend-api",
        title: "Express.js API Layer",
        description:
          "RESTful API with JWT authentication, rate limiting, MongoDB aggregation pipelines, and comprehensive error handling.",
        tags: ["Express.js", "MongoDB", "JWT", "REST"],
      },
      {
        id: "frontend-store",
        title: "React Storefront",
        description:
          "Dynamic product catalog, cart persistence, checkout flows, and admin dashboard with real-time inventory updates.",
        tags: ["React", "Redux", "Stripe", "Admin Panel"],
      },
      {
        id: "deployment",
        title: "Production Deployment",
        description:
          "CI/CD pipelines, environment configuration, database indexing, and performance monitoring for production scale.",
        tags: ["Docker", "CI/CD", "Indexing", "Monitoring"],
      },
    ],
  },
];

export const ALKHIDMAT_DETAILS = {
  title: "Alkhidmat Foundation Pakistan",
  subtitle: "Media & Marketing Web Department — Lahore HQ",
  contributions: [
    {
      area: "UI Layer Design",
      tasks: [
        "Glassmorphic component systems for donor-facing screens",
        "Multi-lingual layout adaptation (Urdu, English, Arabic)",
        "Accessibility audits & WCAG compliance improvements",
      ],
    },
    {
      area: "React Native CLI Modules",
      tasks: [
        "Cross-platform navigation with stack & tab architectures",
        "Parent class style overlap debugging & resolution",
        "Hermes engine profiling & bundle size optimization",
      ],
    },
    {
      area: "Campaign & Donation Systems",
      tasks: [
        "Real-time donation tracking dashboard elements",
        "Zakat & Sadaqah calculation UI flows",
        "Campaign performance metric visualizations",
      ],
    },
  ],
};

export const BAZAURA_DETAILS = {
  title: "Bazaura — bazaura.pk",
  subtitle: "Full-Funnel Digital Operations Case Study",
  metrics: [
    { label: "Platform", value: "WooCommerce + WordPress" },
    { label: "Ad Channels", value: "Meta + TikTok" },
    { label: "Domain", value: "bazaura.pk" },
    { label: "Role", value: "Brand Manager & Venture Lead" },
  ],
  pipelines: [
    "Domain routing & DNS management for bazaura.pk",
    "WooCommerce product catalog optimization",
    "Meta Ads Manager campaign structuring",
    "TikTok Ads creative asset pipelines",
    "Landing page conversion rate optimization",
    "Cross-platform social content distribution",
  ],
};

export const MERN_ARCHITECTURE: MerArchitectureLayer[] = [
  {
    id: "presentation",
    layer: "Presentation Layer",
    stack: ["React 19", "Tailwind CSS", "Framer Motion"],
    description:
      "Dynamic storefront with server-side rendering hooks, product filtering, and responsive checkout flows.",
  },
  {
    id: "api",
    layer: "API Gateway",
    stack: ["Express.js", "JWT", "Rate Limiting", "CORS"],
    description:
      "RESTful endpoints with authentication middleware, input validation, and structured error responses.",
  },
  {
    id: "business",
    layer: "Business Logic",
    stack: ["Node.js", "Mongoose", "Stripe SDK"],
    description:
      "Order processing, inventory management, payment webhooks, and admin authorization flows.",
  },
  {
    id: "data",
    layer: "Data Layer",
    stack: ["MongoDB", "Redis Cache", "GridFS"],
    description:
      "Document schemas with indexing strategies, aggregation pipelines, and media asset storage.",
  },
  {
    id: "infra",
    layer: "Infrastructure",
    stack: ["Docker", "GitHub Actions", "Netlify/Vercel"],
    description:
      "Containerized deployment with CI/CD automation, environment secrets, and health monitoring.",
  },
];
