"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  BEYOND_BITS_TABS,
  CONTENT_ITEMS,
  GAMING_LOGS,
  LANGUAGE_MILESTONES,
  PHOTO_GALLERY,
} from "@/data/beyond-bits";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressArc } from "@/components/ui/ProgressArc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SPRING_ORGANIC } from "@/lib/motion";
import type { BeyondBitsTab, PortfolioImage } from "@/types";
import { cn } from "@/lib/utils";

export function BeyondBitsTabs() {
  const [activeTab, setActiveTab] = useState<BeyondBitsTab>("photography");
  const [zoomedPhoto, setZoomedPhoto] = useState<PortfolioImage | null>(null);

  return (
    <section className="relative overflow-x-hidden px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading
          eyebrow="Lifestyle Ecosystem"
          title="Beyond Bits"
          description="Photography, cinematic content, competitive gaming strategy, and linguistic milestones."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {BEYOND_BITS_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative rounded-xl px-3 py-2 text-xs font-medium min-[400px]:px-4 min-[400px]:text-sm",
                activeTab === tab.id
                  ? "text-white"
                  : "text-muted hover:text-foreground"
              )}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="beyond-tab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-accent-tertiary"
                  transition={SPRING_ORGANIC}
                />
              )}
              <span className="relative z-10 tracking-tighter">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "photography" && (
            <motion.div
              key="photography"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={SPRING_ORGANIC}
            >
              <div className="masonry-grid">
                {PHOTO_GALLERY.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...SPRING_ORGANIC, delay: index * 0.05 }}
                    className="masonry-item"
                  >
                    <button
                      onClick={() => setZoomedPhoto(photo.imageUrl)}
                      className="group relative w-full overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={photo.imageUrl}
                        alt={`${photo.title} — ${photo.caption} by Muhammad Umer Aziz`}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm font-bold text-foreground">
                          {photo.title}
                        </p>
                        <p className="text-xs text-muted">{photo.caption}</p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "content" && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={SPRING_ORGANIC}
              className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:gap-6 lg:grid-cols-3"
            >
              {CONTENT_ITEMS.map((item, index) => (
                <GlassCard key={item.id} delay={index * 0.08}>
                  <div className="relative mb-4 h-36 overflow-hidden rounded-xl">
                    <Image
                      src={item.imageUrl}
                      alt={`${item.title} — cinematic content by @zestymec`}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 480px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-base font-bold text-foreground tracking-tighter">
                    {item.title}
                  </h3>
                  {item.metric && (
                    <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      {item.metric}
                    </span>
                  )}
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                  <span className="mt-3 inline-block text-xs text-accent-secondary">
                    {item.platform}
                  </span>
                </GlassCard>
              ))}
            </motion.div>
          )}

          {activeTab === "gaming" && (
            <motion.div
              key="gaming"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={SPRING_ORGANIC}
              className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2"
            >
              {GAMING_LOGS.map((log, index) => (
                <GlassCard key={log.id} delay={index * 0.08}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-tertiary/10 text-lg">
                      {log.icon === "cricket" ? "🏏" : "🎮"}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground tracking-tighter">
                        {log.game}
                      </h3>
                      <p className="text-xs text-accent">{log.focus}</p>
                      <p className="mt-2 text-sm text-muted">
                        {log.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          )}

          {activeTab === "languages" && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={SPRING_ORGANIC}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {LANGUAGE_MILESTONES.map((lang, index) => (
                <GlassCard key={lang.id} delay={index * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    {!lang.native && lang.proficiency ? (
                      <ProgressArc
                        value={lang.proficiency}
                        size={80}
                        className="mb-3"
                      />
                    ) : (
                      <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-2xl">
                        🌐
                      </div>
                    )}
                    <h3 className="text-sm font-bold text-foreground tracking-tighter">
                      {lang.language}
                    </h3>
                    <p className="text-xs text-accent">{lang.level}</p>
                    {lang.streak && (
                      <p className="mt-2 text-xs text-muted">
                        {lang.platform} · Streak {lang.streak}
                        {lang.id === "english" ? " Score" : "+ Days"}
                      </p>
                    )}
                    {lang.native && (
                      <p className="mt-2 text-xs text-muted">Native Speaker</p>
                    )}
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {zoomedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setZoomedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={SPRING_ORGANIC}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomedPhoto}
                alt="Muhammad Umer Aziz — Photography by @zestymec"
                width={1200}
                height={800}
                loading="lazy"
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
