import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { PROJECTS_DATA } from "@/data/projectsData";
import { fetchGitHubProjects } from "@/lib/github";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Showcase of mobile apps, web applications, and open-source projects by Muhammad Umer Aziz.",
};

export default async function ProjectsPage() {
  const githubProjects = await fetchGitHubProjects();
  const projects =
    githubProjects.length > 0 ? githubProjects : PROJECTS_DATA;

  return <ProjectsGrid projects={projects} />;
}
