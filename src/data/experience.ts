import type { ExperienceItem, MerArchitectureLayer } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "alkhidmat-contract",
    company: "Alkhidmat Foundation Pakistan",
    role: "Frontend Developer (Contract)",
    period: "September 2026 — Present",
    location: "Lahore HQ — Media & Marketing Department",
    description:
      "Converted from internship to a paid contract role after shipping production features. Engineering the Next.js Fundraiser Platform, developing cross-platform React Native mobile applications, refactoring legacy codebases, and supporting the main alkhidmat.org web architecture.",
    type: "work",
    href: "/experience/alkhidmat",
    highlights: [
      {
        id: "fundraiser-platform",
        title: "Fundraiser Platform (Shipped)",
        description:
          "Engineered and shipped the live fundraiser platform using Next.js and Tailwind CSS, building 15+ production components (auth, campaigns, profiles) and an AI-powered writing assistant for campaign descriptions.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "AI Writing Assist"],
      },
      {
        id: "mobile-engineering",
        title: "React Native Mobile & WebView",
        description:
          "Building the organization's cross-platform mobile app in React Native (iOS & Android) with Hermes engine optimization, plus maintaining the dedicated WebView wrapper app.",
        tags: ["React Native", "Hermes", "WebView", "Mobile Arch"],
      },
      {
        id: "web-refactoring",
        title: "alkhidmat.org Architecture & Refactoring",
        description:
          "Supporting the organization's main Next.js web application and upcoming React redesign. Refactoring legacy, undocumented code under senior supervision using modern Git workflows.",
        tags: ["Next.js", "React", "Code Refactoring", "Git/GitHub"],
      },
    ],
  },
  {
    id: "alkhidmat-intern",
    company: "Alkhidmat Foundation Pakistan",
    role: "Web Development Intern",
    period: "January 9, 2026 — September 8, 2026 (~8 months)",
    location: "Lahore HQ — Media & Marketing Web Dept",
    description:
      "Completed an 8-month intensive engineering internship. Designed donor UI systems, bridged mobile navigation patterns, and delivered donation tracking flows, earning a direct promotion to a paid contract role.",
    type: "work",
    href: "/experience/alkhidmat",
    highlights: [
      {
        id: "intern-ui",
        title: "Donor UI System Design",
        description:
          "Designed accessible, high-performance UI components and multi-lingual layout foundations for donor campaigns.",
        tags: ["React", "UI/UX", "Tailwind CSS", "Accessibility"],
      },
      {
        id: "intern-mobile",
        title: "Cross-Platform Navigation",
        description:
          "Implemented stack and tab navigation architectures, resolving style conflicts across Android and iOS runtime environments.",
        tags: ["React Native", "Navigation", "Hermes"],
      },
      {
        id: "intern-promotion",
        title: "Contract Promotion Milestone",
        description:
          "Earned promotion from intern to paid Frontend Developer (Contract) based on demonstrable velocity and reliable production shipping.",
        tags: ["Career Milestone", "Production Shipping", "Promotion"],
      },
    ],
  },
  {
    id: "freelance-bazaura",
    company: "Freelance Full-Stack & Client Operations",
    role: "Freelance Full-Stack Developer",
    period: "Ongoing / Self-Employed",
    location: "Remote — Concurrent with Alkhidmat & BSCS",
    description:
      "Engineering full-stack web and mobile platforms alongside digital operations for multiple clients: Bazaura.pk, WerInvestments, Bella, NoorVerse Academy, and Hijazi Collections. Spearheading the 3-repo Bazaura.pk platform rebuild and courier logistics.",
    type: "brand",
    href: "/experience/bazaura",
    highlights: [
      {
        id: "bazaura-3repos",
        title: "Bazaura.pk 3-Repo Rebuild",
        description:
          "Architecting a full-stack e-commerce ecosystem: Next.js web frontend, React Native mobile app (iOS/Android), and shared Python + SQL backend.",
        tags: ["Next.js", "React Native", "Python", "SQL"],
      },
      {
        id: "wordpress-acf",
        title: "WordPress (PHP/ACF) Customization",
        description:
          "Customizing WordPress themes and Advanced Custom Fields (ACF) since 2024 for freelance client storefronts and content portals.",
        tags: ["WordPress", "PHP/ACF", "Theming", "CMS"],
      },
      {
        id: "operations-logistics",
        title: "E-Commerce Operations & Logistics",
        description:
          "Managing end-to-end e-commerce logistics: order fulfillment, PostEx courier API coordination, Meta Ads management, and Canva design assets.",
        tags: ["PostEx Logistics", "Meta Ads", "E-Commerce", "SMM"],
      },
    ],
  },
];

export const ALKHIDMAT_DETAILS = {
  title: "Alkhidmat Foundation Pakistan",
  subtitle: "Media & Marketing Department — Lahore Head Office",
  roleStatus: "Frontend Developer (Contract) · Sept 2026 – Present (Prior: Intern Jan – Sept 2026)",
  contributions: [
    {
      area: "Next.js Fundraiser Platform (Shipped & Live)",
      tasks: [
        "Shipped and live production philanthropy platform built with Next.js and Tailwind CSS",
        "Developed 15+ components covering auth flows, campaign pages, and fundraiser profiles",
        "Integrated AI-powered writing-assist feature for campaign descriptions",
        "Streamlined donation flows, campaign metrics, and Zakat calculation interfaces",
      ],
    },
    {
      area: "Mobile App & WebView Development",
      tasks: [
        "Building the organization's cross-platform mobile app in React Native (iOS & Android)",
        "Hermes engine profiling and bundle size optimization",
        "Developed and maintained separate WebView wrapper app (Alkhidmat-Foundation-Web-View-App)",
        "Integrated robust navigation architectures and cross-platform styling",
      ],
    },
    {
      area: "alkhidmat.org Architecture & Refactoring",
      tasks: [
        "Main alkhidmat.org website runs on Next.js (not WordPress)",
        "Actively contributing to the upcoming redesign being built in React",
        "Refactoring undocumented legacy code under senior developer supervision",
        "Full Git/GitHub workflow adherence with strict peer review and clean PR standards",
      ],
    },
  ],
};

export const BAZAURA_DETAILS = {
  title: "Bazaura.pk & Client Operations",
  subtitle: "Full-Stack Rebuild & E-Commerce Operations Case Study",
  metrics: [
    { label: "Web Architecture", value: "Next.js Web App" },
    { label: "Mobile Platform", value: "React Native (iOS/Android)" },
    { label: "Backend Layer", value: "Python + SQL" },
    { label: "Role", value: "Freelance Full-Stack Developer" },
  ],
  pipelines: [
    "Three-repo architecture: Next.js web (`bazaura.pk-next-js-web`), React Native mobile (`bazaura.pk-app`), and shared Python/SQL backend (`python-bazaura-app-backend`)",
    "WordPress (PHP/ACF) theming and custom fields across multiple client sites since 2024 (Bazaura.pk, WerInvestments, Bella, NoorVerse Academy, Hijazi Collections)",
    "Day-to-day e-commerce operations: order processing & PostEx courier logistics coordination",
    "Meta Ads campaign structuring, ROAS tracking, and conversion-focused landing page design",
    "Built full-stack email-sending app with Mailchimp integration",
    "Custom AI chatbot built for internal workflow automation using an LLM API",
  ],
};

export const MERN_ARCHITECTURE: MerArchitectureLayer[] = [
  {
    id: "presentation",
    layer: "Presentation Layer",
    stack: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion"],
    description:
      "Dynamic storefront with server-side rendering, responsive catalog filtering, and accessible checkout flows.",
  },
  {
    id: "api",
    layer: "API Gateway",
    stack: ["Node.js / Express.js", "Python Backend", "JWT", "REST"],
    description:
      "RESTful endpoints with authentication middleware, rate limiting, and structured error handling.",
  },
  {
    id: "business",
    layer: "Business Logic",
    stack: ["Node.js / Python", "Order Pipelines", "PostEx Logistics API"],
    description:
      "Order processing, courier integration, inventory management, and automated webhook handlers.",
  },
  {
    id: "data",
    layer: "Data Layer",
    stack: ["MongoDB", "SQL", "Database Indexing"],
    description:
      "Structured relational and document schemas with indexing strategies and optimized queries.",
  },
  {
    id: "infra",
    layer: "Infrastructure & Tools",
    stack: ["Git / GitHub", "Vercel / Netlify", "Hostinger / cPanel", "n8n"],
    description:
      "Automated continuous delivery, environment secrets isolation, and production health monitoring.",
  },
];
