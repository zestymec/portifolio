import type { StaticImageData } from "next/image";

import avatarIcon from "@/pics/small icon image.jpeg";
import heroWorking from "@/pics/siting on table and deep in imgination.jpg";
import professionalPortrait from "@/pics/professional but very old looking into the camera.jpg";
import headphoneCreative from "@/pics/headphone n shoulder image.webp";
import mirrorSelfie from "@/pics/mobile mirror selfie.jpg";
import collegeLastDay from "@/pics/clg last day.jpg";

/** Central image registry — all local assets from src/pics */
export const IMAGES = {
  avatar: avatarIcon,
  hero: heroWorking,
  portrait: professionalPortrait,
  creative: headphoneCreative,
  lifestyle: mirrorSelfie,
  education: collegeLastDay,
  experience: {
    alkhidmat: heroWorking,
    bazaura: headphoneCreative,
    mern: heroWorking,
  },
} as const satisfies Record<string, unknown>;

export const ALT = {
  avatar: "Muhammad Umer Aziz — profile avatar for @zestymec",
  hero: "Muhammad Umer Aziz deep in thought while working at his desk — frontend engineer",
  portrait:
    "Muhammad Umer Aziz professional portrait looking into the camera — Gen-Z tech architect",
  creative:
    "Muhammad Umer Aziz creative shot with headphones — cinematic content creator vibe",
  lifestyle:
    "Muhammad Umer Aziz mirror selfie — authentic street-style lifestyle photography",
  education:
    "Muhammad Umer Aziz on college last day at GCS Lahore — academic milestone",
  alkhidmat:
    "Muhammad Umer Aziz coding at his workspace — Alkhidmat Foundation intern building React Native & Next.js",
  bazaura:
    "Muhammad Umer Aziz creative brand portrait — Bazaura.pk founder & tech lead",
  mern: "Muhammad Umer Aziz architecting MERN stack projects at his development setup",
} as const;

export type PortfolioImage = StaticImageData;

export function imageSrc(image: PortfolioImage | string): string {
  return typeof image === "string" ? image : image.src;
}

const PROJECT_COVER_POOL: Record<
  "mobile" | "web" | "utilities" | "opensource",
  string[]
> = {
  mobile: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80&fit=crop",
  ],
  web: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1547658719-da2b51116966?w=800&q=80&fit=crop",
  ],
  utilities: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1629654299529-7753a710c4e9?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&fit=crop",
  ],
  opensource: [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop",
  ],
};

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getProjectCoverImage(
  title: string,
  category: "mobile" | "web" | "utilities" | "opensource"
): string {
  const pool = PROJECT_COVER_POOL[category];
  return pool[hashString(title.toLowerCase()) % pool.length];
}
