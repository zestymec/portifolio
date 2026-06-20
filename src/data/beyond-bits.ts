import type { ContentItem, PhotoItem } from "@/types";
import { IMAGES } from "@/lib/images";

export const BEYOND_BITS_TABS = [
  { id: "photography" as const, label: "Photography" },
  { id: "content" as const, label: "Content Engine" },
  { id: "gaming" as const, label: "Strategy Logs" },
  { id: "languages" as const, label: "Linguistic Milestones" },
];

export const CREATIVE_VECTORS = [
  {
    id: "digital-media",
    title: "Content Production Engine",
    description:
      "Highly active Instagram content producer matching street photography aesthetics with modern short-form editing layouts via CapCut and VN Editor.",
    tools: ["CapCut", "VN Editor", "Instagram", "Cinematic Editing"],
    icon: "video" as const,
  },
  {
    id: "photography",
    title: "Street Photography Gallery",
    description:
      "Capturing urban moments with composition-first framing, light precision, and lookbook-quality visual narratives.",
    tools: ["Composition", "Light & Shadow", "Urban Landscapes"],
    icon: "camera" as const,
  },
  {
    id: "languages",
    title: "Polyglot Journey",
    description:
      "Structured multilingual progression through Duolingo — bridging cultures with Urdu, English, German, and Japanese.",
    tools: ["Duolingo", "Immersion", "Daily Practice"],
    icon: "languages" as const,
  },
];

export const LANGUAGE_MILESTONES = [
  {
    id: "urdu",
    language: "Urdu / Punjabi",
    level: "Native",
    native: true,
  },
  {
    id: "english",
    language: "English",
    level: "Professional Working",
    streak: 130,
    proficiency: 130,
    platform: "Duolingo Certified",
  },
  {
    id: "german",
    language: "German",
    level: "Elementary",
    streak: 80,
    proficiency: 42,
    platform: "Duolingo — 80+ Day Streak",
  },
  {
    id: "japanese",
    language: "Japanese",
    level: "Conversational",
    streak: 35,
    proficiency: 28,
    platform: "Duolingo",
  },
];

export const PHOTO_GALLERY: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Mirror Moment",
    caption: "Street-style mirror selfie — raw & authentic",
    imageUrl: IMAGES.lifestyle,
  },
  {
    id: "photo-2",
    title: "Creative Flow",
    caption: "Headphones on, ideas flowing — cinematic vibe",
    imageUrl: IMAGES.creative,
  },
  {
    id: "photo-3",
    title: "Direct Gaze",
    caption: "Professional portrait — eyes on the lens",
    imageUrl: IMAGES.portrait,
  },
  {
    id: "photo-4",
    title: "Last Day",
    caption: "College last day at GCS Lahore — Roll 232 era",
    imageUrl: IMAGES.education,
  },
  {
    id: "photo-5",
    title: "Deep Focus",
    caption: "At the desk, lost in product imagination",
    imageUrl: IMAGES.hero,
  },
  {
    id: "photo-6",
    title: "Builder Mode",
    caption: "Workspace energy — shipping real products",
    imageUrl: IMAGES.experience.alkhidmat,
  },
];

export const CONTENT_ITEMS: ContentItem[] = [
  {
    id: "breakout-video",
    title: "Cinematic Breakout",
    description:
      "A cinematic short-form edit blending street photography aesthetics with CapCut motion graphics — achieving a massive viewership milestone.",
    metric: "120K+ Views",
    platform: "Instagram",
    imageUrl: IMAGES.creative,
  },
  {
    id: "capcut-workflow",
    title: "CapCut Workflow",
    description:
      "Multi-layer editing pipeline with color grading presets, beat-synced transitions, and typography overlays.",
    platform: "CapCut",
    imageUrl: IMAGES.lifestyle,
  },
  {
    id: "vn-editor",
    title: "VN Editor Sequences",
    description:
      "Precision-cut sequences with keyframe animations and cinematic aspect ratio framing for Instagram Reels.",
    platform: "VN Editor",
    imageUrl: IMAGES.portrait,
  },
];

export const GAMING_LOGS = [
  {
    id: "coc",
    game: "Clash of Clans",
    focus: "Base Mechanics & War Strategy",
    description:
      "Tracking troop composition meta, war attack timing, and resource optimization for competitive clan warfare.",
    icon: "coc" as const,
  },
  {
    id: "pubg",
    game: "PUBG",
    focus: "Drop Zone Analytics & Positioning",
    description:
      "Analyzing map rotations, zone predictions, and squad coordination for high-rank competitive matches.",
    icon: "pubg" as const,
  },
  {
    id: "cod",
    game: "Call of Duty",
    focus: "Loadout Optimization & Map Control",
    description:
      "Fine-tuning weapon loadouts, movement mechanics, and objective-based map control strategies.",
    icon: "cod" as const,
  },
  {
    id: "cricket",
    game: "Outdoor Cricket",
    focus: "Batting Technique & Field Placement",
    description:
      "Applying competitive gaming mindset to cricket — reading bowler patterns and optimizing field positioning.",
    icon: "cricket" as const,
  },
];
