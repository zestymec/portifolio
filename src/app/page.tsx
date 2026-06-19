import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="relative py-16 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/experience",
                title: "Experience",
                desc: "Alkhidmat Foundation & Bazaura",
              },
              {
                href: "/skills",
                title: "Tech Stack",
                desc: "React Native, Next.js, Node.js",
              },
              {
                href: "/projects",
                title: "Projects",
                desc: "Mobile apps, web apps & open source",
              },
              {
                href: "/creative",
                title: "Beyond Code",
                desc: "Photography, media & languages",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group glass-card rounded-2xl p-6 transition-all hover:shadow-glow hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
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
