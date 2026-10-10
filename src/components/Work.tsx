"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/site";
import { Gallery } from "./Gallery";
import { Reveal, SectionHeading, Tag } from "./ui";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-ink transition-colors hover:border-accent hover:text-accent";

// One project, laid out as before: title, links and tags, screenshots under
// them, and the description in the right column.
function Slide({ p, i }: { p: Project; i: number }) {
  return (
    <div className="grid gap-5 md:grid-cols-[90px_1fr_1.4fr] md:gap-x-10 md:gap-y-0">
      <span className="font-display text-3xl font-extrabold text-accent md:row-span-2">{String(i + 1).padStart(2, "0")}</span>
      <div className="md:col-start-2 md:row-start-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="font-display text-2xl font-bold leading-tight">{p.name}</h3>
          {p.github ? (
            <a href={p.github} target="_blank" rel="noreferrer" className={linkClass}>
              <Github size={13} /> Code
            </a>
          ) : null}
          {p.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={linkClass}>
              <Github size={13} /> {l.label}
            </a>
          ))}
          {p.live ? (
            <a href={p.live} target="_blank" rel="noreferrer" className={linkClass}>
              <ArrowUpRight size={13} /> Live
            </a>
          ) : null}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
      {p.shots?.length ? (
        <div className="md:col-start-2 md:row-start-2">
          <Gallery shots={p.shots} title={p.name} />
        </div>
      ) : null}
      {/* textBesideShots: start the description level with the screenshots, not the title */}
      <div className={p.textBesideShots ? "md:col-start-3 md:row-start-2 md:mt-6" : "md:col-start-3 md:row-start-1 md:row-span-2"}>
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
    </div>
  );
}

export function Work() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const n = projects.length;

  const go = useCallback((next: number) => {
    setState(([cur]) => {
      const target = (next + n) % n;
      return [target, target > cur || (cur === n - 1 && target === 0) ? 1 : -1];
    });
  }, [n]);

  // Graph nodes dispatch "open-project" (and a direct #project-<slug> URL works too):
  // switch to that slide, then scroll the section into view once the swap has started.
  useEffect(() => {
    const openSlug = (slug: string) => {
      const i = projects.findIndex((p) => p.slug === slug);
      if (i < 0) return;
      go(i);
      window.setTimeout(() => {
        const el = sectionRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      }, 60);
    };
    const fromHash = () => {
      const m = window.location.hash.match(/^#project-(.+)$/);
      if (m) openSlug(m[1]);
    };
    const onOpen = (e: Event) => openSlug((e as CustomEvent<string>).detail);
    fromHash();
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("open-project", onOpen);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("open-project", onOpen);
    };
  }, [go, reduce]);

  // keep the active tab visible when the strip scrolls on small screens
  useEffect(() => {
    tabsRef.current?.querySelector<HTMLElement>(`[data-i="${index}"]`)?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [index]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80 || info.velocity.x < -500) go(index + 1);
    else if (info.offset.x > 80 || info.velocity.x > 500) go(index - 1);
  };

  const p = projects[index];
  const arrow =
    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent";

  return (
    <section id="work" ref={sectionRef} className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading index="01" title="Projects" />

        <Reveal>
          {/* controls: project names, counter and arrows */}
          <div className="flex flex-col gap-4 border-y border-line py-4 md:flex-row md:items-center md:justify-between">
            <div ref={tabsRef} role="tablist" aria-label="Projects" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 md:flex-wrap md:pb-0">
              {projects.map((q, i) => (
                <button
                  key={q.slug}
                  type="button"
                  role="tab"
                  data-i={i}
                  aria-selected={i === index}
                  onClick={() => go(i)}
                  className={`shrink-0 cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    i === index ? "border-accent bg-accent text-white" : "border-line text-mute hover:border-accent hover:text-ink"
                  }`}
                >
                  <span className="mr-1.5 font-mono opacity-70">{String(i + 1).padStart(2, "0")}</span>
                  {q.name}
                </button>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-sm text-mute">
                <span className="text-ink">{String(index + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
              </span>
              <button type="button" aria-label="Previous project" onClick={() => go(index - 1)} className={arrow}>
                <ArrowLeft size={17} />
              </button>
              <button type="button" aria-label="Next project" onClick={() => go(index + 1)} className={arrow}>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* progress bar under the controls */}
          <div className="h-px w-full bg-line">
            <motion.div className="h-px bg-accent" animate={{ width: `${((index + 1) / n) * 100}%` }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
          </div>

          <div
            tabIndex={0}
            onKeyDown={onKey}
            aria-roledescription="carousel"
            aria-label={`Project ${index + 1} of ${n}: ${p.name}`}
            className="relative overflow-hidden pt-10 outline-none"
          >
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={p.slug}
                custom={dir}
                initial={reduce ? false : { opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={onDragEnd}
                className="cursor-grab active:cursor-grabbing"
              >
                <Slide p={p} i={index} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* bottom arrows so long slides do not need a scroll back up */}
          <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
            <button type="button" onClick={() => go(index - 1)} className="group flex cursor-pointer items-center gap-3 text-left">
              <span className={arrow}><ArrowLeft size={17} /></span>
              <span className="hidden sm:block">
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Previous</span>
                <span className="text-sm font-semibold transition-colors group-hover:text-accent">{projects[(index - 1 + n) % n].name}</span>
              </span>
            </button>
            <button type="button" onClick={() => go(index + 1)} className="group flex cursor-pointer items-center gap-3 text-right">
              <span className="hidden sm:block">
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Next</span>
                <span className="text-sm font-semibold transition-colors group-hover:text-accent">{projects[(index + 1) % n].name}</span>
              </span>
              <span className={arrow}><ArrowRight size={17} /></span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
