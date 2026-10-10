"use client";

import { skills } from "@/data/site";
import { Reveal, SectionHeading } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading index="03" title="Skills" />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 2) * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-bg p-6 transition-colors duration-300 hover:border-accent">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <span className="mr-3 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-xl font-bold">{g.group}</span>
                  </div>
                  <span className="font-mono text-xs text-mute">{g.items.length} tools</span>
                </div>
                <p className="mt-1.5 pl-8 text-sm text-mute">{g.note}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3 py-1 text-[13px] text-ink transition-colors duration-300 group-hover:border-accent/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
