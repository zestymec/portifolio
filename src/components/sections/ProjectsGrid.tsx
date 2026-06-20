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
import { SPRING_ORGANIC } from "@/lib/motion";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: Project[];
  loading?: boolean;
}

function ProjectSkeleton() {
  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <div className="skeleton h-48 w-full" />
      <div className="space-y-3 p-5">
        <div className="skeleton h-5 w-3/4 rounded-lg" />
        <div className="skeleton h-4 w-full rounded-lg" />
        <div className="skeleton h-4 w-5/6 rounded-lg" />
        <div className="flex gap-2">
          <div className="skeleton h-5 w-16 rounded-full" />
          <div className="skeleton h-5 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsGrid({ projects, loading = false }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative overflow-x-hidden px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading
          eyebrow="Source Code Grid"
          title="Projects Showcase"
          description="Authentic repositories from GitHub — filtered by architecture type with premium skeleton loading."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "relative rounded-xl px-3 py-2 text-xs font-medium transition-colors min-[400px]:px-4 min-[400px]:text-sm",
                activeFilter === filter.id
                  ? "text-[#0B0B1A]"
                  : "text-muted hover:text-foreground"
              )}
            >
              {activeFilter === filter.id && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-xl bg-[#C4F042]"
                  transition={SPRING_ORGANIC}
                />
              )}
              <span className="relative z-10 tracking-tighter">
                {filter.label}
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-4 min-[480px]:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 min-[480px]:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ ...SPRING_ORGANIC, delay: index * 0.04 }}
                >
                  <GlassCard className="flex h-full !flex-col !p-0 overflow-hidden">
                    <div className="relative h-40 min-[400px]:h-48 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 480px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                      {project.featured && (
                        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1 text-xs text-accent backdrop-blur-sm">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-4 min-[400px]:p-5">
                      <h3 className="text-base font-bold text-foreground tracking-tighter min-[400px]:text-lg">
                        {project.title}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted min-[400px]:text-sm">
                        {project.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="!text-[10px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center gap-3 border-t border-white/5 pt-3 min-[400px]:mt-4 min-[400px]:pt-4">
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
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted">
            No repositories match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
