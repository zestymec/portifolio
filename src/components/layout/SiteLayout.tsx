import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ConnectDrawerProvider } from "@/context/ConnectDrawerContext";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ConnectDrawerProvider>
      <div className="relative min-h-screen bg-background">
        <div className="bg-grid fixed inset-0 z-0" aria-hidden="true" />
        <div className="bg-glow fixed inset-0 z-0" aria-hidden="true" />
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </div>
    </ConnectDrawerProvider>
  );
}
