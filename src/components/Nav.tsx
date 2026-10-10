"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/data/site";
import { ThemeToggle } from "./theme";

const links = [
  { label: "Graph", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-bg/80 backdrop-blur-md" : "bg-transparent"}`}>
      <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-accent" style={{ scaleX: progress }} />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
          Mehdi<span className="text-accent">.</span>Abidi
        </a>

        <nav className="hidden items-center gap-8 text-sm text-mute md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
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
