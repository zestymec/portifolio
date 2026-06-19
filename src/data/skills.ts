import type { Skill } from "@/types";

export const SKILLS_DATA: Skill[] = [
  // Mobile & Web Frontend
  { id: "react-native", name: "React Native", category: "frontend", proficiency: 92 },
  { id: "react", name: "React.js", category: "frontend", proficiency: 90 },
  { id: "nextjs", name: "Next.js", category: "frontend", proficiency: 88 },
  { id: "typescript", name: "TypeScript", category: "frontend", proficiency: 87 },
  { id: "javascript", name: "JavaScript", category: "frontend", proficiency: 93 },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", proficiency: 91 },
  { id: "bootstrap", name: "Bootstrap", category: "frontend", proficiency: 78 },

  // Backend & Databases
  { id: "nodejs", name: "Node.js", category: "backend", proficiency: 82 },
  { id: "express", name: "Express.js", category: "backend", proficiency: 80 },
  { id: "mongodb", name: "MongoDB", category: "backend", proficiency: 75 },

  // DevOps & Tools
  { id: "git", name: "Git", category: "devops", proficiency: 88 },
  { id: "github", name: "GitHub", category: "devops", proficiency: 90 },
  { id: "android-studio", name: "Android Studio", category: "devops", proficiency: 85 },
  { id: "vscode", name: "VS Code", category: "devops", proficiency: 95 },
  { id: "mac", name: "Apple / Mac Ecosystem", category: "devops", proficiency: 88 },
];

export const SKILL_CATEGORIES = {
  frontend: {
    label: "Mobile & Web Frontend",
    description: "Crafting pixel-perfect, performant user interfaces",
    color: "from-cyan-500 to-blue-600",
  },
  backend: {
    label: "Backend & Databases",
    description: "Building scalable APIs and data layers",
    color: "from-violet-500 to-purple-600",
  },
  devops: {
    label: "DevOps & Tools",
    description: "Streamlining development workflows and tooling",
    color: "from-emerald-500 to-teal-600",
  },
} as const;
