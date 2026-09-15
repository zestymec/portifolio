"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star, Copy, ArrowRight, GitBranch, Lightbulb } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_FILTERS, CONCEPT_PROJECTS } from "@/data/projectsData";
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
      <div className="skeleton aspect-video w-full" />
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

  const handleCopyLink = useCallback((project: Project) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = project.slug
      ? `${origin}/projects/${project.slug}`
      : project.githubUrl || project.liveUrl || origin;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success(`Copied link for ${project.title}!`, {
          style: {
            background: "#14142a",
            color: "#f8fafc",
            border: "2px solid rgba(196, 240, 66, 0.3)",
          },
        });
      })
      .catch(() => {
        toast.error("Failed to copy link.");
      });
  }, []);

  return (
    <section className="relative overflow-x-hidden px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 md:px-6 md:pt-36 md:pb-32">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading
          eyebrow="Verified Repositories"
          title="Projects Showcase"
          description="Flagship full-stack case studies, open-source repositories, and native mobile applications from Muhammad Umer Aziz."
        />

        {/* Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "relative cursor-pointer rounded-xl px-3 py-2 text-xs font-medium transition-colors hover:opacity-80 min-[400px]:px-4 min-[400px]:text-sm",
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
              <span className="relative z-10 tracking-tight font-semibold">
                {filter.label}
              </span>
            </button>
          ))}
        </div>

        {/* Grid List */}
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
                  <GlassCard className="group flex h-full !flex-col !p-0 overflow-hidden">
                    <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

                      {/* Status / Featured Badges */}
                      <div className="absolute right-3 top-3 flex items-center gap-1.5">
                        {project.status && (
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px] font-bold backdrop-blur-md border",
                              project.status === "Live"
                                ? "border-[#C4F042]/40 bg-[#C4F042]/20 text-[#C4F042]"
                                : "border-[#FF75A0]/40 bg-[#FF75A0]/20 text-[#FF75A0]"
                            )}
                          >
                            {project.status}
                          </span>
                        )}
                        {project.featured && (
                          <div className="flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] text-accent backdrop-blur-sm">
                            <Star className="h-3 w-3 fill-current" />
                            Flagship
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4 min-[400px]:p-5">
                      <h3 className="text-base font-bold text-foreground tracking-tight min-[400px]:text-lg">
                        {project.title}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted min-[400px]:text-sm">
                        {project.description}
                      </p>

                      {/* Multi-Repo Badges (if 3-repo architecture) */}
                      {project.repos && project.repos.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] p-2">
                          <span className="text-[10px] font-bold text-[#C4F042] flex items-center gap-1 w-full">
                            <GitBranch className="h-3 w-3" /> 3-Repo Platform:
                          </span>
                          {project.repos.map((r) => (
                            <a
                              key={r.label}
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-muted hover:text-[#C4F042] transition-colors"
                            >
                              {r.label}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Tag list */}
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

                      {/* Card Action Footer */}
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                        <div className="flex items-center gap-3">
                          {project.slug ? (
                            <Link
                              href={`/projects/${project.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#C4F042] hover:underline"
                            >
                              Case Study <ArrowRight className="h-3 w-3" />
                            </Link>
                          ) : (
                            <>
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                                >
                                  <FaGithub className="h-3.5 w-3.5" />
                                  Source
                                </a>
                              )}
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                                >
                                  <ExternalLink className="h-3.5 w-3.5" />
                                  Live
                                </a>
                              )}
                            </>
                          )}
                        </div>

                        {/* Copy Link Button with Toast */}
                        <button
                          type="button"
                          onClick={() => handleCopyLink(project)}
                          className="inline-flex items-center gap-1 text-[11px] text-muted hover:text-foreground transition-colors p-1 rounded hover:bg-white/5"
                          title="Copy project link"
                          aria-label={`Copy link for ${project.title}`}
                        >
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </button>
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

        {/* What's Next / Concepts Section */}
        <section className="mt-20 border-t border-white/10 pt-16">
          <div className="mb-8">
            <span className="sticker-pill sticker-pill-purple mb-3 text-xs">
              Early Exploration
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-[#C4F042]" />
              Concepts & Future Builds
            </h2>
            <p className="mt-2 text-sm text-muted">
              Ideas and in-development tools explicitly labeled as concepts — never misrepresented as finished products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CONCEPT_PROJECTS.map((concept) => (
              <GlassCard key={concept.id} hover={false} className="border-dashed border-white/15">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[10px] font-bold border",
                      concept.status === "Concept"
                        ? "border-[#FF75A0]/40 bg-[#FF75A0]/15 text-[#FF75A0]"
                        : "border-[#6366F1]/40 bg-[#6366F1]/15 text-[#6366F1]"
                    )}
                  >
                    {concept.badge}
                  </span>
                  {concept.githubUrl && (
                    <a
                      href={concept.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted hover:text-foreground"
                    >
                      <FaGithub className="h-3.5 w-3.5" /> Early Repo
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground">{concept.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {concept.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {concept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
