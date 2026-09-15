import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
  FileText,
  Lightbulb,
  GitBranch,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { HUB_CARDS, PROFILE } from "@/data/profile";
import { FLAGSHIP_PROJECTS, CONCEPT_PROJECTS } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Muhammad Umer Aziz | Full-Stack Developer & Software Builder",
  description:
    "Portfolio of Muhammad Umer Aziz (@zestymec) — Full-Stack Developer, Frontend Developer (Contract) at Alkhidmat Foundation Pakistan, and software builder.",
  openGraph: {
    title: "Muhammad Umer Aziz | Full-Stack Developer",
    description:
      "Frontend Developer (Contract) at Alkhidmat Foundation Pakistan & Freelance Full-Stack Developer. MERN, Next.js, React Native, Python & SQL.",
  },
};

const NOW_BULLETS = [
  {
    title: "Frontend Developer (Contract) — Alkhidmat Foundation",
    description:
      "Promoted from internship to a paid contract role. Shipped the Next.js Fundraiser Platform (15+ components, AI assist) and developing cross-platform React Native apps.",
    tag: "Contract Role",
    color: "#C4F042",
  },
  {
    title: "Engineering Bazaura.pk Full-Stack Rebuild",
    description:
      "Architecting a 3-tier decoupled ecosystem: Next.js web storefront, React Native mobile app (iOS/Android), and shared Python/SQL backend with PostEx courier automation.",
    tag: "3 Repositories",
    color: "#FF75A0",
  },
  {
    title: "BS Computer Science — Virtual University of Pakistan",
    description:
      "Advancing theoretical CS, algorithm design, and system architecture concurrently with professional software engineering.",
    tag: "2026 – Present",
    color: "#6366F1",
  },
  {
    title: "Continuous Python & Machine Learning Specialization",
    description:
      "Active daily progression: 100 Days of Code Python Bootcamp (Day 21), Andrew Ng\x27s Machine Learning Specialization (~Week 2), and MLOps coursework.",
    tag: "Continuous Learning",
    color: "#C4F042",
  },
];

const CORE_SKILLS = [
  { name: "JavaScript (ES6+)", category: "Frontend & Logic" },
  { name: "TypeScript", category: "Type-Safe Architecture" },
  { name: "React.js / React 19", category: "Component Systems" },
  { name: "React Native (CLI / Hermes)", category: "iOS & Android" },
  { name: "Next.js (App Router)", category: "Full-Stack SSR & APIs" },
  { name: "Node.js & Express.js", category: "Backend Services" },
  { name: "MongoDB", category: "Document Database" },
  { name: "Python", category: "Backend & ML" },
  { name: "SQL", category: "Relational Schemas" },
  { name: "Tailwind CSS v4", category: "Modern Styling" },
  { name: "WordPress (PHP/ACF)", category: "Client Customization (2024+)" },
  { name: "PostEx APIs & Logistics", category: "E-Commerce Courier" },
];

export default function HomePage() {
  const featuredFlagships = FLAGSHIP_PROJECTS.slice(0, 3);

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Now / Currently Section */}
      <section className="relative overflow-x-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="sticker-pill sticker-pill-green mb-3 text-xs">
                Live Status & Focus
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                What I&apos;m building & pursuing right now
              </h2>
              <p className="mt-2 text-sm text-muted sm:text-base max-w-2xl">
                Real-world engineering, continuous education, and active production deliverables.
              </p>
            </div>
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF75A0] hover:text-[#C4F042] transition-colors"
            >
              Detailed Experience Timeline <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NOW_BULLETS.map((item, idx) => (
              <GlassCard key={idx} delay={idx * 0.08} className="flex flex-col justify-between">
                <div>
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold mb-3 border border-white/10"
                    style={{ color: item.color, backgroundColor: `${item.color}15` }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-foreground sm:text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Work (3 cards max linking to /projects/[slug]) */}
      <section className="relative overflow-x-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24 bg-white/[0.01]">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="sticker-pill sticker-pill-pink mb-3 text-xs">
                Flagship Engineering
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Featured Case Studies
              </h2>
              <p className="mt-2 text-sm text-muted sm:text-base max-w-2xl">
                In-depth architectural write-ups detailing the problem, technical solutions, and shipped vs. in-progress status.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C4F042] hover:underline"
            >
              Browse All 72 Repositories <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredFlagships.map((project) => (
              <GlassCard key={project.slug} className="flex flex-col justify-between h-full !p-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-muted uppercase">
                      {project.category}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                        project.status === "Shipped & Live" || project.status === "Shipped / Active"
                          ? "border-[#C4F042]/40 bg-[#C4F042]/15 text-[#C4F042]"
                          : "border-[#FF75A0]/40 bg-[#FF75A0]/15 text-[#FF75A0]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#C4F042]">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-muted border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] text-muted self-center">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C4F042] hover:underline"
                  >
                    Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground text-xs"
                      title="Live Platform"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Skills Strip */}
      <section className="relative overflow-x-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="sticker-pill sticker-pill-purple mb-3 text-xs">
              Engineering Stacks
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Core Technical Capabilities
            </h2>
            <p className="mt-2 text-sm text-muted">
              Mastered modern frontend, mobile, and backend technologies deployed across production systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {CORE_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center transition-all hover:border-[#C4F042]/30 hover:bg-[#C4F042]/5"
              >
                <span className="text-xs font-bold text-foreground">{skill.name}</span>
                <span className="mt-1 text-[10px] text-muted">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What's Next (Concepts & Future Builds) */}
      <section className="relative overflow-x-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24 bg-white/[0.01]">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="mb-10">
            <span className="sticker-pill sticker-pill-pink mb-3 text-xs">
              Future Exploration
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-[#C4F042]" />
              What&apos;s Next — Ideas & In-Development Concepts
            </h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              Transparently labeled concept-stage explorations and early-stage prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CONCEPT_PROJECTS.map((concept) => (
              <GlassCard key={concept.id} hover={false} className="border-dashed border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                      concept.status === "Concept"
                        ? "border-[#FF75A0]/40 bg-[#FF75A0]/15 text-[#FF75A0]"
                        : "border-[#6366F1]/40 bg-[#6366F1]/15 text-[#6366F1]"
                    }`}
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
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {concept.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {concept.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {concept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA / Contact Strip & Hub Links */}
      <section className="relative overflow-x-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <div className="rounded-3xl border border-[#C4F042]/30 bg-gradient-to-r from-[#14142a] to-[#0b0b1a] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C4F042]/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#FF75A0]/10 blur-3xl pointer-events-none" />

            <span className="sticker-pill sticker-pill-green mb-4 text-xs">
              Direct Access
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build something high-impact?
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base max-w-xl mx-auto">
              Open for contract engineering, full-stack product development, and remote technical roles.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/Muhammad_Umer_Aziz_CV.pdf"
                download="Muhammad_Umer_Aziz_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-[#C4F042] px-6 py-3 text-xs font-bold text-[#0B0B1A] transition-all hover:bg-[#C4F042]/90 hover:scale-105"
              >
                <FileText className="h-4 w-4" />
                Download Verified CV (PDF)
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-foreground transition-all hover:border-white/40 hover:bg-white/10"
              >
                Open Collaboration Terminal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Hub Navigation */}
          <div className="mt-16">
            <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-muted">
              Explore Portfolio Chapters
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HUB_CARDS.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group glass-card cursor-pointer rounded-3xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow sm:p-6 ${
                    i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                  }`}
                >
                  <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-[#C4F042]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted sm:text-sm">{item.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FF75A0] opacity-80 group-hover:opacity-100">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
