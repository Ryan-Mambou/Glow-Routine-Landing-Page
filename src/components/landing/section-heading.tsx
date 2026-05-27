import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  subtitleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  subtitleClassName,
}: SectionHeadingProps) {
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
