"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE_DATA } from "@/data/experience";
import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/utils";

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const isBrand = item.type === "brand";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="absolute left-0 top-0 flex h-full flex-col items-center md:left-1/2 md:-translate-x-1/2">
        <div
          className={cn(
            "z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-glow",
            isBrand
              ? "border-violet-500/50 bg-violet-500/10 text-violet-400"
              : "border-accent/50 bg-accent/10 text-accent"
          )}
        >
          {isBrand ? (
            <Building2 className="h-4 w-4" />
          ) : (
            <Briefcase className="h-4 w-4" />
          )}
        </div>
        <div className="hidden h-full w-px bg-gradient-to-b from-accent/30 to-transparent md:block" />
      </div>

      <div
        className={cn(
          "md:w-[calc(50%-2rem)]",
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        )}
      >
        <GlassCard hover={false} className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant={isBrand ? "accent" : "default"}>
              {isBrand ? "E-Commerce Brand" : "Full-Time"}
            </Badge>
            <span className="text-xs text-muted">{item.period}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground">{item.company}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
          <p className="mt-1 text-xs text-muted">{item.location}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {item.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {item.highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-accent/20"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {highlight.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {highlight.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {highlight.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="!text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="relative py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience & Impact"
          description="From philanthropy tech at Alkhidmat Foundation to building the Bazaura e-commerce brand — every role sharpened my engineering and creative edge."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent md:left-1/2 md:block" />

          {EXPERIENCE_DATA.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
