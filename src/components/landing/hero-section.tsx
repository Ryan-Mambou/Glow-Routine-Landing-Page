"use client";

import { HeroPhones } from "@/components/landing/hero-phones";
import { useLocale } from "@/i18n/locale-context";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 lg:flex lg:min-h-screen lg:items-center lg:px-[60px] lg:pt-[140px] lg:pb-20">
      <div className="relative mx-auto w-full max-w-[1280px] lg:min-h-[560px]">
        <div className="relative z-10 max-w-[560px]">
          <p className="animate-fade-up mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-coral">
            {t.hero.eyebrow}
          </p>
          <h1 className="animate-fade-up font-display text-5xl leading-[1.05] text-text-dark sm:text-7xl">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            <br />
            <em className="text-coral">{t.hero.titleEmphasis}</em>
          </h1>
          <p className="animate-fade-up mt-6 max-w-[440px] text-lg leading-8 font-light text-text-mid">
            {t.hero.subtitle}
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#F08080,#E05050)] px-8 py-4 text-[15px] font-medium text-white shadow-button transition hover:-translate-y-0.5 hover:shadow-button-hover"
            >
              {t.hero.download}
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-[15px] text-text-mid transition hover:text-coral"
            >
              {t.hero.seeFeatures}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <HeroPhones />
      </div>
    </section>
  );
}
