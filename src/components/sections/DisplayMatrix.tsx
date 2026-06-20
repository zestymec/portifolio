"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ALT, IMAGES } from "@/lib/images";
import { SPRING_ORGANIC } from "@/lib/motion";
import { PROFILE } from "@/data/profile";

export function DisplayMatrix() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
      transition={{ ...SPRING_ORGANIC, delay: 0.3 }}
      className="hero-photo-frame mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="hero-photo-inner relative aspect-[4/5] w-full sm:aspect-[3/4]">
        <Image
          src={IMAGES.hero}
          alt={ALT.hero}
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <span className="sticker-pill sticker-pill-green inline-block text-xs sm:text-sm">
            {PROFILE.signature}
          </span>
          <p className="mt-2 text-sm font-semibold text-white sm:text-base">
            {PROFILE.name}
          </p>
          <p className="text-xs text-white/70 sm:text-sm">{PROFILE.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
