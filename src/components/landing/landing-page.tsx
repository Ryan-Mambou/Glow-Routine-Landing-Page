import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HighlightStrip } from "@/components/landing/highlight-strip";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { SiteFooter } from "@/components/landing/site-footer";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export function LandingPage() {
  return (
    <div className="grid-bg overflow-x-hidden">
      <LandingNavbar />

      <main>
        <HeroSection />
        <HighlightStrip />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
