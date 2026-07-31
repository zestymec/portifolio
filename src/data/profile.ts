import type { Metric, NavLink, SocialLink } from "@/types";

export const PROFILE = {
  name: "Muhammad Umer Aziz",
  username: "zestymec",
  title: "Full-Stack Developer & MLOps Practitioner",
  tagline:
    "Building scalable web applications, production pipelines, and high-performance digital systems with modern engineering practices",
  email: "m.umer394aziz@gmail.com",
  location: "Lahore, Pakistan",
  signature: "@zestymec",
} as const;

export const LIVE_STATUS =
  "⚡ Currently: Scaling MLOps pipelines, building full-stack systems, and bridging production software with modern cloud architectures." as const;

export const TYPEWRITER_PHRASES = [
  "Muhammad Umer Aziz",
  "Full-Stack Software Engineer",
  "MLOps & Infrastructure Builder",
  "React Native & Next.js Architect",
  "Ex-Alkhidmat Dev Intern",
  "Startup Operator @ Bazaura",
  "Systems & Automation Enthusiast",
  "Code & Japanese Language Learner",
] as const;

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Hub" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/beyond-bits", label: "Beyond Bits" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "email",
    name: "Email",
    href: "mailto:m.umer394aziz@gmail.com",
    username: "m.umer394aziz@gmail.com",
    color: "#ff007a",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/zestymec",
    username: "/in/zestymec",
    color: "#0a66c2",
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/zestymec",
    username: "/zestymec",
    color: "#f0f6fc",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    href: "https://pinterest.com/zestymec",
    username: "@zestymec",
    color: "#e60023",
  },
  {
    id: "twitter",
    name: "X / Twitter",
    href: "https://twitter.com/zestymec",
    username: "@zestymec",
    color: "#1da1f2",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/zestymec",
    username: "@zestymec",
    color: "#e1306c",
  },
];

export const METRICS: Metric[] = [
  { id: "views", label: "Breakout Video Views", value: "136", suffix: "K+", icon: "zap" },
  { id: "mobile", label: "Mobile Modules Built", value: "12", suffix: "+", icon: "mobile" },
  { id: "languages", label: "Languages Explored", value: "3", icon: "globe" },
  { id: "stacks", label: "Core Tech Stacks", value: "3", suffix: "+", icon: "layers" },
  { id: "experience", label: "Years Engineering", value: "1", suffix: "+", icon: "code" },
  { id: "donors", label: "Users & Donors Impacted", value: "10", suffix: "K+", icon: "users" },
];

export const HUB_CARDS = [
  {
    href: "/about",
    title: "About Me",
    desc: "Tech philosophy, background, languages & engineering mindset",
  },
  {
    href: "/experience",
    title: "Experience",
    desc: "Alkhidmat Foundation, Bazaura.pk operations & full-stack development",
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "Production repos, MLOps pipelines, and web systems",
  },
  {
    href: "/beyond-bits",
    title: "Beyond Bits",
    desc: "Japanese language learning, gaming optimization & content creation",
  },
] as const;