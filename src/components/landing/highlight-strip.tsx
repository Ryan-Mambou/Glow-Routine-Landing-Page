"use client";

import { useLocale } from "@/i18n/locale-context";

export function HighlightStrip() {
  const { t } = useLocale();

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 bg-text-dark px-6 py-[18px] sm:gap-8 sm:px-[60px]">
      {t.highlights.map((item, index) => (
        <div key={item} className="flex items-center gap-6 text-sm text-white/65">
          <p>{item}</p>
          {index < t.highlights.length - 1 ? (
            <span className="h-1 w-1 rounded-full bg-rose" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
