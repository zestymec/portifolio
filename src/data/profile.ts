import type { Metric, NavLink, SocialLink } from "@/types";

export const PROFILE = {
  name: "Muhammad Umer Aziz",
  username: "zestymec",
  title: "Associate Software Engineer",
  tagline: "Building high-performance mobile & web experiences",
  email: "m.umer394aziz@gmail.com",
  location: "Pakistan",
  age: 16,
} as const;

export const TYPEWRITER_PHRASES = [
  "Muhammad Umer Aziz",
  "React Native Specialist",
  "Software Engineer @ Alkhidmat Foundation",
] as const;

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Tech Stack" },
  { href: "/projects", label: "Projects" },
  { href: "/creative", label: "Beyond Code" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/zestymec",
    username: "@zestymec",
    color: "#f0f6fc",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/zestymec",
    username: "@zestymec",
    color: "#0a66c2",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/zestymec",
    username: "@zestymec",
    color: "#e1306c",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    href: "https://twitter.com/zestymec",
    username: "@zestymec",
    color: "#1da1f2",
  },
  {
    id: "tiktok",
    name: "TikTok",
    href: "https://tiktok.com/@zestymec",
    username: "@zestymec",
    color: "#ff0050",
  },
  {
    id: "discord",
    name: "Discord",
    href: "https://discord.com/users/zestymec",
    username: "@zestymec",
    color: "#5865f2",
  },
];

export const METRICS: Metric[] = [
  {
    id: "experience",
    label: "Years Coding",
    value: "4+",
    icon: "code",
  },
  {
    id: "mobile",
    label: "Mobile Apps Built",
    value: "8",
    suffix: "+",
    icon: "mobile",
  },
  {
    id: "languages",
    label: "Languages Spoken",
    value: "3",
    icon: "globe",
  },
  {
    id: "performance",
    label: "Performance Audits",
    value: "15",
    suffix: "+",
    icon: "zap",
  },
  {
    id: "donors",
    label: "Global Donors Served",
    value: "10K",
    suffix: "+",
    icon: "users",
  },
  {
    id: "stacks",
    label: "Tech Stacks",
    value: "12",
    suffix: "+",
    icon: "layers",
  },
];
