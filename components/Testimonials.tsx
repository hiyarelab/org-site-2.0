"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
            Loved by local businesses.
          </h2>
        </Reveal>

        <Reveal
          className="mx-auto max-w-2xl"
          delay={0.1}
        >
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-[600ms] ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-full p-1.5">
                  <div className="rounded-3xl border border-ink/8 bg-surface p-11 text-center shadow-sm">
                    <div className="mb-[18px] text-lg tracking-[3px] text-accent">★★★★★</div>
                    <p className="mb-[26px] font-display text-[19px] leading-relaxed font-medium">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div
                        className="flex h-[46px] w-[46px] items-center justify-center rounded-full text-[14px] font-bold text-white"
                        style={{ background: t.color }}
                      >
                        {t.initials}
                      </div>
                      <div className="text-left">
                        <div className="text-[14px] font-bold">{t.name}</div>
                        <div className="text-[12.5px] text-muted">{t.biz}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[26px] flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-2 rounded-full bg-ink/10 transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
