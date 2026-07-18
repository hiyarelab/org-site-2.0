"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Coffee, Sparkles, Zap } from "lucide-react";

const avatarPeople = [
  { i: "MI", c: "#0369A1" },
  { i: "JB", c: "#B91C1C" },
  { i: "AT", c: "#BE185D" },
  { i: "DC", c: "#166534" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: "50%", y: "20%" });
  const [tilt, setTilt] = useState({ rx: 6, ry: -14 });

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    setGlow({ x: `${px}%`, y: `${py}%` });
    setTilt({ ry: -14 + (px - 50) * 0.14, rx: 6 - (py - 50) * 0.1 });
  }

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMove}
      className="relative overflow-hidden pt-[170px] pb-[120px]"
    >
      <div className="blob h-[420px] w-[420px] bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] top-[-140px] left-[-120px]" style={{ animationDuration: "16s" }} />
      <div className="blob h-[380px] w-[380px] bg-[radial-gradient(circle,var(--color-primary),transparent_70%)] top-[120px] right-[-140px]" style={{ animationDuration: "19s", animationDelay: "-4s" }} />
      <div className="blob h-[300px] w-[300px] bg-[radial-gradient(circle,var(--color-secondary),transparent_70%)] bottom-[-120px] left-[35%]" style={{ animationDuration: "13s", animationDelay: "-8s" }} />
      <div className="cursor-glow" style={{ ["--gx" as string]: glow.x, ["--gy" as string]: glow.y }} />

      <div className="relative z-[2] mx-auto grid max-w-6xl grid-cols-1 items-center gap-[60px] px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Eyebrow>Websites built with care</Eyebrow>
          <h1 className="mb-[22px] text-[38px] leading-[1.05] sm:text-[52px] lg:text-[64px]">
            Helping Businesses <span className="grad-text">Thrive Online.</span>
          </h1>
          <p className="mb-[34px] max-w-md text-lg leading-relaxed text-muted">
            Beautiful websites designed to grow your business with speed, performance and creativity.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <Button href="#contact">Get Started</Button>
            <Button href="#portfolio" variant="ghost">
              View Portfolio
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted">
            <div className="flex">
              {avatarPeople.map((p, i) => (
                <span
                  key={i}
                  className="-ml-2.5 flex h-[34px] w-[34px] items-center justify-center rounded-full border-[2.5px] border-bg text-[11px] font-bold text-white first:ml-0"
                  style={{ background: p.c }}
                >
                  {p.i}
                </span>
              ))}
            </div>
            <span>Trusted by 20+ local businesses</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative h-[340px] sm:h-[520px]"
        >
          <div className="absolute inset-0 top-[70px] mx-auto h-[300px] w-[92%] max-w-[460px]" style={{ perspective: "1400px" }}>
            <div
              className="relative h-full w-full transition-transform duration-200 ease-out"
              style={{ transform: `rotateY(${tilt.ry}deg) rotateX(${tilt.rx}deg)`, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl bg-linear-to-br from-dark to-[#0a3d20] p-3.5 shadow-2xl">
                <div className="mb-2 h-2 w-2/5 rounded bg-white/12" />
                <div className="mb-2 h-2 w-4/5 rounded bg-linear-to-r from-accent/70 to-transparent" />
                <div className="mb-3.5 h-2 w-3/5 rounded bg-white/12" />
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-[60px] rounded-[10px] border border-white/8 bg-white/6" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="float-card absolute top-2 left-0 flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-[13px] font-semibold shadow-md backdrop-blur-md">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-linear-to-br from-orange-500 to-orange-400 text-white">
              <Coffee size={16} />
            </span>
            Nordic Bean Coffee
          </div>
          <div
            className="float-card absolute right-[-10px] bottom-10 flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-[13px] font-semibold shadow-md backdrop-blur-md"
            style={{ animationDelay: "-1.5s" }}
          >
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-linear-to-br from-violet-500 to-violet-400 text-white">
              <Sparkles size={16} />
            </span>
            +38% conversions
          </div>
          <div
            className="float-card absolute bottom-[130px] left-[-24px] flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-[13px] font-semibold shadow-md backdrop-blur-md"
            style={{ animationDelay: "-3s" }}
          >
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-linear-to-br from-primary to-accent text-white">
              <Zap size={16} />
            </span>
            1.2s load time
          </div>
        </motion.div>
      </div>
    </section>
  );
}
