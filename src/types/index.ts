export type ProjectCategory =
  | "all"
  | "mobile"
  | "web"
  | "utilities"
  | "opensource";

export type SkillCategory = "frontend" | "backend" | "devops";

export type ExperienceType = "work" | "brand" | "project";

import type { StaticImageData } from "next/image";

export type PortfolioImage = StaticImageData | string;

export type BeyondBitsTab =
  | "photography"
  | "content"
  | "gaming"
  | "languages";

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
  href?: string;
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
  imageUrl: PortfolioImage;
  featured?: boolean;
}

export interface LanguageMilestone {
  id: string;
  language: string;
  level: string;
  streak?: number;
  proficiency?: number;
  platform?: string;
  native?: boolean;
}

export interface PhotoItem {
  id: string;
  title: string;
  imageUrl: PortfolioImage;
  caption: string;
}

export interface CreativeVector {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: "video" | "camera" | "languages";
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  platform: string;
  imageUrl: PortfolioImage;
}

export interface GamingLog {
  id: string;
  game: string;
  focus: string;
  description: string;
  icon: "coc" | "pubg" | "cod" | "cricket";
}

export interface EducationRecord {
  id: string;
  institution: string;
  program: string;
  period: string;
  score?: string;
  location: string;
  highlights: string[];
}

export interface LearningTrack {
  id: string;
  title: string;
  platform: string;
  status: "active" | "completed" | "planned";
  period: string;
  topics: string[];
  progress: number;
}

export interface MerArchitectureLayer {
  id: string;
  layer: string;
  stack: string[];
  description: string;
}

export interface CollaborationFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BlueprintFormFields {
  clientName: string;
  email: string;
  brandName: string;
  budget: string;
  projectScope: string;
  technicalRequirements: string;
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
