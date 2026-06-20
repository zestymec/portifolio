"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SPRING_ORGANIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...SPRING_ORGANIC, delay }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        "glass-card rounded-2xl p-6 transition-shadow duration-300",
        hover && "hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
