"use client";

import { useEffect, useState } from "react";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import type { Project } from "@/types";

export function ProjectsGridClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/github");
        if (response.ok) {
          const data: Project[] = await response.json();
          setProjects(data);
        }
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return <ProjectsGrid projects={projects} loading={loading} />;
}
