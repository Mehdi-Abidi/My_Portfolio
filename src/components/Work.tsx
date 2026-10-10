"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/site";
import { Gallery } from "./Gallery";
import { Reveal, SectionHeading, Tag } from "./ui";

export function Work() {
  return (
    <section id="work" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading index="01" title="Projects" />

        <ol className="border-t border-line">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <li id={`project-${p.slug}`} className="group grid scroll-mt-28 gap-5 border-b border-line py-9 md:grid-cols-[90px_1fr_1.4fr] md:gap-10">
                <span className="font-display text-3xl font-extrabold text-accent/60 transition-colors group-hover:text-accent">0{i + 1}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-display text-2xl font-bold leading-tight">{p.name}</h3>
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-ink transition-colors hover:border-accent hover:text-accent">
                        <Github size={13} /> Code
                      </a>
                    ) : null}
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-ink transition-colors hover:border-accent hover:text-accent">
                        <ArrowUpRight size={13} /> Live
                      </a>
                    ) : null}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  {p.shots?.length ? <Gallery shots={p.shots} title={p.name} /> : null}
                </div>
                <div>
                  <p className="text-base leading-relaxed text-mute">{p.long}</p>
                  {p.parts?.length ? (
                    <ul className="mt-6 space-y-4 border-t border-line pt-6">
                      {p.parts.map((part) => (
                        <li key={part.name}>
                          <div className="font-display text-sm font-semibold text-ink">{part.name}</div>
                          <p className="mt-1 text-sm leading-relaxed text-mute">{part.text}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
