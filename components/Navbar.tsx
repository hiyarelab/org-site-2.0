"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[100] py-[18px] transition-all duration-300 ${
          scrolled ? "border-b border-ink/8 bg-bg/75 py-[10px] shadow-sm backdrop-blur-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link href="#home" className="flex items-center gap-2.5 font-display text-xl font-extrabold">
            <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-linear-to-br from-primary to-accent font-extrabold text-white shadow-sm">
              H
            </span>
            Hiyare Labs
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative text-[14.5px] font-medium opacity-85 hover:opacity-100"
              >
                {link}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="interactive-cursor flex h-[38px] w-[38px] items-center justify-center rounded-full border border-ink/10 bg-surface transition-transform hover:-translate-y-0.5 hover:rotate-12"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <div className="hidden sm:block">
              <Button href="#contact" className="!px-[22px] !py-3">
                Get Started
              </Button>
            </div>
            <button
              className="z-[101] flex flex-col gap-[5px] md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7 bg-bg">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium"
            >
              {link}
            </Link>
          ))}
          <Button href="#contact" className="mt-2">
            Get Started
          </Button>
        </div>
      )}
    </>
  );
}
