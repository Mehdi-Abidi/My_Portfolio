"use client";

import Image from "next/image";
import { certifications, education, experience, skills } from "@/data/site";
import { Reveal, SectionHeading, Tag } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionHeading index="02" title="Experience" />

      <ol className="relative border-l border-line pl-8 md:pl-12">
        {experience.map((e, i) => (
          <Reveal key={e.period} delay={i * 0.06} className="mb-14 last:mb-0">
            <li className="relative">
              <span className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-bg md:-left-[57px] ${i === 0 ? "bg-accent shadow-[0_0_14px_var(--accent)]" : "bg-mute"}`} />
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{e.period}</div>
              <div className="mt-3 flex items-start gap-4">
                {/* company logo: icons sit on a white tile so they read in both themes */}
                <a
                  href={e.site}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${e.company} website`}
                  className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-line shadow-sm transition-transform hover:-translate-y-0.5 ${e.logoFill ? "" : "bg-white p-1.5"}`}
                >
                  <Image src={e.logo} alt={`${e.company} logo`} fill={e.logoFill} width={e.logoFill ? undefined : 36} height={e.logoFill ? undefined : 36} sizes="48px" className={e.logoFill ? "object-cover" : "h-full w-full object-contain"} />
                </a>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    {e.role} <span className="text-mute">at</span>{" "}
                    <a href={e.site} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      {e.company}
                    </a>
                  </h3>
                  <div className="mt-1 text-sm text-mute">{e.where}</div>
                </div>
              </div>
              <p className="mt-4 max-w-3xl leading-relaxed text-mute">{e.text}</p>
              {e.highlights?.length ? (
                <ul className="mt-4 max-w-3xl space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-mute">
                      <span className="mt-[11px] h-px w-4 shrink-0 bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-24 grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-mute">Skills</div>
          <div className="space-y-5">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-3 border-t border-line pt-5 md:grid-cols-[180px_1fr]">
                <div className="font-display font-semibold">{g.group}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-mute">Education</div>
          <div className="border-t border-line pt-5">
            <div className="font-display text-xl font-bold">{education.degree}</div>
            <div className="mt-1 text-sm text-mute">
              {education.school} · {education.period}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-mute">
              {education.honors.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 mt-12 font-mono text-xs uppercase tracking-[0.3em] text-mute">Certifications</div>
          <ul className="space-y-2 border-t border-line pt-5 text-sm text-mute">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
