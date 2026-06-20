"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useConnectDrawer } from "@/context/ConnectDrawerContext";
import { useScrollLock } from "@/hooks/useScrollLock";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";
import { ALT, IMAGES } from "@/lib/images";
import { SPRING_ORGANIC } from "@/lib/motion";
import type { SocialLink } from "@/types";

const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  email: Mail,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  pinterest: FaPinterest,
};

function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = SOCIAL_ICONS[link.id];

  return (
    <motion.a
      href={link.href}
      target={link.id === "email" ? undefined : "_blank"}
      rel={link.id === "email" ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={SPRING_ORGANIC}
      className="connect-social-link group"
      style={{ "--social-color": link.color } as React.CSSProperties}
      onClick={() => {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
          colors: [link.color, "#C4F042", "#FF75A0"],
        });
      }}
    >
      {Icon && (
        <Icon className="h-5 w-5 transition-colors group-hover:text-[var(--social-color)]" />
      )}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-foreground tracking-tighter">
          {link.name}
        </span>
        <span className="truncate text-xs text-muted">{link.username}</span>
      </div>
    </motion.a>
  );
}

export function ConnectDrawer() {
  const { isOpen, closeDrawer } = useConnectDrawer();
  useScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="connect-overlay fixed inset-0 z-50"
            onClick={closeDrawer}
            onTouchMove={(e) => e.preventDefault()}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Connect with Muhammad Umer Aziz"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={SPRING_ORGANIC}
            className="connect-drawer fixed left-1/2 top-1/2 z-[60] w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl p-6 min-[400px]:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDrawer}
              className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Close connect drawer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 text-center sm:mb-8">
              <div className="relative mx-auto mb-4 h-14 w-14 overflow-hidden rounded-2xl border-2 border-[#C4F042] sm:h-16 sm:w-16">
                <Image
                  src={IMAGES.avatar}
                  alt={ALT.avatar}
                  fill
                  className="object-cover"
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tighter min-[400px]:text-xl">
                {PROFILE.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{PROFILE.signature}</p>
              <p className="mt-3 text-sm text-muted">
                Let&apos;s connect across platforms
              </p>
            </div>

            <div className="grid gap-2 min-[400px]:gap-3">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING_ORGANIC, delay: index * 0.04 }}
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
