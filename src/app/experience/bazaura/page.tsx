import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BAZAURA_DETAILS } from "@/data/experience";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bazaura Case Study",
  description:
    "Full-funnel digital operations for bazaura.pk — WooCommerce, Meta/TikTok Ads, and landing page optimization.",
};

export default function BazauraPage() {
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
          eyebrow="E-Commerce Operations"
          title={BAZAURA_DETAILS.title}
          description={BAZAURA_DETAILS.subtitle}
        />

        <div className="relative mb-8 h-44 w-full overflow-hidden rounded-2xl sm:h-56">
          <Image
            src={IMAGES.experience.bazaura}
            alt={ALT.bazaura}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            loading="lazy"
          />
        </div>

        <a
          href="https://bazaura.pk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF75A0]/30 bg-[#FF75A0]/10 px-4 py-2 text-sm text-[#FF75A0] transition-colors hover:bg-[#FF75A0]/20"
        >
          Visit bazaura.pk <ExternalLink className="h-4 w-4" />
        </a>

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
