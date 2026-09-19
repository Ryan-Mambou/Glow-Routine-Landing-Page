"use client";

import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HighlightStrip } from "@/components/landing/highlight-strip";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { SiteFooter } from "@/components/landing/site-footer";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { LocaleProvider } from "@/i18n/locale-context";

export function LandingPage() {
  return (
    <LocaleProvider>
      <div className="grid-bg">
        <LandingNavbar />

        <main className="overflow-x-hidden">
          <HeroSection />
          <HighlightStrip />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <CtaSection />
        </main>

        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}
