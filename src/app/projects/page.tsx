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
  title: "Projects | Muhammad Umer Aziz",
  description:
    "Explore full-stack platforms, mobile applications, and open-source software repositories engineered by Muhammad Umer Aziz.",
  openGraph: {
    title: "Projects | Muhammad Umer Aziz",
    description:
      "Explore full-stack platforms, mobile applications, and open-source software repositories engineered by Muhammad Umer Aziz.",
  },
};

export default function ProjectsPage() {
  return <ProjectsGridClient />;
}
