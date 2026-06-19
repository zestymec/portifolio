import type { CreativeVector, LanguageMilestone, PhotoItem } from "@/types";

export const CREATIVE_VECTORS: CreativeVector[] = [
  {
    id: "digital-media",
    title: "Digital Media & Content Creation",
    description:
      "Editing cinematic visuals for Instagram and YouTube — crafting scroll-stopping content with CapCut and VN Editor, blending motion graphics with storytelling.",
    tools: ["CapCut", "VN Editor", "Instagram", "YouTube"],
    icon: "video",
  },
  {
    id: "photography",
    title: "Street Photography",
    description:
      "Capturing urban moments with a focus on composition, light, and visual precision — turning everyday streets into compelling visual narratives.",
    tools: ["Composition", "Light & Shadow", "Urban Landscapes"],
    icon: "camera",
  },
  {
    id: "languages",
    title: "Language Learning",
    description:
      "Pursuing multilingual fluency through structured daily practice — building communication skills that bridge cultures and expand professional reach.",
    tools: ["Duolingo", "Immersion", "Daily Practice"],
    icon: "languages",
  },
];

export const LANGUAGE_MILESTONES: LanguageMilestone[] = [
  {
    id: "english",
    language: "English",
    level: "Advanced",
    streak: 80,
    proficiency: 130,
    platform: "Duolingo",
  },
  {
    id: "german",
    language: "German",
    level: "Intermediate",
    streak: 45,
    proficiency: 65,
    platform: "Duolingo",
  },
  {
    id: "japanese",
    language: "Japanese",
    level: "Beginner",
    streak: 20,
    proficiency: 25,
    platform: "Duolingo",
  },
];

export const PHOTO_GALLERY: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Urban Geometry",
    caption: "Lines and shadows in the city",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "photo-2",
    title: "Golden Hour",
    caption: "Warm light through architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "photo-3",
    title: "Street Life",
    caption: "Candid moments in motion",
    imageUrl:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "photo-4",
    title: "Night City",
    caption: "Neon reflections on wet pavement",
    imageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "photo-5",
    title: "Minimal Frame",
    caption: "Negative space and focus",
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80", // TODO: Umer - Replace with actual asset link
  },
  {
    id: "photo-6",
    title: "Perspective",
    caption: "Looking up at the skyline",
    imageUrl:
      "https://images.unsplash.com/photo-1477959857157-d9f129e818b3?w=600&q=80", // TODO: Umer - Replace with actual asset link
  },
];
