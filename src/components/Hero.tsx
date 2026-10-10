"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile, skills } from "@/data/site";
import { Graph, GraphList } from "./Graph";
import { Tag } from "./ui";

const rise = (i: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 1.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const [active, setActive] = useState<number | null>(null);
  const cluster = skills.flatMap((s) => s.items).slice(0, 12);

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="hidden md:block">
          <Graph active={active} onActive={setActive} />
        </div>
        <div className="md:hidden">
          <GraphList />
        </div>

        <div className="relative mt-4 grid gap-10 pb-20 md:mt-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <motion.div {...rise(0)} className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {profile.role} · {profile.location}
            </motion.div>
            <motion.h1 {...rise(1)} className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              {profile.headline[0]}
              <br />
              <span className="text-accent">{profile.headline[1]}</span>.
            </motion.h1>
            <motion.p {...rise(2)} className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
              {profile.intro}
            </motion.p>
            <motion.div {...rise(3)} className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                Explore the work <ArrowDown size={15} />
              </a>
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent">
                <Download size={15} /> Download CV
              </a>
            </motion.div>
          </div>

          <motion.div {...rise(4)} className="flex flex-wrap gap-2 md:justify-end">
            {cluster.map((s, i) => (
              <Tag key={s} active={i < 2}>
                {s}
              </Tag>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
