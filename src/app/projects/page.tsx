import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PROFILE } from "@/data/profile";

const ProjectsGridClient = dynamic(
  () =>
    import("@/components/sections/ProjectsGridClient").then(
      (m) => m.ProjectsGridClient
    ),
  { loading: () => <div className="min-h-[50vh] animate-pulse bg-white/[0.02]" /> }
);

export const metadata: Metadata = {
  title: "Projects",
  description: `${PROFILE.name}'s GitHub repositories — mobile architectures, MERN stack, and production clones.`,
};

export default function ProjectsPage() {
  return <ProjectsGridClient />;
}
