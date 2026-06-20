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
        type="button"
        onClick={onToggle}
        className={cn(
          "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 hover:opacity-80",
          isOpen ? "z-[1000]" : "z-50"
        )}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] flex min-h-[100dvh] flex-col bg-[#0B0B1A] backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 pb-4 pt-[max(1.25rem,env(safe-area-inset-top))]">
              <span className="font-pixel text-[10px] text-[#C4F042]">menu.exe</span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/10 text-foreground transition-colors hover:bg-white/15 hover:opacity-80"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto overscroll-contain px-5 pb-24 text-center">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_ORGANIC, delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block cursor-pointer rounded-xl px-4 py-3.5 text-base font-medium transition-colors hover:opacity-80 sm:text-lg",
                      pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href))
                        ? "bg-[#C4F042]/15 text-[#C4F042]"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING_ORGANIC, delay: 0.25 }}
                onClick={() => {
                  onClose();
                  onConnect();
                }}
                className="mt-8 w-full cursor-pointer rounded-full bg-[#C4F042] px-4 py-3.5 text-sm font-bold text-[#0B0B1A] shadow-glow transition-opacity hover:opacity-90"
              >
                Connect
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
