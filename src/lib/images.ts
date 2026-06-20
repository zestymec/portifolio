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
