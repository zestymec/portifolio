"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PageTransition } from "@/components/ui/PageTransition";

interface AnimatedTemplateProps {
  children: React.ReactNode;
}

export function AnimatedTemplate({ children }: AnimatedTemplateProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={pathname}>{children}</PageTransition>
    </AnimatePresence>
  );
}
