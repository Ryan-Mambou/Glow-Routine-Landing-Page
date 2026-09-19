"use client";

import { useLocale } from "@/i18n/locale-context";
import { locales } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const current = locales.find((item) => item.id === locale) ?? locales[0];
  const next = locale === "en" ? "fr" : "en";

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full bg-white py-1 pr-3 pl-1 text-sm font-medium text-text-dark shadow-soft transition hover:-translate-y-0.5"
      aria-label={next === "fr" ? "Switch to French" : "Passer en anglais"}
      onClick={() => setLocale(next)}
    >
      <span
        aria-hidden
        className="flex h-7 w-7 items-center justify-center rounded-full bg-blush/80 text-sm"
      >
        {current.flag}
      </span>
      {current.label}
    </button>
  );
}
