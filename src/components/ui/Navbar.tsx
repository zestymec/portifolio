"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ConnectDrawer } from "@/components/ui/ConnectDrawer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MobileNav } from "@/components/ui/MobileNav";
import { useConnectDrawer } from "@/context/ConnectDrawerContext";
import { NAV_LINKS, PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { openDrawer } = useConnectDrawer();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-6"
      >
        <nav className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary text-sm font-bold text-white">
              U
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-semibold text-foreground leading-tight">
                {PROFILE.name.split(" ").slice(-2).join(" ")}
              </span>
              <span className="block text-xs text-muted">@{PROFILE.username}</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 -z-10 rounded-lg bg-accent/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <MagneticButton onClick={openDrawer} className="!px-4 !py-2 text-sm">
                Connect With Me
              </MagneticButton>
            </div>
            <MobileNav
              isOpen={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
              onClose={() => setMobileOpen(false)}
              onConnect={openDrawer}
            />
          </div>
        </nav>
      </motion.header>
      <ConnectDrawer />
    </>
  );
}
