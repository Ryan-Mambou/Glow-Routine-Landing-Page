"use client";

import { SectionHeading } from "@/components/landing/section-heading";
import { useLocale } from "@/i18n/locale-context";

export function HowItWorksSection() {
  const { t } = useLocale();

  return (
    <section
      id="how"
      className="bg-blush bg-size-[60px_60px] bg-[linear-gradient(rgba(200,120,120,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,120,120,0.05)_1px,transparent_1px)] px-6 py-20 sm:px-[60px] sm:py-[120px]"
    >
      <SectionHeading
        eyebrow={t.how.eyebrow}
        title={
          <>
            {t.how.titleLine1}
            <br />
            <em className="text-coral">{t.how.titleEmphasis}</em>
          </>
        }
        subtitle={t.how.subtitle}
        subtitleClassName="mb-2"
      />
      <div className="mx-auto mt-12 max-w-[900px]">
        {t.how.steps.map((step, index) => (
          <article
            key={step.title}
            className="grid gap-5 border-b border-rose/30 py-10 last:border-none sm:grid-cols-[80px_1fr] sm:gap-8"
          >
            <p className="font-display text-6xl leading-none text-rose/60">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <span className="inline-block rounded-full bg-coral px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white">
                {step.tag}
              </span>
              <h3 className="mt-3 font-display text-3xl text-text-dark">{step.title}</h3>
              <p className="mt-2 max-w-[560px] text-base leading-8 font-light text-text-mid">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
