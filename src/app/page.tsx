import { HeroSection } from "@/components/sections/HeroSection";
import { HUB_CARDS } from "@/data/profile";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="relative overflow-x-hidden px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto w-full max-w-6xl min-w-0">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Explore the{" "}
            <span className="sticker-pill sticker-pill-pink inline-block -rotate-1 text-base md:text-lg">
              good stuff
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {HUB_CARDS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group glass-card cursor-pointer rounded-3xl p-5 transition-all hover:-translate-y-1 hover:opacity-90 hover:shadow-glow sm:p-6 md:hover:rotate-1 ${
                  i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                }`}
              >
                <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-[#C4F042] sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted sm:text-sm">{item.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FF75A0] opacity-80 transition-opacity group-hover:opacity-100 sm:mt-4">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
