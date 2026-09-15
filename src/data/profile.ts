import type { Metric, NavLink, SocialLink } from "@/types";

export const PROFILE = {
  name: "Muhammad Umer Aziz",
  username: "zestymec",
  title: "Full-Stack Developer",
  tagline:
    "Engineering scalable web & mobile platforms, robust backends, and user-centric digital products with modern software standards.",
  email: "m.umer394aziz@gmail.com",
  location: "Lahore, Pakistan",
  signature: "@zestymec",
} as const;

export const LIVE_STATUS =
  "⚡ Currently: Frontend Developer (Contract) at Alkhidmat Foundation, engineering the Bazaura.pk 3-repo full-stack platform, and expanding Python/ML foundations." as const;

export const TYPEWRITER_PHRASES = [
  "Muhammad Umer Aziz",
  "Full-Stack Developer",
  "Frontend Developer (Contract) @ Alkhidmat",
  "React Native & Next.js Builder",
  "Freelance Full-Stack Developer",
  "BSCS Student @ Virtual University",
  "Python & ML Enthusiast",
  "189+ Day Japanese Streak",
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
    color: "#c4f042",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/zestymec",
    username: "in/zestymec",
    color: "#0a66c2",
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/zestymec",
    username: "zestymec (72 repos, 640+ contribs)",
    color: "#f0f6fc",
  },
  {
    id: "kaggle",
    name: "Kaggle",
    href: "https://kaggle.com/zestymec",
    username: "zestymec",
    color: "#20beff",
  },
];

export const METRICS: Metric[] = [
  { id: "repos", label: "GitHub Repositories", value: "72", suffix: "+", icon: "code" },
  { id: "contribs", label: "Contributions (1 Year)", value: "640", suffix: "+", icon: "zap" },
  { id: "views", label: "Breakout Reel Views", value: "136", suffix: "K+", icon: "layers" },
  { id: "streak", label: "Japanese Streak (Days)", value: "189", suffix: "+", icon: "globe" },
  { id: "components", label: "AKFP Components Shipped", value: "15", suffix: "+", icon: "mobile" },
  { id: "stacks", label: "Core Mastered Stacks", value: "3", suffix: "+", icon: "users" },
];

export const HUB_CARDS = [
  {
    href: "/about",
    title: "About Me",
    desc: "Software engineering mindset, academic ledger, language journey & background",
  },
  {
    href: "/experience",
    title: "Experience",
    desc: "Alkhidmat Foundation (Contract + Intern) & Freelance Client Platforms",
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "Bazaura.pk 3-repo platform, AKFP Fundraiser, Mobile Apps & Code Repos",
  },
  {
    href: "/beyond-bits",
    title: "Beyond Bits",
    desc: "Japanese streak, street photography, competitive strategy & content creation",
  },
] as const;