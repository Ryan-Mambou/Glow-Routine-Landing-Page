import { features } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-t border-rose/15 bg-white px-6 py-20 sm:px-[60px] sm:py-[120px]"
    >
      <SectionHeading
        eyebrow="Everything you need"
        title={
          <>
            Designed for your
            <br />
            <em className="text-coral">glow-up journey</em>
          </>
        }
        subtitle="Six powerful features that work together to keep your skin on track."
      />
      <div className="mx-auto mt-16 grid max-w-[1100px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="relative overflow-hidden rounded-3xl bg-warm-white px-9 py-10 transition hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="absolute -top-10 -right-10 h-[120px] w-[120px] rounded-full bg-blush/70" />
            <div
              className={`mb-6 flex h-13 w-13 items-center justify-center rounded-2xl text-2xl ${feature.iconColorClass}`}
            >
              {feature.icon}
            </div>
            <h3 className="font-display text-[22px] text-text-dark">{feature.title}</h3>
            <p className="mt-3 text-[15px] leading-7 font-light text-text-mid">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
