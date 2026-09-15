import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  GitBranch,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FLAGSHIP_PROJECTS } from "@/data/projectsData";
import { GlassCard } from "@/components/ui/GlassCard";
import { StickerPill } from "@/components/ui/StickerPill";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FLAGSHIP_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = FLAGSHIP_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Muhammad Umer Aziz`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Muhammad Umer Aziz`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = FLAGSHIP_PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = FLAGSHIP_PROJECTS[projectIndex];
  const nextProject = FLAGSHIP_PROJECTS[(projectIndex + 1) % FLAGSHIP_PROJECTS.length];

  const isLive = project.status === "Shipped & Live" || project.status === "Shipped / Active";

  return (
    <article className="relative overflow-x-hidden px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 md:px-6 md:pt-36 md:pb-32">
      <div className="mx-auto w-full max-w-4xl min-w-0">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-[#C4F042]/40 hover:bg-[#C4F042]/10 hover:text-[#C4F042]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Projects
          </Link>

          <span className="text-xs text-muted">
            Case Study {projectIndex + 1} of {FLAGSHIP_PROJECTS.length}
          </span>
        </div>

        {/* Header Section */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="sticker-pill sticker-pill-green text-xs">
              {project.category.toUpperCase()}
            </span>
            <span
              className={`rounded-full px-3 py-0.5 text-xs font-bold border ${
                isLive
                  ? "border-[#C4F042]/40 bg-[#C4F042]/15 text-[#C4F042]"
                  : "border-[#FF75A0]/40 bg-[#FF75A0]/15 text-[#FF75A0]"
              }`}
            >
              {project.status}
            </span>
            <span className="text-xs text-muted font-mono">{project.period}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-[#C4F042] sm:text-xl">
            {project.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted/90 sm:text-lg">
            {project.summary}
          </p>

          {/* Action Links & Multi-Repo Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C4F042] px-5 py-2.5 text-xs font-bold text-[#0B0B1A] transition-all hover:bg-[#C4F042]/90 hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" />
                Live Platform
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-white/40 hover:bg-white/10"
              >
                <FaGithub className="h-4 w-4" />
                View GitHub Repository
              </a>
            )}
          </div>

          {/* Multi-Repo Ecosystem Grid (If multiple linked repos like Bazaura) */}
          {project.repos && project.repos.length > 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted mb-3">
                <GitBranch className="h-4 w-4 text-[#C4F042]" />
                Three Linked Repositories Architecture
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {project.repos.map((repo) => (
                  <a
                    key={repo.label}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all hover:border-[#C4F042]/40 hover:bg-[#C4F042]/5 group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#C4F042]">{repo.role}</span>
                      <p className="mt-1 text-xs font-semibold text-foreground group-hover:text-[#C4F042] transition-colors">
                        {repo.label}
                      </p>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] text-muted group-hover:text-foreground">
                      <FaGithub className="h-3 w-3" /> Inspect Repo
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Key Metrics Strip */}
        {project.metrics && (
          <section className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <GlassCard key={metric.label} hover={false} className="!p-4 text-center">
                <p className="text-xs text-muted font-medium">{metric.label}</p>
                <p className="mt-1 text-base font-bold text-foreground sm:text-lg">
                  {metric.value}
                </p>
              </GlassCard>
            ))}
          </section>
        )}

        {/* Tech Stack Badges */}
        <section className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">
            Core Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem & Context */}
        <section className="mb-12 space-y-6">
          <GlassCard hover={false} className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Layers className="h-5 w-5 text-[#6366F1]" />
              Context & Architecture
            </h2>
            <p className="text-sm leading-relaxed text-muted/90 sm:text-base">
              {project.context}
            </p>
          </GlassCard>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <GlassCard hover={false} className="border-[#FF75A0]/20">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-2 text-[#FF75A0]">
                The Challenge
              </h3>
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                {project.problem}
              </p>
            </GlassCard>

            <GlassCard hover={false} className="border-[#C4F042]/20">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-2 text-[#C4F042]">
                Engineering Solution
              </h3>
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                {project.solution}
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Key Architectural Features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#C4F042]" />
            Key Architectural Highlights
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#C4F042]">0{idx + 1}.</span>
                  <h3 className="mt-2 text-base font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Shipped vs In Progress */}
        <section className="mb-12">
          <GlassCard hover={false}>
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-[#C4F042]" />
              Engineering Status: What Shipped vs. In Progress
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#C4F042] flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="h-4 w-4" /> Completed & Shipped
                </h3>
                <ul className="space-y-2.5">
                  {project.shippedVsInProgress.shipped.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C4F042] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF75A0] flex items-center gap-1.5 mb-3">
                  <Clock className="h-4 w-4" /> Currently In Development
                </h3>
                <ul className="space-y-2.5">
                  {project.shippedVsInProgress.inProgress.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF75A0] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Next Case Study Navigation */}
        <footer className="border-t border-white/10 pt-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-xs font-semibold text-muted hover:text-foreground transition-colors"
          >
            ← View All Repositories
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C4F042] hover:underline"
          >
            Next Case Study: {nextProject.title}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </footer>
      </div>
    </article>
  );
}
