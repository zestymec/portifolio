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

import { SPRING_ORGANIC } from "@/lib/motion";

import { cn } from "@/lib/utils";



function isActiveRoute(pathname: string, href: string): boolean {

  if (href === "/") return pathname === "/";

  return pathname === href || pathname.startsWith(`${href}/`);

}



export function Navbar() {

  const pathname = usePathname();

  const { openDrawer } = useConnectDrawer();

  const [mobileOpen, setMobileOpen] = useState(false);



  return (

    <>

      <motion.header

        initial={{ y: -20, opacity: 0 }}

        animate={{ y: 0, opacity: 1 }}

        transition={SPRING_ORGANIC}

        className="fixed left-0 right-0 top-0 z-40 px-4 py-3 md:px-6 md:py-4"

      >

        <nav className="glass-nav mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3">

          <Link href="/" className="group flex min-w-0 cursor-pointer items-center gap-2 hover:opacity-90">

            <div className="flex h-8 w-8 min-[320px]:h-9 min-[320px]:w-9 shrink-0 items-center justify-center rounded-xl bg-[#C4F042] font-pixel text-[8px] text-[#0B0B1A] min-[320px]:text-[9px]">

              UA

            </div>

            <div className="hidden min-w-0 sm:block">

              <span className="block truncate text-xs font-bold leading-tight text-foreground min-[400px]:text-sm">

                {PROFILE.name.split(" ").slice(-2).join(" ")}

              </span>

              <span className="block text-[10px] text-[#FF75A0] min-[400px]:text-xs">

                {PROFILE.signature}

              </span>

            </div>

          </Link>



          <div className="hidden items-center gap-0.5 lg:flex">

            {NAV_LINKS.map((link) => (

              <Link

                key={link.href}

                href={link.href}

                className={cn(

                  "relative cursor-pointer rounded-full px-2.5 py-2 text-xs font-semibold transition-colors hover:opacity-80 xl:px-3 xl:text-sm",

                  isActiveRoute(pathname, link.href)

                    ? "text-[#C4F042]"

                    : "text-muted hover:text-foreground"

                )}

              >

                {link.label}

                {isActiveRoute(pathname, link.href) && (

                  <motion.span

                    layoutId="nav-indicator"

                    className="absolute inset-0 -z-10 rounded-full bg-[#C4F042]/10"

                    transition={SPRING_ORGANIC}

                  />

                )}

              </Link>

            ))}

          </div>



          <div className="flex items-center gap-2 min-[320px]:gap-3">

            <div className="hidden md:block">

              <MagneticButton

                onClick={openDrawer}

                variant="primary"

                className="!px-3 !py-2 text-xs xl:!px-4 xl:text-sm"

              >

                Connect

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

