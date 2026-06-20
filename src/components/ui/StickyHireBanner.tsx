"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { PROFILE } from "@/data/profile";
import { ALT, IMAGES } from "@/lib/images";
import { SPRING_ORGANIC } from "@/lib/motion";

export function StickyHireBanner() {
  const handleSaveProfile = useCallback(async () => {
    const profileUrl =
      typeof window !== "undefined" ? window.location.origin : "";
    const text = `${PROFILE.name} — ${PROFILE.title}\n${profileUrl}/contact`;

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Profile link copied!", {
        style: {
          background: "#14142a",
          color: "#f8fafc",
          border: "2px solid rgba(196, 240, 66, 0.3)",
        },
      });
    } catch {
      toast.error("Could not copy — try visiting /contact directly.");
    }
  }, []);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...SPRING_ORGANIC, delay: 0.8 }}
      className="hire-banner fixed bottom-3 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl px-3 py-2 sm:bottom-4 sm:max-w-2xl sm:rounded-full sm:px-4 sm:py-2.5"
      role="complementary"
      aria-label="Hiring availability"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <div className="flex min-w-0 items-center gap-2.5 sm:flex-1">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-[#C4F042] sm:h-10 sm:w-10">
            <Image
              src={IMAGES.avatar}
              alt={ALT.avatar}
              fill
              className="object-cover"
              sizes="40px"
              loading="lazy"
            />
          </div>
          <p className="min-w-0 flex-1 text-[11px] font-medium leading-snug text-foreground sm:text-sm">
            <span className="hidden sm:inline">Umer is open for </span>
            <span className="sm:hidden">Open for </span>
            <span className="text-[#C4F042]">high-impact roles</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/contact"
            className="flex-1 cursor-pointer rounded-full bg-white px-3 py-1.5 text-center text-[11px] font-bold text-[#0B0B1A] transition-opacity hover:opacity-80 sm:flex-none sm:text-xs"
          >
            Hire Umer
          </Link>
          <button
            type="button"
            onClick={handleSaveProfile}
            className="flex-1 cursor-pointer rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-foreground transition-opacity hover:opacity-80 sm:flex-none sm:text-xs"
          >
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
}
