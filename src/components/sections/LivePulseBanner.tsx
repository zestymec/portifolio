"use client";

import { motion } from "framer-motion";
import { SPRING_ORGANIC } from "@/lib/motion";
import { LIVE_STATUS } from "@/data/profile";

export function LivePulseBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_ORGANIC}
      className="live-pulse relative z-10 mx-auto w-full max-w-[90vw] overflow-hidden rounded-2xl px-3 py-2.5 sm:max-w-6xl sm:px-4 sm:py-3"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-2.5 sm:items-center sm:gap-3">
        <span className="live-pulse-dot mt-1 shrink-0 sm:mt-0 h-2 w-2 rounded-full bg-[#C4F042] sm:h-2.5 sm:w-2.5" />
        <p className="min-w-0 break-words text-xs leading-relaxed text-foreground/90 sm:text-sm">
          {LIVE_STATUS}
        </p>
      </div>
    </motion.div>
  );
}
