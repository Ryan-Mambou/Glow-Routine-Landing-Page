export function CtaSection() {
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
