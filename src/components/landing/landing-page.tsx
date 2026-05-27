import {
  features,
  footerLinks,
  highlightItems,
  steps,
  testimonials,
} from "@/components/landing/landing-data";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  subtitleClassName,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  subtitleClassName?: string;
}) {
  return (
    <>
      <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-coral">
        {eyebrow}
      </p>
      <h2 className="font-display text-center text-4xl leading-[1.15] text-text-dark sm:text-5xl">
        {title}
      </h2>
      <p
        className={`mx-auto mt-4 max-w-xl text-center text-base font-light text-text-mid sm:text-lg ${subtitleClassName ?? ""}`}
      >
        {subtitle}
      </p>
    </>
  );
}

function HeroPhones() {
  return (
    <div className="pointer-events-none absolute top-1/2 right-0 hidden -translate-y-1/2 items-end lg:flex xl:right-[-20px]">
      <div className="relative mr-[-18px] w-[220px] overflow-hidden rounded-[36px] border-2 border-white/80 bg-white shadow-phone animate-float-left">
        <div className="min-h-[400px] bg-blush bg-size-[20px_20px] bg-[linear-gradient(rgba(200,120,120,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(200,120,120,0.06)_1px,transparent_1px)] px-4 py-5">
          <div className="mb-4 flex justify-between text-[10px] font-semibold">
            <span>23:03</span>
            <span>●●● 59%</span>
          </div>
          <p className="mb-1 text-[8px] font-medium tracking-[0.2em] text-coral">
            WEDNESDAY · MAY 27
          </p>
          <p className="font-display text-[22px] text-text-dark">Good evening</p>
          <p className="mb-4 text-[10px] text-text-mid">Ready to glow today?</p>

          <PhoneCard
            label="TODAY'S PROGRESS"
            title="Let's get started! ✨"
            subtitle="0 of 1 complete"
            className="bg-[linear-gradient(135deg,#F08080,#FAB060)]"
          />
          <PhoneCard
            label="MORNING ROUTINE"
            title="☀️ Nature — The Ordinary"
            subtitle="0 of 1 complete"
            className="bg-[linear-gradient(135deg,#F4A060,#F4D060)]"
          />
          <PhoneCard
            label="EVENING ROUTINE"
            title="🌙 Create your ritual"
            subtitle="No steps yet"
            className="bg-[linear-gradient(135deg,#A090D0,#D080C0)]"
          />
        </div>
      </div>

      <div className="relative z-10 w-[240px] overflow-hidden rounded-[36px] border-2 border-white/80 bg-white shadow-phone animate-float-right">
        <div className="min-h-[400px] bg-blush bg-size-[20px_20px] bg-[linear-gradient(rgba(200,120,120,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(200,120,120,0.06)_1px,transparent_1px)] px-4 py-5">
          <div className="mb-4 flex justify-between text-[10px] font-semibold">
            <span>23:03</span>
            <span>●●● 59%</span>
          </div>
          <p className="mb-1 text-[8px] font-medium tracking-[0.2em] text-coral">
            YOUR JOURNEY
          </p>
          <p className="font-display text-[22px] text-text-dark">History</p>
          <p className="mb-4 text-[10px] text-text-mid">Track your consistency</p>

          <div className="mb-2 rounded-2xl bg-[linear-gradient(135deg,#F08080,#FAB060)] p-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.08em] opacity-85">
                  CURRENT STREAK
                </p>
                <p className="text-2xl font-bold">5 🔥</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] opacity-80">Best record</p>
                <p className="text-xl font-bold">47</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-3">
            <p className="text-center text-[9px] font-semibold text-text-mid">
              May 2026
            </p>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[8px]">
              <span className="text-text-light">S</span>
              <span className="text-text-light">M</span>
              <span className="text-text-light">T</span>
              <span className="text-text-light">W</span>
              <span className="text-text-light">T</span>
              <span className="text-text-light">F</span>
              <span className="text-text-light">S</span>
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1 text-center text-[8px] text-text-mid">
              {Array.from({ length: 30 }, (_, day) => (
                <span
                  key={day}
                  className={
                    day === 12
                      ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full bg-coral text-white"
                      : day === 26
                        ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full border border-coral text-coral"
                        : "py-[2px]"
                  }
                >
                  {day + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[390px] bottom-[120px] rounded-2xl bg-white px-4 py-3 shadow-soft xl:right-[420px]">
        <p className="font-display text-2xl font-semibold text-coral">100%</p>
        <p className="text-[11px] text-text-light">Success rate</p>
      </div>
      <div className="absolute top-[130px] right-[250px] rounded-2xl bg-white px-4 py-3 shadow-soft xl:right-[260px]">
        <div className="mb-1 flex gap-1">
          {Array.from({ length: 7 }, (_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${index < 5 ? "bg-coral" : "bg-rose/30"}`}
            />
          ))}
        </div>
        <p className="text-[11px] text-text-light">5-day streak</p>
      </div>
    </div>
  );
}

function PhoneCard({
  className,
  label,
  title,
  subtitle,
}: {
  className: string;
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className={`mb-2 rounded-2xl p-3 text-white ${className}`}>
      <p className="mb-1 text-[9px] font-semibold tracking-[0.08em] opacity-85">
        {label}
      </p>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-[9px] opacity-80">{subtitle}</p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:min-h-screen lg:px-[60px] lg:pt-[120px] lg:pb-20">
      <div className="relative z-10 max-w-[560px]">
        <p className="animate-fade-up mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-coral">
          Skincare, simplified
        </p>
        <h1 className="animate-fade-up font-display text-5xl leading-[1.05] text-text-dark sm:text-7xl">
          Your skin
          <br />
          deserves a
          <br />
          <em className="text-coral">daily ritual</em>
        </h1>
        <p className="animate-fade-up mt-6 max-w-[440px] text-lg leading-8 font-light text-text-mid">
          Track your skincare products, build morning and evening routines, and
          watch your glow grow day by day.
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#F08080,#E05050)] px-8 py-4 text-[15px] font-medium text-white shadow-button transition hover:-translate-y-0.5 hover:shadow-button-hover"
          >
            Download free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-[15px] text-text-mid transition hover:text-coral"
          >
            See features
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
      <HeroPhones />
    </section>
  );
}

function HighlightStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 bg-text-dark px-6 py-[18px] sm:gap-8 sm:px-[60px]">
      {highlightItems.map((item, index) => (
        <div key={item} className="flex items-center gap-6 text-sm text-white/65">
          <p>{item}</p>
          {index < highlightItems.length - 1 ? (
            <span className="h-1 w-1 rounded-full bg-rose" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="border-t border-rose/15 bg-white px-6 py-20 sm:px-[60px] sm:py-[120px]">
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

function HowItWorksSection() {
  return (
    <section
      id="how"
      className="bg-blush bg-size-[60px_60px] bg-[linear-gradient(rgba(200,120,120,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,120,120,0.05)_1px,transparent_1px)] px-6 py-20 sm:px-[60px] sm:py-[120px]"
    >
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            Three steps to
            <br />
            <em className="text-coral">glowing skin</em>
          </>
        }
        subtitle="Getting started takes less than two minutes."
        subtitleClassName="mb-2"
      />
      <div className="mx-auto mt-12 max-w-[900px]">
        {steps.map((step, index) => (
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

function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-white px-6 py-20 sm:px-[60px] sm:py-[120px]">
      <SectionHeading
        eyebrow="Glow members"
        title={
          <>
            Loved by
            <br />
            <em className="text-coral">skincare fans</em>
          </>
        }
        subtitle="Real people, real results."
      />
      <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-3xl border border-rose/15 bg-warm-white px-7 py-8"
          >
            <p className="mb-4 text-sm tracking-[0.2em] text-coral">★★★★★</p>
            <p className="text-[15px] leading-7 font-light italic text-text-mid">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F4A0A0,#FAD4C0)] text-sm font-semibold text-white">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-text-dark">{testimonial.name}</p>
                <p className="text-xs text-text-light">{testimonial.handle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F08080_0%,#FAB070_50%,#F0A0B0_100%)] px-6 py-20 text-center sm:px-[60px] sm:py-[120px]">
      <div className="absolute inset-0 bg-size-[60px_60px] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <div className="relative z-10">
        <h2 className="font-display text-5xl leading-[1.1] text-white sm:text-6xl">
          Start your glow
          <br />
          <em className="opacity-85">journey today</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/80">
          Free to download. No subscription required to get started.
        </p>
        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex rounded-full bg-white px-8 py-4 text-[15px] font-medium text-deep-rose shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
          >
            App Store
          </a>
          <a
            href="#"
            className="inline-flex rounded-full border border-white/50 px-8 py-4 text-[15px] font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 bg-text-dark px-6 py-10 sm:px-[60px] sm:py-[60px]">
      <p className="font-display text-xl text-white">
        Glow<span className="text-rose italic">Routine</span>
      </p>
      <nav className="flex flex-wrap gap-7">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[13px] text-white/45 transition hover:text-rose"
          >
            {link}
          </a>
        ))}
      </nav>
      <p className="text-[13px] text-white/35">
        © {new Date().getFullYear()} GlowRoutine. All rights reserved.
      </p>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="grid-bg overflow-x-hidden">
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-rose/20 bg-warm-white/85 px-6 py-5 backdrop-blur-xl sm:px-[60px]">
        <p className="font-display text-[22px] tracking-[-0.3px] text-deep-rose">
          Glow<span className="text-coral italic">Routine</span>
        </p>
        <div className="hidden items-center gap-9 md:flex">
          <a className="text-sm text-text-mid transition hover:text-coral" href="#features">
            Features
          </a>
          <a className="text-sm text-text-mid transition hover:text-coral" href="#how">
            How it works
          </a>
          <a className="text-sm text-text-mid transition hover:text-coral" href="#reviews">
            Reviews
          </a>
          <a
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-deep-rose"
            href="#"
          >
            Download free
          </a>
        </div>
      </nav>

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
