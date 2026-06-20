"use client";



import { motion } from "framer-motion";

import Link from "next/link";

import { PROFILE, SOCIAL_LINKS } from "@/data/profile";

import { SPRING_ORGANIC } from "@/lib/motion";



export function Footer() {

  const currentYear = new Date().getFullYear();



  return (

    <footer className="relative z-10 border-t-2 border-white/5 bg-surface/60 backdrop-blur-xl">

      <div className="mx-auto max-w-6xl px-3 py-10 min-[320px]:px-4 min-[320px]:py-12 md:px-6">

        <div className="grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 md:grid-cols-3">

          <div>

            <div className="mb-4 flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C4F042] font-pixel text-[8px] text-[#0B0B1A]">

                UA

              </div>

              <span className="font-bold text-foreground">

                {PROFILE.name}

              </span>

            </div>

            <p className="text-sm leading-relaxed text-muted">

              {PROFILE.title} — building playful, human-centered web & mobile

              experiences at {PROFILE.signature}.

            </p>

          </div>



          <div>

            <h4 className="mb-4 text-sm font-bold text-foreground">

              Quick Links

            </h4>

            <div className="flex flex-col gap-2">

              {[

                "/about",

                "/experience",

                "/projects",

                "/beyond-bits",

                "/contact",

              ].map((href) => (

                <Link

                  key={href}

                  href={href}

                  className="cursor-pointer text-sm capitalize text-muted transition-colors hover:text-[#C4F042] hover:opacity-80"

                >

                  {href.replace("/", "").replace("-", " ")}

                </Link>

              ))}

            </div>

          </div>



          <div>

            <h4 className="mb-4 text-sm font-bold text-foreground">

              Connect

            </h4>

            <div className="flex flex-wrap gap-3">

              {SOCIAL_LINKS.slice(0, 5).map((link) => (

                <a

                  key={link.id}

                  href={link.href}

                  target={link.id === "email" ? undefined : "_blank"}

                  rel={

                    link.id === "email"

                      ? undefined

                      : "noopener noreferrer"

                  }

                  className="cursor-pointer text-sm text-muted transition-colors hover:text-[#FF75A0] hover:opacity-80"

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

          transition={SPRING_ORGANIC}

          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 min-[400px]:mt-10 min-[400px]:flex-row min-[400px]:pt-8"

        >

          <p className="text-xs text-muted">

            © {currentYear} {PROFILE.name}. Built with Next.js & Framer Motion.

          </p>

          <p className="text-xs text-muted">

            {PROFILE.signature} · {PROFILE.location}

          </p>

        </motion.div>

      </div>

    </footer>

  );

}

