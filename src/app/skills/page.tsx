import { SkillsGrid } from "@/components/sections/SkillsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Full tech ecosystem — React Native, Next.js, Node.js, MongoDB, and developer tooling.",
};

export default function SkillsPage() {
  return <SkillsGrid />;
}
