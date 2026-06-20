"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";
import { CollaborationForm } from "@/components/contact/CollaborationForm";
import { BlueprintForm } from "@/components/contact/BlueprintForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerDoodles } from "@/components/ui/StickerDoodles";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";
import { SPRING_ORGANIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormTab = "collaboration" | "blueprint";

const CONTACT_CHANNELS = [
  { id: "email", icon: Mail, color: "text-[#C4F042]" },
  { id: "linkedin", icon: FaLinkedin, color: "text-blue-400" },
  { id: "github", icon: FaGithub, color: "text-foreground" },
  { id: "pinterest", icon: FaPinterest, color: "text-[#FF75A0]" },
  { id: "twitter", icon: FaXTwitter, color: "text-sky-400" },
] as const;

export function ContactGateway() {
  const [activeForm, setActiveForm] = useState<FormTab>("collaboration");

  return (
    <section className="relative overflow-x-hidden py-20 px-4 md:px-8 md:py-24">
      <StickerDoodles variant="page" />
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's talk ideas"
          description="Two ways to reach me — quick collaboration notes or a full vision pitch. Every message goes straight to my inbox."
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="min-w-0 space-y-4 lg:col-span-2">
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold text-foreground">Find me online</h3>
              <p className="mt-2 text-sm text-muted">
                Same handle everywhere — {PROFILE.signature}
              </p>
              <div className="mt-6 space-y-3">
                {SOCIAL_LINKS.map((link) => {
                  const channel = CONTACT_CHANNELS.find((c) => c.id === link.id);
                  const Icon = channel?.icon ?? Mail;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.id === "email" ? undefined : "_blank"}
                      rel={
                        link.id === "email" ? undefined : "noopener noreferrer"
                      }
                      className="flex items-center gap-3 rounded-2xl border-2 border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-[#C4F042]/30 hover:bg-[#C4F042]/5 sm:p-4"
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 sm:h-10 sm:w-10",
                          channel?.color
                        )}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {link.name}
                        </p>
                        <p className="truncate text-xs text-muted">
                          {link.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </GlassCard>

            <GlassCard hover={false} className="!p-4">
              <p className="text-xs leading-relaxed text-muted">
                Direct line:{" "}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="font-semibold text-[#C4F042] hover:underline"
                >
                  {PROFILE.email}
                </a>
              </p>
            </GlassCard>
          </div>

          <div className="min-w-0 space-y-4 lg:col-span-3">
            <div className="flex w-full gap-2 rounded-full border-2 border-white/8 bg-white/[0.02] p-1">
              {(
                [
                  { id: "collaboration" as const, label: "Collaborate" },
                  { id: "blueprint" as const, label: "Pitch a Vision" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveForm(tab.id)}
                  className={cn(
                    "relative min-w-0 flex-1 rounded-full px-2 py-2.5 text-xs font-bold transition-colors sm:px-3 sm:text-sm",
                    activeForm === tab.id
                      ? "text-[#0B0B1A]"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {activeForm === tab.id && (
                    <motion.span
                      layoutId="form-tab-indicator"
                      className="absolute inset-0 rounded-full bg-[#C4F042]"
                      transition={SPRING_ORGANIC}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="w-full min-w-0 max-w-full overflow-hidden px-0 md:px-2">
              <motion.div
                key={activeForm}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={SPRING_ORGANIC}
                className="w-full min-w-0"
              >
                {activeForm === "collaboration" ? (
                  <CollaborationForm />
                ) : (
                  <BlueprintForm />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
