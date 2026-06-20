"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SPRING_ORGANIC } from "@/lib/motion";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={SPRING_ORGANIC}
    >
      {children}
    </motion.div>
  );
}
