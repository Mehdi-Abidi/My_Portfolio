"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/data/site";
import { ThemeToggle } from "./theme";

const links = [
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the menu item for the section currently in the middle of the screen
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const pick = () => {
      const mid = window.innerHeight * 0.4;
      let found: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) found = id;
      }
      setCurrent(found);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-bg/80 backdrop-blur-md" : "bg-transparent"}`}>
      <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-accent" style={{ scaleX: progress }} />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
          Mehdi<span className="text-accent">.</span>Abidi
        </a>

        <nav className="hidden items-center gap-7 text-sm text-mute md:flex">
          {links.map((l) => {
            const on = current === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} aria-current={on ? "true" : undefined} className={`relative py-1 transition-colors hover:text-ink ${on ? "text-ink" : ""}`}>
                {l.label}
                {on ? <motion.span layoutId="nav-dot" className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-4 rounded-full bg-accent" /> : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-md border border-accent px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white md:inline-flex"
          >
            <Download size={15} /> Download CV
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5 text-lg">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={profile.cv} download className="text-accent" onClick={() => setOpen(false)}>
              Download CV
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
