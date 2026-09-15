import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BAZAURA_DETAILS } from "@/data/experience";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bazaura.pk & Client Operations | Muhammad Umer Aziz",
  description:
    "Freelance Full-Stack Platform Engineering & Digital Operations for Bazaura.pk and other clients — Next.js, React Native, Python/SQL, and PostEx logistics.",
  openGraph: {
    title: "Bazaura.pk & Client Operations | Muhammad Umer Aziz",
    description:
      "Freelance Full-Stack Platform Engineering & Digital Operations for Bazaura.pk and other clients — Next.js, React Native, Python/SQL, and PostEx logistics.",
  },
};

export default function BazauraPage() {
  return (
    <section className="relative overflow-x-hidden px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 md:px-6 md:pt-36 md:pb-32">
      <div className="mx-auto w-full max-w-5xl min-w-0">
        <Link
          href="/experience"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[#C4F042]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Experience
        </Link>

        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#C4F042]/40 bg-[#C4F042]/15 px-3 py-1 text-xs font-bold text-[#C4F042]">
            Freelance Full-Stack Developer
          </span>
          <span className="rounded-full border border-[#FF75A0]/40 bg-[#FF75A0]/15 px-3 py-1 text-xs font-bold text-[#FF75A0]">
            3-Repo Platform Rebuild
          </span>
        </div>

        <SectionHeading
          eyebrow="E-Commerce Architecture"
          title={BAZAURA_DETAILS.title}
          description={BAZAURA_DETAILS.subtitle}
        />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects/bazaura-platform"
            className="inline-flex items-center gap-2 rounded-full bg-[#C4F042] px-5 py-2.5 text-xs font-bold text-[#0B0B1A] transition-transform hover:scale-105"
          >
            Read Full-Stack Platform Case Study →
          </Link>
          <a
            href="https://bazaura.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF75A0]/30 bg-[#FF75A0]/10 px-4 py-2 text-xs font-semibold text-[#FF75A0] transition-colors hover:bg-[#FF75A0]/20"
          >
            Visit bazaura.pk <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {BAZAURA_DETAILS.metrics.map((metric, index) => (
            <GlassCard key={metric.label} delay={index * 0.06} className="!p-4 text-center">
              <p className="text-xs text-muted">{metric.label}</p>
              <p className="mt-1 text-sm font-bold text-foreground">{metric.value}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard hover={false} className="mt-8">
          <h3 className="text-lg font-bold text-foreground">Asset & Funnel Pipelines</h3>
          <ul className="mt-4 space-y-3">
            {BAZAURA_DETAILS.pipelines.map((pipeline) => (
              <li
                key={pipeline}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF75A0]" />
                {pipeline}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
