"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { profile } from "@/data/site";
import { Graph, GraphList } from "./Graph";
import { Ribbon } from "./Ribbon";

export function Hero() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="hidden md:block">
          <Graph active={active} onActive={setActive} />
        </div>

        {/* phones: copy first, then the connector list */}
        <div className="md:hidden">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {profile.role} · {profile.location}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight">
            {profile.headline[0]}
            <br />
            <span className="text-accent">{profile.headline[1]}</span>.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-mute">{profile.intro}</p>
          <a href={profile.cv} download className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white">
            <Download size={15} /> Download CV
          </a>
          <GraphList />
        </div>
      </div>
      <div className="mt-10 md:mt-6">
        <Ribbon />
      </div>
    </section>
  );
}
