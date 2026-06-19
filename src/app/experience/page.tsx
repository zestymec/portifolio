import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline at Alkhidmat Foundation Pakistan and Bazaura e-commerce brand.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
