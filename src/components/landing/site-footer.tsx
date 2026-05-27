import { footerLinks } from "@/components/landing/landing-data";

export function SiteFooter() {
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
