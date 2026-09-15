import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ALKHIDMAT_DETAILS } from "@/data/experience";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Alkhidmat Foundation Pakistan | Muhammad Umer Aziz",
  description:
    "Engineering contributions at Alkhidmat Foundation Pakistan — Next.js Fundraiser Platform, React Native Mobile App, and alkhidmat.org web architecture.",
  openGraph: {
    title: "Alkhidmat Foundation Pakistan | Muhammad Umer Aziz",
    description:
      "Engineering contributions at Alkhidmat Foundation Pakistan — Next.js Fundraiser Platform, React Native Mobile App, and alkhidmat.org web architecture.",
  },
};

export default function AlkhidmatPage() {
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
            Frontend Developer (Contract) · Sept 2026 – Present
          </span>
          <span className="rounded-full border border-[#6366F1]/40 bg-[#6366F1]/15 px-3 py-1 text-xs font-bold text-[#6366F1]">
            Prior: Web Development Intern · Jan – Sept 2026
          </span>
        </div>

        <SectionHeading
          eyebrow="Philanthropy Engineering"
          title={ALKHIDMAT_DETAILS.title}
          description={ALKHIDMAT_DETAILS.subtitle}
        />

        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/projects/akfp-fundraiser"
            className="inline-flex items-center gap-2 rounded-full bg-[#C4F042] px-4 py-2 text-xs font-bold text-[#0B0B1A] transition-transform hover:scale-105"
          >
            Read Fundraiser Platform Case Study →
          </Link>
          <Link
            href="/projects/akfp-mobile-app"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-foreground hover:bg-white/10"
          >
            Read Mobile App Case Study →
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {ALKHIDMAT_DETAILS.contributions.map((contrib, index) => (
            <GlassCard key={contrib.area} delay={index * 0.1} hover={false}>
              <h3 className="text-lg font-bold text-foreground">{contrib.area}</h3>
              <ul className="mt-4 space-y-3">
                {contrib.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4F042]" />
                    {task}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
