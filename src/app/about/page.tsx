import type { Metadata } from "next";

import Link from "next/link";

import { ArrowRight, GraduationCap, BookOpen } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { StickerPill } from "@/components/ui/StickerPill";

import { PROFILE } from "@/data/profile";



export const metadata: Metadata = {

  title: "About",

  description: `Learn about ${PROFILE.name} — polyglot identity, academic foundation, and self-education tracks.`,

};



const SUB_PAGES = [

  {

    href: "/about/education",

    title: "Academic Ledger",

    desc: "Matriculation (88% CS) & FSc Pre-Engineering at GCS Lahore",

    icon: GraduationCap,

  },

  {

    href: "/about/learning-tracks",

    title: "Learning Tracks",

    desc: "Chai aur Code React Native & Apna College JavaScript structures",

    icon: BookOpen,

  },

] as const;



export default function AboutPage() {

  return (

    <section className="relative overflow-x-hidden px-4 py-20 sm:py-24 md:px-6 md:py-32">
      <div className="mx-auto w-full max-w-6xl min-w-0">

        <SectionHeading

          eyebrow="About Me"

          title="Polyglot & builder"

          description={`I'm ${PROFILE.name} (${PROFILE.signature}) — a ${PROFILE.age}-year-old ${PROFILE.title} juggling FSc Pre-Engineering at GCS Lahore with real-world engineering at Alkhidmat Foundation Pakistan.`}

        />



        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">

          <GlassCard hover={false}>

            <h3 className="text-lg font-bold text-foreground">

              Who I am

            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted">

              <li>

                <StickerPill color="green" rotate={-1} className="mr-2 text-xs">

                  Languages

                </StickerPill>

                Urdu/Punjabi (Native), English (Duolingo 130), German,

                Japanese

              </li>

              <li>

                <StickerPill color="pink" rotate={2} className="mr-2 text-xs">

                  Academics

                </StickerPill>

                FSc Pre-Engineering Part 2 at GCS Lahore (Roll 232)

              </li>

              <li>

                <StickerPill color="purple" rotate={-2} className="mr-2 text-xs">

                  Work

                </StickerPill>

                Web & Mobile Dev Intern at Alkhidmat · Founder & Tech Lead at

                Bazaura.pk

              </li>

              <li>

                <strong className="text-foreground">Also:</strong> MERN

                e-commerce architect, Next.js explorer, cinematic content

                creator (120K+ views on a breakout reel)

              </li>

            </ul>

          </GlassCard>



          <GlassCard hover={false}>

            <h3 className="text-lg font-bold text-foreground">

              Off the keyboard

            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted">

              <li>

                Competitive gamer — PUBG, Clash of Clans, Call of Duty (yes, I

                track the mechanics)

              </li>

              <li>Cricket outdoors with a strategist&apos;s field placement</li>

              <li>Street photography with lookbook-quality composition</li>

              <li>

                Instagram content via CapCut/VN cinematic editing pipelines

              </li>

            </ul>

          </GlassCard>

        </div>



        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SUB_PAGES.map((page, i) => (
            <Link
              key={page.href}
              href={page.href}
              className={`group glass-card flex items-center gap-4 rounded-3xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow sm:p-6 ${
                i === 0 ? "md:-rotate-1" : "md:rotate-1"
              }`}
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6366F1]/15 text-[#6366F1]">

                <page.icon className="h-6 w-6" />

              </div>

              <div className="min-w-0 flex-1">

                <h3 className="text-base font-bold text-foreground group-hover:text-[#C4F042] min-[400px]:text-lg">

                  {page.title}

                </h3>

                <p className="mt-1 text-xs text-muted min-[400px]:text-sm">

                  {page.desc}

                </p>

              </div>

              <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-[#FF75A0]" />

            </Link>

          ))}

        </div>

      </div>

    </section>

  );

}

