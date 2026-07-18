"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number; size: number };

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    setPos({ x: x * 0.25, y: y * 0.35 });
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const size = Math.max(r.width, r.height);
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, size, x: e.clientX - r.left - size / 2, y: e.clientY - r.top - size / 2 },
    ]);
    setTimeout(() => setRipples((prev) => prev.filter((rp) => rp.id !== id)), 650);
  }

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="inline-block interactive-cursor"
    >
      <Link
        ref={ref}
        href={href}
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[14.5px] font-semibold whitespace-nowrap transition-shadow",
          variant === "primary" &&
            "bg-linear-to-br from-primary to-secondary text-white shadow-[0_12px_28px_-8px_rgba(22,163,74,0.55)] hover:shadow-[0_18px_34px_-8px_rgba(22,163,74,0.65)]",
          variant === "ghost" &&
            "border-[1.5px] border-ink/10 bg-surface text-ink hover:border-primary",
          className
        )}
      >
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple"
            style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
          />
        ))}
      </Link>
    </motion.div>
  );
}
