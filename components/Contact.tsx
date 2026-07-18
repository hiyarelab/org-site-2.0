"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      e.currentTarget.reset();
    }, 2600);
  }

  return (
    <section id="contact" className="pb-[130px]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mb-4 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
            Let&apos;s build something great.
          </h2>
          <p className="max-w-md text-[16.5px] leading-relaxed text-muted">
            Tell us about your business — we&apos;ll get back to you within one business day.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-[18px]">
              <label className="mb-2 block text-[13px] font-semibold">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border-[1.5px] border-ink/10 bg-surface px-4 py-3.5 text-[14.5px] focus:border-primary focus:ring-4 focus:ring-primary/12 focus:outline-none"
              />
            </div>
            <div className="mb-[18px]">
              <label className="mb-2 block text-[13px] font-semibold">Email</label>
              <input
                type="email"
                required
                placeholder="you@business.com"
                className="w-full rounded-xl border-[1.5px] border-ink/10 bg-surface px-4 py-3.5 text-[14.5px] focus:border-primary focus:ring-4 focus:ring-primary/12 focus:outline-none"
              />
            </div>
            <div className="mb-[18px]">
              <label className="mb-2 block text-[13px] font-semibold">Phone</label>
              <input
                type="tel"
                placeholder="(optional)"
                className="w-full rounded-xl border-[1.5px] border-ink/10 bg-surface px-4 py-3.5 text-[14.5px] focus:border-primary focus:ring-4 focus:ring-primary/12 focus:outline-none"
              />
            </div>
            <div className="mb-[18px]">
              <label className="mb-2 block text-[13px] font-semibold">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="w-full rounded-xl border-[1.5px] border-ink/10 bg-surface px-4 py-3.5 text-[14.5px] focus:border-primary focus:ring-4 focus:ring-primary/12 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full rounded-full bg-linear-to-br from-primary to-secondary px-7 py-3.5 text-center text-[14.5px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(22,163,74,0.55)] transition-shadow hover:shadow-[0_18px_34px_-8px_rgba(22,163,74,0.65)] disabled:opacity-80"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>

          <div>
            <div
              className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-[20px] border border-ink/8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(22,163,74,0.14), rgba(74,222,128,0.08)), repeating-linear-gradient(0deg, rgba(22,163,74,0.06) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(22,163,74,0.06) 0 1px, transparent 1px 40px)",
              }}
            >
              <div className="map-pin flex h-[52px] w-[52px] items-center justify-center rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none bg-linear-to-br from-primary to-accent shadow-md" style={{ transform: "rotate(-45deg)" }}>
                <MapPin size={20} className="text-white" style={{ transform: "rotate(45deg)" }} />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-full border border-ink/8 bg-surface px-[18px] py-3 text-[13.5px] font-medium">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={15} />
                </span>
                hello@hiyarelabs.com
              </div>
              <div className="flex items-center gap-2.5 rounded-full border border-ink/8 bg-surface px-[18px] py-3 text-[13.5px] font-medium">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone size={15} />
                </span>
                +1 (555) 019-2044
              </div>
              <button
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2.5 rounded-full border border-ink/8 bg-surface px-[18px] py-3 text-[13.5px] font-medium"
              >
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle size={15} />
                </span>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
