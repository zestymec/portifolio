import type { FlagshipProject, Project } from "@/types";

export const PROJECT_FILTERS = [
  { id: "all" as const, label: "All Projects" },
  { id: "web" as const, label: "Web Platforms" },
  { id: "mobile" as const, label: "Mobile Apps" },
  { id: "utilities" as const, label: "Utilities" },
  { id: "opensource" as const, label: "Open Source" },
];

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    slug: "bazaura-platform",
    title: "Bazaura.pk Full-Stack Platform",
    subtitle: "Three-Repo E-Commerce Architecture: Next.js, React Native & Python Backend",
    summary:
      "A complete multi-repository rebuild unifying web, mobile, and logistics backend into a scalable e-commerce infrastructure with PostEx courier automation.",
    category: "web",
    role: "Freelance Full-Stack Developer & Operations",
    period: "Active Development",
    status: "In Development",
    stack: ["Next.js", "React Native", "Python", "SQL", "Tailwind CSS", "PostEx API"],
    repos: [
      {
        label: "Next.js Web Rebuild",
        url: "https://github.com/zestymec/bazaura.pk-next-js-web",
        role: "Web Application",
      },
      {
        label: "React Native Mobile App",
        url: "https://github.com/zestymec/bazaura.pk-app",
        role: "Mobile App (iOS & Android)",
      },
      {
        label: "Python Shared Backend",
        url: "https://github.com/zestymec/python-bazaura-app-backend",
        role: "Shared Python/SQL API",
      },
    ],
    liveUrl: "https://bazaura.pk",
    context:
      "Bazaura.pk needed to break out of legacy constraints into a decoupled, modern multi-tier platform capable of powering both high-conversion browser storefronts and native mobile apps.",
    problem:
      "Monolithic store bottlenecks, slow mobile checkout flows, and manual order reconciliation with couriers held back scaling velocity.",
    solution:
      "Engineered an interconnected 3-repository platform: a Next.js App Router web frontend, a cross-platform React Native client, and a centralized Python/SQL backend API that handles order pipelines and connects directly to PostEx courier endpoints.",
    keyFeatures: [
      {
        title: "Three-Tier Decoupled Architecture",
        description:
          "Independent repositories for web, mobile, and backend allow focused iteration while sharing single-source data contracts.",
      },
      {
        title: "Courier & Order Pipeline",
        description:
          "Automated consignment tracking and booking with PostEx logistics API, removing hours of manual merchant coordination.",
      },
      {
        title: "Operational Grounding",
        description:
          "Designed from first-hand day-to-day operations experience managing customer orders, marketing campaigns, and shipping realities.",
      },
    ],
    shippedVsInProgress: {
      shipped: [
        "Next.js App Router storefront foundation and component library",
        "Python backend data schemas, API routes, and authentication",
        "React Native mobile app core navigation structure and shell",
        "PostEx courier API integration for consignment routing",
      ],
      inProgress: [
        "End-to-end payment gateway reconciliation",
        "Real-time mobile push notifications for delivery statuses",
        "Advanced search and multi-attribute product filtering",
      ],
    },
    metrics: [
      { label: "Code Repositories", value: "3 Linked Repos" },
      { label: "Client Platform", value: "Web, iOS, Android" },
      { label: "Backend Core", value: "Python + SQL" },
    ],
    architecture: [
      "Client Tier: Next.js (Web SSR) + React Native (Mobile iOS/Android)",
      "API Tier: Python REST API with structured endpoint routing",
      "Data Tier: SQL relational database with optimized transaction schemas",
      "Logistics Tier: PostEx courier webhook & booking synchronization",
    ],
  },
  {
    slug: "akfp-fundraiser",
    title: "AKFP Fundraiser Platform",
    subtitle: "National Philanthropy & Campaign Platform with AI Writing Assist",
    summary:
      "Production-shipped campaign fundraising platform built for Alkhidmat Foundation Pakistan, featuring 15+ modular components and an integrated AI-powered writing assistant.",
    category: "web",
    role: "Frontend Developer (Contract)",
    period: "Shipped & Live",
    status: "Shipped & Live",
    stack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "AI Writing Assist"],
    liveUrl: "https://alkhidmat.org",
    context:
      "Alkhidmat Foundation Pakistan required a high-conversion, accessible web platform to enable global donors to create and support humanitarian appeals.",
    problem:
      "Volunteer campaign creators often struggled to write clear, structured, and persuasive appeal descriptions, slowing review cycles and lowering donor engagement.",
    solution:
      "Engineered over 15 production UI components using Next.js and Tailwind CSS, coupled with an AI-powered writing-assist feature that guides fundraisers through creating authentic, structured campaign appeals.",
    keyFeatures: [
      {
        title: "AI Writing Assistant",
        description:
          "Provides in-context structured drafting assistance for fundraisers, helping craft clear, compelling appeals that boost transparency.",
      },
      {
        title: "15+ Production UI Components",
        description:
          "Modular component system covering donor authentication, campaign discovery, leaderboards, and verified creator profiles.",
      },
      {
        title: "Performance & Accessibility",
        description:
          "Built on Tailwind CSS and React 19 for rapid loading, zero layout shift, and multi-lingual UI readiness.",
      },
    ],
    shippedVsInProgress: {
      shipped: [
        "15+ core production components deployed to live users",
        "AI-powered campaign description writing-assist flow",
        "User authentication and fundraiser profile dashboards",
        "Responsive donation flow elements and campaign cards",
      ],
      inProgress: [
        "Multi-currency donation ledger analytics",
        "Volunteer team collaboration tools",
      ],
    },
    metrics: [
      { label: "Components Shipped", value: "15+ Modules" },
      { label: "Production Status", value: "Shipped & Live" },
      { label: "Frontend Stack", value: "Next.js + Tailwind" },
    ],
    architecture: [
      "App Router architecture with server-rendered campaign pages",
      "Accessible component patterns built for high-stress relief situations",
      "Integration with Alkhidmat Foundation core donation backend",
    ],
  },
  {
    slug: "akfp-mobile-app",
    title: "AKFP Cross-Platform Mobile App",
    subtitle: "Native iOS & Android Philanthropy Experience with Hermes Optimization",
    summary:
      "Production mobile application developed in React Native for Alkhidmat Foundation, bringing real-time campaign tracking and Zakat calculations directly to mobile devices.",
    category: "mobile",
    role: "Frontend Developer (Contract)",
    period: "In Development",
    status: "In Development",
    stack: ["React Native", "TypeScript", "Hermes Engine", "iOS", "Android"],
    context:
      "Extending Alkhidmat Foundation's reach into mobile ecosystems with dedicated iOS and Android experiences tailored for quick giving and live impact updates.",
    problem:
      "Supporting diverse budget Android hardware across Pakistan while maintaining silky 60fps animations, fast cold starts, and minimal memory footprints.",
    solution:
      "Architected using React Native with Hermes bytecode compilation, fine-grained bundle optimization, and native stack navigation.",
    keyFeatures: [
      {
        title: "Hermes Bytecode Engine",
        description:
          "Precompiled JavaScript bytecode provides instantaneous cold boot and compact memory consumption on budget devices.",
      },
      {
        title: "Zakat & Donation Calculators",
        description:
          "Interactive calculation elements delivering transparent financial math for religious giving and humanitarian donations.",
      },
      {
        title: "Native Navigation Architecture",
        description:
          "Seamless transition hierarchy between emergency campaigns, donor histories, and regional project updates.",
      },
    ],
    shippedVsInProgress: {
      shipped: [
        "React Native CLI foundation configured for iOS and Android",
        "Hermes profiling and bundle optimization pipelines",
        "Core design tokens and donor navigation stacks",
        "Zakat calculation logic and interactive input modules",
      ],
      inProgress: [
        "Native payment SDK bridge integrations",
        "Push notification handlers for urgent disaster relief drives",
      ],
    },
    metrics: [
      { label: "Target Platforms", value: "iOS & Android" },
      { label: "Engine", value: "Hermes Optimized" },
      { label: "Role", value: "Frontend Dev (Contract)" },
    ],
    architecture: [
      "Native module bridge architecture",
      "Hermes V8-alternative execution engine",
      "Custom navigation hierarchy with state persistence",
    ],
  },
  {
    slug: "alkhidmat-web-view-app",
    title: "Alkhidmat Foundation WebView App",
    subtitle: "High-Performance Native WebView Container for Operational Distribution",
    summary:
      "A specialized React Native WebView application providing immediate mobile distribution for Alkhidmat Foundation's web services and donor tools.",
    category: "mobile",
    role: "Frontend Developer (Contract)",
    period: "Shipped / Active",
    status: "Shipped / Active",
    stack: ["React Native", "WebView", "TypeScript", "iOS", "Android"],
    githubUrl: "https://github.com/zestymec/Alkhidmat-Foundation-Web-View-App",
    context:
      "Providing a lightweight mobile distribution container ensuring rapid availability of the foundation's web applications on donor and field phones.",
    problem:
      "Ensuring bi-directional JavaScript bridges, secure session cookie handling, and seamless offline notification without WebView crashes.",
    solution:
      "Hardened React Native WebView shell with custom network state interception, splash screen synchronization, and error fallbacks.",
    keyFeatures: [
      {
        title: "Bi-Directional Bridge",
        description:
          "Enables native device notifications and actions to communicate smoothly with web application contexts.",
      },
      {
        title: "Network State Interception",
        description:
          "Displays elegant offline fallback screens and retry mechanisms when connectivity drops in field conditions.",
      },
      {
        title: "Lightweight Binary",
        description:
          "Extremely compact download footprint enabling rapid installation even on slow 3G cellular connections.",
      },
    ],
    shippedVsInProgress: {
      shipped: [
        "Open-source repository verified and maintained on GitHub",
        "Custom JS bridge handler with safe messaging protocols",
        "Offline status listener and reconnection prompts",
        "Status bar color synchronization with web page themes",
      ],
      inProgress: [
        "Biometric session persistence layer",
      ],
    },
    metrics: [
      { label: "Repository", value: "Verified on GitHub" },
      { label: "Binary Footprint", value: "Lightweight APK/IPA" },
      { label: "Status", value: "Shipped / Active" },
    ],
    architecture: [
      "React Native WebView engine with strict CSP enforcement",
      "Native device API binding",
      "Zero-latency splash handoff",
    ],
  },
];

export const CONCEPT_PROJECTS = [
  {
    id: "memory-ai",
    title: "Personal Memory AI Assistant ('Second Brain')",
    status: "Concept" as const,
    description:
      "An intelligent personal assistant designed to retain long-term conversational memory and store synthesized knowledge points in a persistent database, functioning as an external cognitive second brain.",
    tags: ["Concept", "AI / LLM", "Python", "Vector & SQL"],
    badge: "Concept Stage",
  },
  {
    id: "task-manager",
    title: "All-in-One Unified Task Manager",
    status: "In Development" as const,
    description:
      "A comprehensive workspace unifying actionable checklist task management with visual Excalidraw whiteboards and spreadsheet-style tracking in a single seamless UI. Early version active under the to-do-list-app repository.",
    githubUrl: "https://github.com/zestymec/to-do-list-app",
    tags: ["In Development", "React", "TypeScript", "Excalidraw"],
    badge: "In Development",
  },
];

export const CURATED_PROJECTS: Project[] = [
  {
    id: "bazaura-platform",
    slug: "bazaura-platform",
    title: "Bazaura.pk Full-Stack Platform",
    description:
      "Multi-repo e-commerce rebuild: Next.js web storefront, React Native mobile app (iOS/Android), and shared Python/SQL backend with PostEx courier automation.",
    tags: ["Next.js", "React Native", "Python", "SQL", "Tailwind CSS"],
    category: "web",
    status: "In Development",
    repos: [
      { label: "Web", url: "https://github.com/zestymec/bazaura.pk-next-js-web" },
      { label: "App", url: "https://github.com/zestymec/bazaura.pk-app" },
      { label: "Backend", url: "https://github.com/zestymec/python-bazaura-app-backend" },
    ],
    liveUrl: "https://bazaura.pk",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&q=80&fit=crop",
    featured: true,
  },
  {
    id: "akfp-fundraiser",
    slug: "akfp-fundraiser",
    title: "AKFP Fundraiser Platform",
    description:
      "Shipped & live philanthropy campaign platform built with Next.js & Tailwind CSS. 15+ production components and an AI-powered writing assistant.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "AI Writing Assist"],
    category: "web",
    status: "Live",
    liveUrl: "https://alkhidmat.org",
    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?w=800&q=80&fit=crop",
    featured: true,
  },
  {
    id: "akfp-mobile-app",
    slug: "akfp-mobile-app",
    title: "AKFP Cross-Platform Mobile App",
    description:
      "Cross-platform mobile app in React Native for iOS & Android. Hermes bytecode engine optimization, Zakat calculation flow, and donor navigation.",
    tags: ["React Native", "TypeScript", "Hermes", "iOS & Android"],
    category: "mobile",
    status: "In Development",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    featured: true,
  },
  {
    id: "alkhidmat-web-view-app",
    slug: "alkhidmat-web-view-app",
    title: "Alkhidmat Foundation WebView App",
    description:
      "Production React Native WebView wrapper app bridging web platform services to mobile users with offline fallbacks and safe JS bridge messaging.",
    tags: ["React Native", "WebView", "TypeScript", "Open Source"],
    category: "mobile",
    status: "Live",
    githubUrl: "https://github.com/zestymec/Alkhidmat-Foundation-Web-View-App",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fit=crop",
    featured: true,
  },
  {
    id: "to-do-list-app",
    title: "All-in-One Task Manager (Early Build)",
    description:
      "In-development productivity workspace combining task management with interactive visual workflows.",
    tags: ["React", "TypeScript", "Task Management", "Early Build"],
    category: "utilities",
    status: "In Development",
    githubUrl: "https://github.com/zestymec/to-do-list-app",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80&fit=crop",
    featured: false,
  },
  {
    id: "spotify-clone-rn",
    title: "Spotify Clone (React Native)",
    description:
      "Mobile music streaming interface practice project built with React Native and native audio playback controls.",
    tags: ["React Native", "Mobile UI", "Audio Controls"],
    category: "mobile",
    status: "Live",
    githubUrl: "https://github.com/zestymec/Spotify-Clone-React-Native",
    imageUrl: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=800&q=80&fit=crop",
    featured: false,
  },
  {
    id: "appwrite-auth-rn",
    title: "Appwrite Authentication (React Native)",
    description:
      "Cross-platform user authentication module connecting React Native CLI with Appwrite Backend-as-a-Service.",
    tags: ["React Native", "Appwrite", "Auth", "BaaS"],
    category: "mobile",
    status: "Live",
    githubUrl: "https://github.com/zestymec/Appwrite-Authentication-React-Native",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&fit=crop",
    featured: false,
  },
  {
    id: "password-generator-rn",
    title: "Password Generator (React Native)",
    description:
      "Lightweight password security utility app built with React Native with customizable entropy rules.",
    tags: ["React Native", "Utility", "Practice"],
    category: "utilities",
    status: "Live",
    githubUrl: "https://github.com/zestymec/Password-generator-react-native-app",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&fit=crop",
    featured: false,
  },
];
