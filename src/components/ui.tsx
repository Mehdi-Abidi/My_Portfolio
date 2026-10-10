"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, title, text }: { index: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mute">
          <span className="text-accent">{index}</span>
          <span className="h-px w-10 bg-line" />
          <span>{title}</span>
        </div>
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      </div>
      {text ? <p className="max-w-md text-base leading-relaxed text-mute">{text}</p> : null}
    </Reveal>
  );
}

export function Tag({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs ${
        active ? "border-accent text-accent" : "border-line text-mute"
      }`}
    >
      {children}
    </span>
  );
}
