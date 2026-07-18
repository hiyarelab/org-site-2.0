"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf: number;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    }

    function tick() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(tick);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactive-cursor")) setGrow(true);
    }
    function onOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactive-cursor")) setGrow(false);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${grow ? "grow" : ""}`} />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
