"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_FILTERS } from "@/data/projectsData";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects Showcase"
          description="High-performance web and mobile projects — from production philanthropy apps to open-source tooling."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "relative rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter.id
                  ? "text-white"
                  : "text-muted hover:text-foreground"
              )}
            >
              {activeFilter === filter.id && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-accent-secondary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlassCard className="!p-0 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    {project.featured && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1 text-xs text-accent backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="!text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
                        >
                          <FaGithub className="h-4 w-4" />
                          Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
