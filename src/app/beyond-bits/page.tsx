import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PROFILE } from "@/data/profile";

const BeyondBitsTabs = dynamic(
  () =>
    import("@/components/sections/BeyondBitsTabs").then((m) => m.BeyondBitsTabs),
  { loading: () => <div className="min-h-[40vh] animate-pulse bg-white/[0.02]" /> }
);

export const metadata: Metadata = {
  title: "Beyond Bits | Muhammad Umer Aziz",
  description:
    "Creative pursuits of Muhammad Umer Aziz — 189+ day Japanese learning streak, street photography, cinematic video production (136K+ views), and competitive gaming.",
  openGraph: {
    title: "Beyond Bits | Muhammad Umer Aziz",
    description:
      "Creative pursuits of Muhammad Umer Aziz — 189+ day Japanese learning streak, street photography, cinematic video production (136K+ views), and competitive gaming.",
  },
};

export default function BeyondBitsPage() {
  return <BeyondBitsTabs />;
}
