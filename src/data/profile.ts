import type { Metric, NavLink, SocialLink } from "@/types";

export const PROFILE = {
  name: "Muhammad Umer Aziz",
  username: "zestymec",
  title: "Frontend Engineer & Gen-Z Tech Architect",
  tagline:
    "16-year-old builder shipping user-centered products with indie-hacker energy",
  email: "m.umer394aziz@gmail.com",
  location: "Lahore, Pakistan",
  age: 16,
  signature: "@zestymec",
} as const;

export const LIVE_STATUS =
  "⚡ Currently: Web & Mobile Dev Intern at Alkhidmat Foundation — React Native CLI, Next.js campaign UI, and organic growth at Bazaura.pk." as const;

export const TYPEWRITER_PHRASES = [
  "Muhammad Umer Aziz",
  "Associate Software Engineer @ Alkhidmat",
  "React Native CLI Architect",
  "Brand Manager @ Bazaura",
  "MERN Stack Builder",
  "Content Creator @zestymec",
  "Next.js Caching Explorer",
  "16-Year-Old Engineering Prodigy",
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
  { id: "views", label: "Breakout Video Views", value: "120", suffix: "K+", icon: "zap" },
  { id: "mobile", label: "Mobile Modules Built", value: "8", suffix: "+", icon: "mobile" },
  { id: "languages", label: "Languages Spoken", value: "4", icon: "globe" },
  { id: "stacks", label: "Tech Stacks", value: "12", suffix: "+", icon: "layers" },
  { id: "experience", label: "Years Coding", value: "4", suffix: "+", icon: "code" },
  { id: "donors", label: "Donors Served", value: "10", suffix: "K+", icon: "users" },
];

export const HUB_CARDS = [
  {
    href: "/about",
    title: "About Me",
    desc: "Languages, academics, gaming & the full human story",
  },
  {
    href: "/experience",
    title: "Experience",
    desc: "Alkhidmat Foundation, Bazaura.pk & MERN e-commerce",
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "Live GitHub repos — filter, explore, clone",
  },
  {
    href: "/beyond-bits",
    title: "Beyond Bits",
    desc: "Photography, content creation, gaming & languages",
  },
] as const;
