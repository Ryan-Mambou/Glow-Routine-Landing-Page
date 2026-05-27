import { PhoneCard } from "@/components/landing/phone-card";

export function HeroPhones() {
  return (
    <div className="pointer-events-none absolute top-1/2 right-0 hidden -translate-y-1/2 items-end lg:flex xl:right-32">
      <div className="relative mr-[-18px] w-[320px] overflow-hidden rounded-[36px] border-2 border-white/80 bg-white shadow-phone animate-float-left">
        <div className="min-h-[500px] bg-blush bg-size-[20px_20px] bg-[linear-gradient(rgba(200,120,120,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(200,120,120,0.06)_1px,transparent_1px)] px-4 py-5">
          <div className="mb-4 flex justify-between text-[10px] font-semibold">
            <span>23:03</span>
            <span>●●● 59%</span>
          </div>
          <p className="mb-1 text-[8px] font-medium tracking-[0.2em] text-coral">
            WEDNESDAY · MAY 27
          </p>
          <p className="font-display text-[22px] text-text-dark">Good evening</p>
          <p className="mb-4 text-[10px] text-text-mid">Ready to glow today?</p>

          <PhoneCard
            label="TODAY'S PROGRESS"
            title="Let's get started! ✨"
            subtitle="0 of 1 complete"
            className="bg-[linear-gradient(135deg,#F08080,#FAB060)]"
          />
          <PhoneCard
            label="MORNING ROUTINE"
            title="☀️ Nature — The Ordinary"
            subtitle="0 of 1 complete"
            className="bg-[linear-gradient(135deg,#F4A060,#F4D060)]"
          />
          <PhoneCard
            label="EVENING ROUTINE"
            title="🌙 Create your ritual"
            subtitle="No steps yet"
            className="bg-[linear-gradient(135deg,#A090D0,#D080C0)]"
          />
        </div>
      </div>

      <div className="relative z-10 w-[340px] overflow-hidden rounded-[36px] border-2 border-white/80 bg-white shadow-phone animate-float-right">
        <div className="min-h-[500px] bg-blush bg-size-[20px_20px] bg-[linear-gradient(rgba(200,120,120,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(200,120,120,0.06)_1px,transparent_1px)] px-4 py-5">
          <div className="mb-4 flex justify-between text-[10px] font-semibold">
            <span>23:03</span>
            <span>●●● 59%</span>
          </div>
          <p className="mb-1 text-[8px] font-medium tracking-[0.2em] text-coral">
            YOUR JOURNEY
          </p>
          <p className="font-display text-[22px] text-text-dark">History</p>
          <p className="mb-4 text-[10px] text-text-mid">Track your consistency</p>

          <div className="mb-2 rounded-2xl bg-[linear-gradient(135deg,#F08080,#FAB060)] p-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.08em] opacity-85">
                  CURRENT STREAK
                </p>
                <p className="text-2xl font-bold">5 🔥</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] opacity-80">Best record</p>
                <p className="text-xl font-bold">47</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-3">
            <p className="text-center text-[9px] font-semibold text-text-mid">
              May 2026
            </p>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[8px]">
              <span className="text-text-light">S</span>
              <span className="text-text-light">M</span>
              <span className="text-text-light">T</span>
              <span className="text-text-light">W</span>
              <span className="text-text-light">T</span>
              <span className="text-text-light">F</span>
              <span className="text-text-light">S</span>
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1 text-center text-[8px] text-text-mid">
              {Array.from({ length: 30 }, (_, day) => (
                <span
                  key={day}
                  className={
                    day === 12
                      ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full bg-coral text-white"
                      : day === 26
                        ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full border border-coral text-coral"
                        : "py-[2px]"
                  }
                >
                  {day + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[480px] bottom-[60px] rounded-2xl bg-white px-4 py-3 shadow-soft xl:right-[540px]">
        <p className="font-display text-2xl font-semibold text-coral">100%</p>
        <p className="text-[11px] text-text-light">Success rate</p>
      </div>
      <div className="absolute top-[40px] right-[320px] rounded-2xl bg-white px-4 py-3 shadow-soft xl:right-[320px] z-10">
        <div className="mb-1 flex gap-1">
          {Array.from({ length: 7 }, (_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${index < 5 ? "bg-coral" : "bg-rose/30"}`}
            />
          ))}
        </div>
        <p className="text-[11px] text-text-light">5-day streak</p>
      </div>
    </div>
  );
}
