export type ProjectCategory = "all" | "mobile" | "web" | "opensource";

export type SkillCategory = "frontend" | "backend" | "devops";

export type ExperienceType = "work" | "brand";

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  username: string;
  color: string;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  icon: "code" | "mobile" | "globe" | "zap" | "users" | "layers";
}

export interface ExperienceHighlight {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: ExperienceHighlight[];
  type: ExperienceType;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, "all">;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface LanguageMilestone {
  id: string;
  language: string;
  level: string;
  streak?: number;
  proficiency?: number;
  platform?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
}

export interface CreativeVector {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: "video" | "camera" | "languages";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
}
