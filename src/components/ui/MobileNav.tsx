"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { NAV_LINKS } from "@/data/profile";
import { SPRING_ORGANIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onConnect: () => void;
}

export function MobileNav({
  isOpen,
  onToggle,
  onClose,
  onConnect,
}: MobileNavProps) {
  const pathname = usePathname();
  useScrollLock(isOpen);

  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={SPRING_ORGANIC}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={SPRING_ORGANIC}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={onClose}
              onTouchMove={(e) => e.preventDefault()}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={SPRING_ORGANIC}
              className="glass-nav fixed right-0 top-0 z-40 flex h-full w-[min(280px,88vw)] flex-col items-stretch p-5 pt-20 sm:w-[min(300px,85vw)] sm:p-6 sm:pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-1 text-center">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...SPRING_ORGANIC, delay: index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors sm:text-base",
                        pathname === link.href ||
                          (link.href !== "/" && pathname.startsWith(link.href))
                          ? "bg-[#C4F042]/10 text-[#C4F042]"
                          : "text-muted hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING_ORGANIC, delay: 0.25 }}
                onClick={() => {
                  onClose();
                  onConnect();
                }}
                className="mt-6 w-full rounded-full bg-[#C4F042] px-4 py-3 text-sm font-bold text-[#0B0B1A] shadow-glow"
              >
                Connect
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
