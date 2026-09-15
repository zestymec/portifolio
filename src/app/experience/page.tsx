import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PROFILE } from "@/data/profile";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Experience | Muhammad Umer Aziz",
  description:
    "Professional software engineering experience — Frontend Developer (Contract) at Alkhidmat Foundation Pakistan and Freelance Full-Stack Developer.",
  openGraph: {
    title: "Experience | Muhammad Umer Aziz",
    description:
      "Professional software engineering experience — Frontend Developer (Contract) at Alkhidmat Foundation Pakistan and Freelance Full-Stack Developer.",
  },
};

export default function ExperiencePage() {
  return (
    <section className="relative overflow-x-hidden px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 md:px-6 md:pt-36 md:pb-32">
      <div className="mx-auto w-full max-w-5xl min-w-0">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Experience"
          description="Proven engineering contributions spanning national philanthropy platforms, mobile development, legacy code refactoring, and freelance e-commerce ecosystems."
        />

        <div className="mt-10 space-y-6 sm:mt-12">
          {EXPERIENCE_DATA.map((item, index) => {
            const isContract = item.id === "alkhidmat-contract";
            const isIntern = item.id === "alkhidmat-intern";

            return (
              <GlassCard key={item.id} delay={index * 0.08} className="relative overflow-hidden">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        {item.company}
                      </span>
                      {isContract && (
                        <span className="rounded-full border border-[#C4F042]/40 bg-[#C4F042]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#C4F042]">
                          Current Contract Role
                        </span>
                      )}
                      {isIntern && (
                        <span className="rounded-full border border-[#6366F1]/40 bg-[#6366F1]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#6366F1]">
                          Prior Step · Promoted to Contract
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-muted sm:text-sm">
                      <span className="text-[#C4F042]">{item.period}</span> · {item.location}
                    </p>

                    <p className="mt-3.5 text-sm leading-relaxed text-muted/90 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {item.href && (
                    <Link
                      href={item.href}
                      className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#FF75A0] transition-colors hover:border-[#C4F042]/40 hover:bg-[#C4F042]/10 hover:text-[#C4F042]"
                    >
                      Case Deep Dive <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight.id}
                      className="flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {highlight.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {highlight.description}
                        </p>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1 pt-2">
                        {highlight.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-[#C4F042]/10 px-2 py-0.5 text-[10px] font-medium text-[#C4F042]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

