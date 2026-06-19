"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-surface/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary text-xs font-bold text-white">
                U
              </div>
              <span className="font-semibold text-foreground">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {PROFILE.title} crafting high-performance mobile & web experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["/experience", "/skills", "/projects", "/contact"].map(
                (href) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-muted transition-colors hover:text-accent capitalize"
                  >
                    {href.replace("/", "")}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.slice(0, 4).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">{PROFILE.email}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
        >
          <p className="text-xs text-muted">
            © {currentYear} {PROFILE.name}. Built with Next.js & Framer Motion.
          </p>
          <p className="text-xs text-muted">
            @{PROFILE.username} · {PROFILE.location}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
