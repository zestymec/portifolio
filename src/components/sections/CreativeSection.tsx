"use client";

import { motion } from "framer-motion";
import { Camera, Languages, Video } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CREATIVE_VECTORS,
  LANGUAGE_MILESTONES,
  PHOTO_GALLERY,
} from "@/data/creative";
import type { CreativeVector } from "@/types";

const VECTOR_ICONS: Record<
  CreativeVector["icon"],
  React.ComponentType<{ className?: string }>
> = {
  video: Video,
  camera: Camera,
  languages: Languages,
};

export function CreativeSection() {
  return (
    <section className="relative py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Creative & Lifestyle"
          description="Engineering is my craft — but creativity, photography, and language learning fuel the perspective behind every line of code."
        />

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CREATIVE_VECTORS.map((vector, index) => {
            const Icon = VECTOR_ICONS[vector.icon];
            return (
              <GlassCard key={vector.id} delay={index * 0.1}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {vector.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {vector.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {vector.tools.map((tool) => (
                    <Badge key={tool} variant="accent">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-foreground">
            Language Milestones
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LANGUAGE_MILESTONES.map((lang, index) => (
              <GlassCard key={lang.id} delay={index * 0.1}>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {lang.language}
                    </h4>
                    <p className="text-sm text-accent">{lang.level}</p>
                  </div>
                  {lang.platform && (
                    <Badge variant="outline">{lang.platform}</Badge>
                  )}
                </div>

                <div className="mt-6 space-y-4">
                  {lang.streak !== undefined && (
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-muted">Day Streak</span>
                        <span className="font-semibold text-foreground">
                          {lang.streak}+ days
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(lang.streak, 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                        />
                      </div>
                    </div>
                  )}
                  {lang.proficiency !== undefined && (
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-muted">Proficiency XP</span>
                        <span className="font-semibold text-foreground">
                          {lang.proficiency}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${Math.min((lang.proficiency / 150) * 100, 100)}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-bold text-foreground">
            Street Photography
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {PHOTO_GALLERY.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5"
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">
                    {photo.title}
                  </p>
                  <p className="text-xs text-white/70">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
