import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P, Space_Grotesk } from "next/font/google";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PROFILE } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${PROFILE.name} | ${PROFILE.title}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.tagline,
  keywords: [
    "Muhammad Umer Aziz",
    "zestymec",
    "React Native",
    "Associate Software Engineer",
    "Next.js",
    "Alkhidmat Foundation",
    "Bazaura",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title: `${PROFILE.name} | Portfolio`,
    description: PROFILE.tagline,
    type: "website",
  },
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
