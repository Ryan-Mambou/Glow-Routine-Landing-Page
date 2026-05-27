import { testimonials } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";

export function TestimonialsSection() {
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
