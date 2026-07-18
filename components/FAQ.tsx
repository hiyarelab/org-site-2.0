"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faqs } from "@/data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-2xl" delay={0.1}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink/8">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="interactive-cursor flex w-full items-center justify-between gap-4 py-6 text-left font-display text-[16.5px] font-semibold"
                >
                  {f.q}
                  <Plus
                    size={20}
                    className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "220px" : "0px" }}
                >
                  <p className="max-w-xl pb-6 text-[14.5px] leading-relaxed text-muted">{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
