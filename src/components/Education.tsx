"use client";

import { Award, BadgeCheck, BookOpen, GraduationCap, Users } from "lucide-react";
import { certifications, education, leadership } from "@/data/site";
import { Reveal, SectionHeading } from "./ui";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10">
      <SectionHeading index="04" title="Education" />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* degree */}
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-soft blur-3xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
              <GraduationCap size={24} />
            </div>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">{education.period}</div>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight">{education.degree}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-mute">
              <span>{education.school}</span>
              <span className="rounded-full border border-accent/50 px-2.5 py-0.5 font-mono text-xs text-accent">CGPA {education.cgpa}</span>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-mute">
                <Award size={14} className="text-accent" /> Honours
              </div>
              <ul className="space-y-3">
                {education.honors.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-[11px] h-px w-4 shrink-0 bg-accent" />
                    <span className="font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-mute">
                <BookOpen size={14} className="text-accent" /> Relevant coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-full border border-line bg-bg px-3 py-1 text-[13px] text-ink">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {/* certifications */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-mute">
                <BadgeCheck size={14} className="text-accent" /> Certifications
              </div>
              <ul className="divide-y divide-line">
                {certifications.map((c) => {
                  const [name, issuer] = c.split(", ");
                  return (
                    <li key={c} className="flex items-baseline justify-between gap-4 py-2.5">
                      <span className="text-sm font-medium">{name}</span>
                      <span className="shrink-0 text-xs text-mute">{issuer}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* leadership */}
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-mute">
                <Users size={14} className="text-accent" /> Leadership
              </div>
              <ul className="space-y-4">
                {leadership.map((l) => (
                  <li key={l.org}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-semibold">
                        {l.role} <span className="font-normal text-mute">·</span> <span className="text-accent">{l.org}</span>
                      </span>
                      <span className="shrink-0 font-mono text-xs text-mute">{l.period}</span>
                    </div>
                    {l.text ? <p className="mt-1 text-sm text-mute">{l.text}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
