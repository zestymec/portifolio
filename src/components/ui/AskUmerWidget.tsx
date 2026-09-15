"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";
import { IMAGES, ALT } from "@/lib/images";
import { SPRING_ORGANIC } from "@/lib/motion";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

const FAQ_DATABASE = [
  {
    keywords: ["working", "currently", "now", "doing", "active", "latest"],
    answer:
      "Umer is currently a Frontend Developer (Contract) at Alkhidmat Foundation Pakistan, leading the 3-repo full-stack platform rebuild for Bazaura.pk (Next.js, React Native, Python/SQL), pursuing his BSCS at Virtual University, and actively practicing daily Python/ML.",
  },
  {
    keywords: ["stack", "tech", "technologies", "languages", "skills", "tools", "frameworks"],
    answer:
      "Umer's core mastered stack includes JavaScript (ES6+), TypeScript, React, Next.js, React Native, Node.js, Express, MongoDB, and Tailwind CSS. He is actively building in Python & SQL (Bazaura.pk backend), and uses Git/GitHub, VS Code, Figma, PostEx APIs, and n8n.",
  },
  {
    keywords: ["alkhidmat", "intern", "contract", "foundation", "charity", "philanthropy"],
    answer:
      "At Alkhidmat Foundation, Umer earned a promotion from Web Dev Intern to paid Frontend Developer (Contract) in September 2026. He shipped the live Fundraiser Platform (15+ components + AI writing assistant), builds the cross-platform React Native mobile app & WebView app, and refactors legacy code under senior supervision. (alkhidmat.org is Next.js/React, not WordPress!)",
  },
  {
    keywords: ["bazaura", "ecommerce", "e-commerce", "store", "client", "freelance"],
    answer:
      "Umer is a Freelance Full-Stack Developer for Bazaura.pk (one of several clients). He is architecting a unified 3-repository platform: Next.js web storefront, React Native mobile app (iOS/Android), and shared Python/SQL backend, while also coordinating day-to-day PostEx courier logistics and Meta Ads.",
  },
  {
    keywords: ["hire", "available", "contract", "remote", "job", "opportunity", "open", "work with"],
    answer:
      "Yes! Umer is open to high-impact software engineering roles, innovative freelance projects, and international remote opportunities. You can email him directly at m.umer394aziz@gmail.com or use the Connect drawer in the navigation bar.",
  },
  {
    keywords: ["education", "degree", "university", "college", "studies", "gcs", "vu"],
    answer:
      "Umer is currently pursuing his BS in Computer Science at the Virtual University of Pakistan (2026 – Present). He previously completed his FSc Pre-Engineering at Government College of Science (GCS), Lahore (2024 – 2026), and Matriculation in Science with 88%.",
  },
  {
    keywords: ["cv", "resume", "download", "pdf"],
    answer:
      "You can download Umer's verified CV directly by clicking the 'Download CV' button on the Contact page or from the hero section on the homepage!",
  },
  {
    keywords: ["japanese", "languages", "duolingo", "streak", "polyglot", "english", "urdu"],
    answer:
      "Umer speaks native Urdu and Punjabi, has professional working proficiency in English (Duolingo 129 + preparing for IELTS), holds an active 189+ day streak in Japanese on Duolingo, and has foundational knowledge of German and Arabic.",
  },
  {
    keywords: ["views", "video", "reel", "breakout", "instagram", "content"],
    answer:
      "Umer produces cinematic visual edits blending street photography with motion design, including a breakout reel that surpassed 136K+ views!",
  },
  {
    keywords: ["contact", "email", "reach", "message", "linkedin", "github"],
    answer:
      "You can reach Umer at m.umer394aziz@gmail.com, connect on LinkedIn at linkedin.com/in/zestymec, or check out his 72 repositories and 640+ contributions on GitHub at github.com/zestymec.",
  },
];

const PROMPT_PILLS = [
  "What is he working on right now?",
  "What is his core tech stack?",
  "Tell me about his Alkhidmat role",
  "What is the Bazaura.pk platform?",
  "Is he open for hire / remote?",
  "Education & languages",
];

function findAnswer(query: string): string {
  const lower = query.toLowerCase();
  for (const item of FAQ_DATABASE) {
    if (item.keywords.some((k) => lower.includes(k))) {
      return item.answer;
    }
  }
  return "That detail isn't specifically in Umer's verified knowledge base yet! Feel free to ask about his roles, projects, tech stack, or get in touch directly at m.umer394aziz@gmail.com.";
}

export function AskUmerWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      sender: "bot",
      text: "Hi! I'm Umer's verified assistant. Ask me anything about his full-stack work, Alkhidmat contract role, Bazaura.pk, or tech stack.",
      timestamp: "Just now",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = useCallback(
    (textToSend?: string) => {
      const q = (textToSend ?? input).trim();
      if (!q) return;

      const userMsg: Message = {
        id: Date.now().toString(),
        sender: "user",
        text: q,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      const ans = findAnswer(q);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: ans,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, userMsg, botMsg]);
      setInput("");
    },
    [input]
  );

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 right-4 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#14142a]/90 text-xs text-[#C4F042] shadow-lg backdrop-blur-md transition-transform hover:scale-105"
        title="Re-open Ask about Umer"
        aria-label="Re-open Ask about Umer widget"
      >
        <Sparkles className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={SPRING_ORGANIC}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-[#C4F042]/30 bg-[#0B0B1A]/95 px-3.5 py-2 shadow-glow backdrop-blur-xl transition-all hover:border-[#C4F042] hover:scale-105"
              aria-label="Open Ask about Umer chat widget"
            >
              <div className="relative h-7 w-7 overflow-hidden rounded-full border border-[#C4F042]">
                <Image
                  src={IMAGES.avatar}
                  alt={ALT.avatar}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-[#C4F042] ring-1 ring-black" />
              </div>
              <span className="text-xs font-bold tracking-tight text-foreground group-hover:text-[#C4F042]">
                Ask about Umer
              </span>
              <Sparkles className="h-3.5 w-3.5 text-[#C4F042] animate-pulse" />
            </button>

            <button
              onClick={() => setIsDismissed(true)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:text-foreground hover:bg-white/10"
              title="Dismiss widget"
              aria-label="Dismiss widget"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={SPRING_ORGANIC}
            className="flex flex-col overflow-hidden rounded-3xl border-2 border-[#C4F042]/30 bg-[#0B0B1A]/95 shadow-2xl backdrop-blur-2xl w-[calc(100vw-2rem)] sm:w-96 max-h-[540px] h-[500px]"
            role="dialog"
            aria-label="Ask about Umer Interactive Assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#C4F042]">
                  <Image
                    src={IMAGES.avatar}
                    alt={ALT.avatar}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-foreground">Ask about Umer</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C4F042] animate-pulse" />
                  </div>
                  <span className="text-[10px] text-muted">Grounded in verified data</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-muted hover:bg-white/10 hover:text-foreground"
                  aria-label="Minimize assistant"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="rounded-lg p-1.5 text-muted hover:bg-white/10 hover:text-foreground"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Prompt Pills */}
            <div className="flex gap-1.5 overflow-x-auto p-2.5 border-b border-white/5 bg-white/[0.01] scrollbar-none">
              {PROMPT_PILLS.map((pill) => (
                <button
                  key={pill}
                  onClick={() => handleSend(pill)}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-muted hover:border-[#C4F042]/50 hover:bg-[#C4F042]/10 hover:text-[#C4F042] transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-[#C4F042] text-[#0B0B1A] font-medium rounded-tr-none"
                        : "border border-white/10 bg-white/[0.06] text-foreground/90 rounded-tl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="mt-1 text-[9px] text-muted px-1">{m.timestamp}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-white/10 bg-white/[0.02] p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about stack, role, projects..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-foreground placeholder:text-muted/60 focus:border-[#C4F042] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C4F042] text-[#0B0B1A] disabled:opacity-40 transition-opacity"
                aria-label="Send query"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
