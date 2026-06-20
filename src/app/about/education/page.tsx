import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION_DATA } from "@/data/education";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic records — Matriculation 88% CS and FSc Pre-Engineering at Government College of Science, Lahore.",
};

export default function EducationPage() {
  return (
    <section className="relative overflow-x-hidden px-4 py-20 sm:py-24 md:px-6 md:py-32">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <Link
          href="/about"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[#C4F042]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to About
        </Link>

        <SectionHeading
          eyebrow="Academic Ledger"
          title="Education Records"
          description="Interactive cards detailing matriculation achievements and current FSc Pre-Engineering pursuit at GCS Lahore."
        />

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl md:mb-12">
          <Image
            src={IMAGES.education}
            alt={ALT.education}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A]/80 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {EDUCATION_DATA.map((record, index) => (
            <GlassCard key={record.id} delay={index * 0.1}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground">
                    {record.program}
                  </h3>
                  <p className="mt-1 text-sm text-[#C4F042]">{record.institution}</p>
                </div>
                {record.score && (
                  <span className="w-fit shrink-0 rounded-full bg-[#C4F042]/10 px-3 py-1 text-sm font-bold text-[#C4F042]">
                    {record.score}
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
                <span className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1">
                  {record.period}
                </span>
                <span className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1">
                  {record.location}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {record.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4F042]" />
                    {highlight}
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
