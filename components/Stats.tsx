"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { stats } from "@/data/content";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(target / 60, 0.5);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      setValue(Math.floor(cur));
    }, 20);
    return () => clearInterval(t);
  }, [inView, target]);

  return (
    <div ref={ref} className="stat-num text-[32px] sm:text-[40px] lg:text-[48px]">
      {value}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="pb-[120px]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter target={s.value} suffix={s.suffix} />
            <div className="mt-1.5 text-[14.5px] text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
