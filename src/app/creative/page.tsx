import { CreativeSection } from "@/components/sections/CreativeSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Code",
  description:
    "Digital media creation, street photography, and language learning milestones.",
};

export default function CreativePage() {
  return <CreativeSection />;
}
