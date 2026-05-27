import { HeroPhones } from "@/components/landing/hero-phones";

export function HeroSection() {
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
