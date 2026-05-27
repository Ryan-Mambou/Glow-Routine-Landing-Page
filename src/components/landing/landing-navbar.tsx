export function LandingNavbar() {
  return (
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
  );
}
