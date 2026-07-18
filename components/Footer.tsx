"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Camera, Globe } from "lucide-react";

const quickLinks = ["Home", "Portfolio", "Process", "Pricing", "FAQ"];
const serviceLinks = ["Website Design", "E-Commerce", "SEO Optimization", "Maintenance"];
const socials = [
  { icon: Camera, label: "Instagram" },
  { icon: Globe, label: "Facebook" },
  { icon: BriefcaseBusiness, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-8 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="#home" className="flex items-center gap-2.5 font-display text-xl font-extrabold">
              <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-linear-to-br from-primary to-accent font-extrabold text-white">
                H
              </span>
              Hiyare Labs
            </Link>
            <p className="my-4 max-w-[280px] text-[14.5px] leading-relaxed text-white/60">
              A digital studio built with heart and care, helping local businesses establish a
              powerful online presence.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-5 text-[14px] tracking-wide text-white/55 uppercase">Quick Links</h5>
            {quickLinks.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block py-1.5 text-[14.5px] text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-accent"
              >
                {l}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-5 text-[14px] tracking-wide text-white/55 uppercase">Services</h5>
            {serviceLinks.map((l) => (
              <Link
                key={l}
                href="#services"
                className="block py-1.5 text-[14.5px] text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-accent"
              >
                {l}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-5 text-[14px] tracking-wide text-white/55 uppercase">Stay Updated</h5>
            <p className="mb-3 text-[14.5px] leading-relaxed text-white/60">
              Tips on getting more customers online, once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-full border border-white/15"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-[18px] py-3.5 text-[14px] text-white outline-none placeholder:text-white/40"
              />
              <button type="submit" aria-label="Subscribe" className="flex items-center bg-primary px-5">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-[26px] text-[13.5px] text-white/50">
          <span>© {new Date().getFullYear()} Hiyare Labs. All rights reserved.</span>
          <span>Designed &amp; built with care.</span>
        </div>
      </div>
    </footer>
  );
}
