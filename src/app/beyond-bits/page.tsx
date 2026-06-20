import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PROFILE } from "@/data/profile";

const BeyondBitsTabs = dynamic(
  () =>
    import("@/components/sections/BeyondBitsTabs").then((m) => m.BeyondBitsTabs),
  { loading: () => <div className="min-h-[40vh] animate-pulse bg-white/[0.02]" /> }
);

export const metadata: Metadata = {
  title: "Beyond Bits",
  description: `${PROFILE.signature}'s lifestyle ecosystem — photography, content creation, gaming, and languages.`,
};

export default function BeyondBitsPage() {
  return <BeyondBitsTabs />;
}
