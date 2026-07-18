"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <button
      aria-label="Chat on WhatsApp"
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      className="pulse-fab fixed bottom-6 left-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <MessageCircle size={26} />
    </button>
  );
}
