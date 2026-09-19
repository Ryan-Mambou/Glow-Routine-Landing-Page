"use client";

import { useLocale } from "@/i18n/locale-context";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="bg-text-dark px-6 py-10 sm:px-[60px] sm:py-[60px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <p className="font-display text-xl text-white">
          Glow<span className="text-rose italic">Routine</span>
        </p>
        <nav className="flex flex-wrap gap-7">
          {t.footer.links.map((link) => (
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
          © {new Date().getFullYear()} GlowRoutine. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
