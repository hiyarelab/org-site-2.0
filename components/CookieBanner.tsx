"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed right-6 bottom-6 left-6 z-[95] mx-auto flex max-w-lg flex-wrap items-center gap-4 rounded-2xl border border-ink/10 bg-surface p-5 shadow-xl transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-[140%]"
      }`}
    >
      <p className="min-w-[200px] flex-1 text-[13.5px] text-muted">
        We use cookies to improve your experience on our site. By continuing, you agree to our use of cookies.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="rounded-full bg-linear-to-br from-primary to-secondary px-5 py-2.5 text-[13px] font-semibold text-white"
      >
        Accept
      </button>
    </div>
  );
}
