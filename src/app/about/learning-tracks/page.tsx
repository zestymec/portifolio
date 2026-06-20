import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEARNING_TRACKS } from "@/data/learning";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Learning Tracks",
  description:
    "Ongoing self-education timelines — Chai aur Code React Native, Apna College JavaScript, and Next.js advanced architecture.",
};

const STATUS_STYLES = {
  active: "bg-emerald-500/10 text-emerald-400",
  completed: "bg-[#C4F042]/10 text-[#C4F042]",
  planned: "bg-white/5 text-muted",
} as const;

export default function LearningTracksPage() {
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
          eyebrow="Self-Education"
          title="Learning Tracks"
          description="Active timelines across premier community tracks — Chai aur Code, Apna College, and Sigma Web Development."
        />

        <div className="mt-12 flex flex-col gap-4 md:gap-6">
          {LEARNING_TRACKS.map((track, index) => (
            <GlassCard key={track.id} delay={index * 0.08}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-foreground sm:text-lg">
                      {track.title}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                        STATUS_STYLES[track.status]
                      )}
                    >
                      {track.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#6366F1]">{track.platform}</p>
                  <p className="mt-1 text-xs text-muted">{track.period}</p>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <span className="text-2xl font-bold text-foreground">
                    {track.progress}%
                  </span>
                  <p className="text-xs text-muted">Progress</p>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#C4F042] to-[#FF75A0]"
                  style={{ width: `${track.progress}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {track.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1 text-xs text-muted"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
