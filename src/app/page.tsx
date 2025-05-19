import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Particles } from "@/components/particles";
import { PreviewSection } from "@/components/preview-section";

export default function Home() {
  return (
    <main className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Background overlay for extra darkness */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Particle background */}
      <Particles />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PreviewSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
