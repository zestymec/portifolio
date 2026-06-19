"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Typewriter } from "@/components/ui/Typewriter";
import { useConnectDrawer } from "@/context/ConnectDrawerContext";
import { METRICS, PROFILE, TYPEWRITER_PHRASES } from "@/data/profile";
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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent"
          >
            <Sparkles className="h-4 w-4" />
            <span>Associate Software Engineer · Age {PROFILE.age}</span>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            Hi, I&apos;m{" "}
            <br className="hidden sm:block" />
            <Typewriter
              phrases={TYPEWRITER_PHRASES}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-2xl text-lg text-muted leading-relaxed md:text-xl"
          >
            {PROFILE.tagline}. Specializing in React Native architecture,
            philanthropy tech, and pixel-perfect UI engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={openDrawer}>
              Connect With Me
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {METRICS.map((metric, index) => {
            const Icon = METRIC_ICONS[metric.icon];
            return (
              <GlassCard key={metric.id} delay={index * 0.08} className="!p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    {metric.value}
                    {metric.suffix}
                  </span>
                  <span className="mt-1 text-xs text-muted">{metric.label}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
