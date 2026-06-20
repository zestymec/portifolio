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
  title: "Experience",
  description: `${PROFILE.name}'s professional impact — Alkhidmat Foundation, Bazaura, and MERN E-Commerce architecture.`,
};

const EXP_IMAGE_MAP = {
  alkhidmat: { src: IMAGES.experience.alkhidmat, alt: ALT.alkhidmat },
  bazaura: { src: IMAGES.experience.bazaura, alt: ALT.bazaura },
  "mern-ecommerce": { src: IMAGES.experience.mern, alt: ALT.mern },
} as const;

export default function ExperiencePage() {
  return (
    <section className="relative overflow-x-hidden px-4 py-20 sm:py-24 md:px-6 md:py-32">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading
          eyebrow="Impact Directory"
          title="Professional Experience"
          description="Deep technical contributions across philanthropy tech, e-commerce brand management, and production MERN architecture."
        />

        <div className="mt-12 space-y-6">
          {EXPERIENCE_DATA.map((item, index) => {
            const image = EXP_IMAGE_MAP[item.id as keyof typeof EXP_IMAGE_MAP];
            return (
              <GlassCard key={item.id} delay={index * 0.1}>
                {image && (
                  <div className="relative mb-5 h-40 w-full overflow-hidden rounded-2xl sm:h-48">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                )}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {item.company}
                    </h3>
                    <p className="text-sm text-[#C4F042]">{item.role}</p>
                    <p className="mt-1 text-xs text-muted">
                      {item.period} · {item.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  {item.href && (
                    <Link
                      href={item.href}
                      className="inline-flex shrink-0 items-center gap-1 text-sm text-[#FF75A0] transition-colors hover:text-[#C4F042]"
                    >
                      Deep Dive <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight.id}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                    >
                      <h4 className="text-sm font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {highlight.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {highlight.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-[#C4F042]/10 px-1.5 py-0.5 text-[10px] text-[#C4F042]"
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
