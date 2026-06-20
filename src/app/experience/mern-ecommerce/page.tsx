import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MERN_ARCHITECTURE } from "@/data/experience";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "MERN E-Commerce",
  description:
    "Production-grade MERN Stack e-commerce platform architecture — from API gateway to infrastructure.",
};

export default function MerEcommercePage() {
  return (
    <section className="relative overflow-x-hidden px-4 py-20 sm:py-24 md:px-6 md:py-32">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <Link
          href="/experience"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[#C4F042]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Experience
        </Link>

        <SectionHeading
          eyebrow="Production Architecture"
          title="MERN E-Commerce Platform"
          description="Mapping the current production-grade MERN Stack e-commerce project — highly optimized from scratch with full payment, inventory, and admin systems."
        />

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={IMAGES.experience.mern}
            alt={ALT.mern}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {MERN_ARCHITECTURE.map((layer, index) => (
            <GlassCard key={layer.id} delay={index * 0.08}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366F1]/10 text-sm font-bold text-[#6366F1]">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    {layer.layer}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{layer.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1 text-xs text-[#C4F042]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
