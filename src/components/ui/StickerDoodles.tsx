"use client";

import dynamic from "next/dynamic";

const StickerDoodlesInner = dynamic(
  () =>
    import("@/components/ui/StickerDoodlesInner").then((m) => m.StickerDoodlesInner),
  { ssr: false, loading: () => null }
);

interface StickerDoodlesProps {
  variant?: "hero" | "page";
}

export function StickerDoodles(props: StickerDoodlesProps) {
  return <StickerDoodlesInner {...props} />;
}
