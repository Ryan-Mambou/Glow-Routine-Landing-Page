"use client";

import { useState } from "react";
import { LanguageSwitcher } from "@/components/landing/language-switcher";
import { useLocale } from "@/i18n/locale-context";

export function LandingNavbar() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#how", label: t.nav.how },
    { href: "#reviews", label: t.nav.reviews },
  ];

  return (
    <header className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-[1100px] items-center gap-2">
        <a
          href="#"
          className="shrink-0 rounded-full bg-white px-5 py-3 font-display text-[20px] tracking-[-0.3px] text-deep-rose shadow-soft"
        >
          Glow<span className="text-coral italic">Routine</span>
        </a>

        <div className="relative flex min-w-0 flex-1 items-center rounded-full bg-[#e8ddd8] px-2 py-2 shadow-soft">
          <nav className="hidden items-center gap-8 px-5 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium tracking-[0.08em] text-text-dark uppercase transition hover:text-coral"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="#"
              className="hidden rounded-full bg-text-dark px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-deep-rose sm:inline-flex"
            >
              {t.nav.download}
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-dark shadow-soft md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="sr-only">
                {menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              </span>
              <span aria-hidden className="flex flex-col gap-1.5">
                <span
                  className={`block h-[1.5px] w-4 bg-text-dark transition ${
                    menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 bg-text-dark transition ${
                    menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <nav className="absolute top-[calc(100%+10px)] right-0 left-0 z-50 rounded-3xl bg-white p-4 shadow-soft md:hidden">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-3 py-3 text-sm font-medium text-text-dark transition hover:bg-blush"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 flex items-center justify-center rounded-full bg-text-dark px-5 py-3 text-sm font-medium text-white sm:hidden"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.download}
              </a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
