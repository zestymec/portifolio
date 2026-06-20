"use client";

import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { ConnectDrawerProvider } from "@/context/ConnectDrawerContext";

const StickyHireBanner = dynamic(
  () =>
    import("@/components/ui/StickyHireBanner").then((m) => m.StickyHireBanner),
  { ssr: false, loading: () => null }
);

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ConnectDrawerProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background has-hire-banner">
        <div className="bg-blueprint fixed inset-0 z-0" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10 flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <StickyHireBanner />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#14142a",
              color: "#f8fafc",
              border: "2px solid rgba(196, 240, 66, 0.25)",
            },
          }}
        />
      </div>
    </ConnectDrawerProvider>
  );
}
