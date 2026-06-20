"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StickerDoodles } from "@/components/ui/StickerDoodles";
import { StickerPill } from "@/components/ui/StickerPill";
import { DisplayMatrix } from "@/components/sections/DisplayMatrix";
import { LivePulseBanner } from "@/components/sections/LivePulseBanner";
import { useConnectDrawer } from "@/context/ConnectDrawerContext";
import { METRICS, PROFILE } from "@/data/profile";
import { SPRING_ORGANIC } from "@/lib/motion";
import type { Metric } from "@/types";

const METRIC_ICONS: Record<
  Metric["icon"],
  React.ComponentType<{ className?: string }>
> = {
  code: Code2,
  mobile: Smartphone,
  globe: Globe,
  zap: Zap,
  users: Users,
  layers: Layers,
};

export function HeroSection() {
  const { openDrawer } = useConnectDrawer();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-x-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:px-6">
      <StickerDoodles variant="hero" />

      <div className="mx-auto w-full max-w-6xl min-w-0">
        <div className="mb-6 sm:mb-8">
          <LivePulseBanner />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING_ORGANIC}
            className="min-w-0 max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...SPRING_ORGANIC, delay: 0.1 }}
              className="font-pixel mb-4 text-[9px] leading-relaxed text-[#C4F042] sm:mb-6 sm:text-xs"
            >
              portFolio.exe
            </motion.p>

            <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              I build{" "}
              <StickerPill color="green" rotate={-3} className="mx-0.5 my-1 text-xs sm:text-base">
                user-centered
              </StickerPill>{" "}
              digital products with{" "}
              <StickerPill color="pink" rotate={2} className="mx-0.5 my-1 text-xs sm:text-base">
                indie hacker
              </StickerPill>{" "}
              energy &{" "}
              <StickerPill color="purple" rotate={-1} className="mx-0.5 my-1 text-xs sm:text-base">
                Gen-Z
              </StickerPill>{" "}
              precision.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...SPRING_ORGANIC, delay: 0.3 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg"
            >
              Hey — I&apos;m{" "}
              <strong className="text-foreground">{PROFILE.name}</strong> (
              {PROFILE.signature}). A {PROFILE.age}-year-old {PROFILE.title}{" "}
              shipping React Native & Next.js at Alkhidmat Foundation, growing
              Bazaura.pk, and turning raw ideas into real products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_ORGANIC, delay: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
            >
              <MagneticButton variant="primary" onClick={openDrawer}>
                Connect
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton variant="ghost" href="/projects">
                View Projects
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none">
            <DisplayMatrix />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {METRICS.map((metric, index) => {
            const Icon = METRIC_ICONS[metric.icon];
            return (
              <GlassCard
                key={metric.id}
                delay={index * 0.06}
                className="!p-3 sm:!p-4"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-[#C4F042]/15 text-[#C4F042] sm:mb-3 sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-lg font-bold text-foreground sm:text-2xl">
                    {metric.value}
                    {metric.suffix}
                  </span>
                  <span className="mt-1 text-[10px] text-muted sm:text-xs">
                    {metric.label}
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
