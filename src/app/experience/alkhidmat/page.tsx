import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ALKHIDMAT_DETAILS } from "@/data/experience";
import { ALT, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Alkhidmat Foundation",
  description:
    "Technical contributions at Alkhidmat Foundation Pakistan — UI layers, React Native CLI modules, and donation tracking.",
};

export default function AlkhidmatPage() {
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
          eyebrow="Philanthropy Tech"
          title={ALKHIDMAT_DETAILS.title}
          description={ALKHIDMAT_DETAILS.subtitle}
        />

        <div className="relative mb-8 h-44 w-full overflow-hidden rounded-2xl sm:h-56">
          <Image
            src={IMAGES.experience.alkhidmat}
            alt={ALT.alkhidmat}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            loading="lazy"
          />
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
