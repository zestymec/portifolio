"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Download, CheckCircle2 } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaInstagram,
  FaXTwitter,
  FaReddit,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { CollaborationForm } from "@/components/contact/CollaborationForm";
import { BlueprintForm } from "@/components/contact/BlueprintForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerDoodles } from "@/components/ui/StickerDoodles";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";
import { SPRING_ORGANIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormTab = "collaboration" | "blueprint";

const CONTACT_CHANNELS: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  email: { icon: Mail, color: "text-[#C4F042]" },
  linkedin: { icon: FaLinkedin, color: "text-blue-400" },
  github: { icon: FaGithub, color: "text-foreground" },
  kaggle: { icon: FaKaggle, color: "text-[#20beff]" },
  instagram: { icon: FaInstagram, color: "text-[#e1306c]" },
  x: { icon: FaXTwitter, color: "text-foreground" },
  reddit: { icon: FaReddit, color: "text-[#ff4500]" },
  // TODO: Replace with real Facebook profile URL when provided by Umer
  facebook: { icon: FaFacebook, color: "text-[#1877f2]" },
  // TODO: Replace with real TikTok handle/URL when provided by Umer
  tiktok: { icon: FaTiktok, color: "text-[#fe2c55]" },
};

export function ContactGateway() {
  const [activeForm, setActiveForm] = useState<FormTab>("collaboration");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = useCallback(async () => {
    setIsDownloading(true);

    try {
      // Trigger confetti burst
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C4F042", "#FF75A0", "#6366F1"],
      });

      // Background notification
      fetch("/api/cv", { method: "GET" }).catch(() => {});

      // Direct download trigger
      const link = document.createElement("a");
      link.href = "/Muhammad_Umer_Aziz_CV.pdf";
      link.download = "Muhammad_Umer_Aziz_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Verified CV downloaded successfully!", {
        style: {
          background: "#14142a",
          color: "#f8fafc",
          border: "2px solid rgba(196, 240, 66, 0.4)",
        },
      });
    } catch {
      toast.error("Could not initiate download. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <section className="relative overflow-x-hidden px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 md:px-8 md:pt-36 md:pb-32">
      <StickerDoodles variant="page" />
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's talk ideas & roles"
          description="Open for high-impact software engineering roles, full-stack client collaborations, and technical partnerships."
          align="center"
          className="mx-auto"
        />

        {/* Dedicated Request CV Banner */}
        <div className="mb-10 mx-auto max-w-4xl">
          <GlassCard hover={false} className="border-2 border-[#C4F042]/30 bg-gradient-to-r from-[#14142a] via-[#111124] to-[#0b0b1a] !p-6 sm:!p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C4F042]/15 text-[#C4F042]">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground sm:text-xl">
                      Looking for Umer&apos;s Curriculum Vitae?
                    </h3>
                    <span className="hidden sm:inline-block rounded-full bg-[#C4F042]/20 border border-[#C4F042]/40 px-2 py-0.5 text-[10px] font-bold text-[#C4F042]">
                      Updated Sept 2026
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    Verified canonical CV matching real production work at Alkhidmat Foundation, Bazaura.pk, and academic credentials. Zero gatekeeping.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C4F042] px-6 py-3 text-xs font-bold text-[#0B0B1A] transition-all hover:bg-[#C4F042]/90 hover:scale-105 shrink-0"
              >
                <Download className="h-4 w-4" />
                {isDownloading ? "Downloading..." : "Download CV (PDF)"}
              </button>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="min-w-0 space-y-4 lg:col-span-2">
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold text-foreground">Verified Channels</h3>
              <p className="mt-2 text-sm text-muted">
                Reach out directly via email or professional developer networks:
              </p>
              <div className="mt-6 space-y-3">
                {SOCIAL_LINKS.map((link) => {
                  const channel = CONTACT_CHANNELS[link.id];
                  const Icon = channel?.icon ?? Mail;
                  const isPlaceholder = Boolean(link.isPlaceholder || link.href === "#");

                  if (isPlaceholder) {
                    return (
                      <div
                        key={link.id}
                        className="flex items-center gap-3 rounded-2xl border-2 border-white/5 bg-white/[0.01] p-3 opacity-50 sm:p-4"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-muted sm:h-10 sm:w-10">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground">
                            {link.name}{" "}
                            <span className="text-[10px] font-normal text-muted">(Pending handle)</span>
                          </p>
                          <p className="truncate text-xs text-muted">Awaiting handle</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.id === "email" ? undefined : "_blank"}
                      rel={link.id === "email" ? undefined : "noopener noreferrer"}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-white/5 bg-white/[0.02] p-3 transition-all hover:border-[#C4F042]/30 hover:bg-[#C4F042]/5 sm:p-4"
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
                Direct email inbox:{" "}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="font-semibold text-[#C4F042] transition-opacity hover:underline"
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
                    "relative min-w-0 flex-1 cursor-pointer rounded-full px-2 py-2.5 text-xs font-bold transition-colors hover:opacity-80 sm:px-3 sm:text-sm",
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
