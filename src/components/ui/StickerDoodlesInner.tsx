"use client";

import { motion } from "framer-motion";

interface StickerDoodlesInnerProps {
  variant?: "hero" | "page";
}

export function StickerDoodlesInner({ variant = "hero" }: StickerDoodlesInnerProps) {
  if (variant === "page") {
    return (
      <div
        className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
        aria-hidden="true"
      >
        <motion.svg
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute right-8 top-24 h-10 w-10 text-[#C4F042]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6z" />
        </motion.svg>
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      <motion.svg
        animate={{ y: [0, -8, 0], rotate: [3, 6, 3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute right-8 top-20 h-20 w-20 text-[#FF75A0]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="32" cy="32" r="28" fill="#FF75A0" stroke="#0B0B1A" />
        <circle cx="22" cy="26" r="3" fill="#0B0B1A" />
        <circle cx="42" cy="26" r="3" fill="#0B0B1A" />
        <path d="M20 40c4 6 20 6 24 0" stroke="#0B0B1A" strokeWidth="3" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-48 right-16 h-14 w-14 text-[#6366F1]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 8l24 16-10 2 4 14-6 2-4-14-10 2z" fill="#6366F1" stroke="#0B0B1A" />
      </motion.svg>
    </div>
  );
}
