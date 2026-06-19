"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import confetti from "canvas-confetti";
import { useConnectDrawer } from "@/context/ConnectDrawerContext";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";
import type { SocialLink } from "@/types";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  tiktok: FaTiktok,
  discord: FaDiscord,
};

function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = SOCIAL_ICONS[link.id];

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="connect-social-link group"
      style={{ "--social-color": link.color } as React.CSSProperties}
      onClick={() => {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
          colors: [link.color, "#63b3ed", "#9f7aea"],
        });
      }}
    >
      {Icon && (
        <Icon className="h-5 w-5 transition-colors group-hover:text-[var(--social-color)]" />
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">{link.name}</span>
        <span className="text-xs text-muted">{link.username}</span>
      </div>
    </motion.a>
  );
}

export function ConnectDrawer() {
  const { isOpen, closeDrawer } = useConnectDrawer();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="connect-overlay fixed inset-0 z-50"
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Connect with Muhammad Umer Aziz"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="connect-drawer fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl p-8"
          >
            <button
              onClick={closeDrawer}
              className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Close connect drawer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-secondary text-2xl font-bold text-white shadow-glow">
                {PROFILE.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {PROFILE.name}
              </h3>
              <p className="mt-1 text-sm text-muted">@{PROFILE.username}</p>
              <p className="mt-3 text-sm text-muted">
                Let&apos;s connect across platforms
              </p>
            </div>

            <div className="grid gap-3">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SocialIcon link={link} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
