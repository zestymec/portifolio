import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StickerColor = "green" | "pink" | "purple";

interface StickerPillProps {
  children: ReactNode;
  color?: StickerColor;
  rotate?: number;
  className?: string;
}

const COLOR_CLASSES: Record<StickerColor, string> = {
  green: "sticker-pill-green",
  pink: "sticker-pill-pink",
  purple: "sticker-pill-purple",
};

export function StickerPill({
  children,
  color = "green",
  rotate = -2,
  className,
}: StickerPillProps) {
  return (
    <span
      className={cn(
        "sticker-pill inline-block text-sm sm:text-base",
        COLOR_CLASSES[color],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
