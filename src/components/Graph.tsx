"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { profile, projects } from "@/data/site";

const rise = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
});

// The graph is laid out on a fixed 1200 x 560 stage and scaled to fit the
// screen, so positions stay exact at every size. Below 768px it becomes a
// vertical list with a connector line instead. Only projects with x and y
// become nodes; the rest still appear in the Projects section.
const W = 1200;
const H = 640;
const ME = { x: 200, y: 180, r: 135 };
const nodes = projects.filter((p): p is typeof p & { x: number; y: number } => p.x !== undefined && p.y !== undefined);

const STARS = Array.from({ length: 70 }, (_, i) => ({
  x: (i * 149) % W,
  y: (i * 83) % H,
  r: 1 + (i % 3) * 0.6,
  d: (i % 5) * 0.4,
}));

function edge(x: number, y: number) {
  const mx = (ME.x + x) / 2;
  return `M${ME.x} ${ME.y} C ${mx} ${ME.y}, ${mx} ${y}, ${x} ${y}`;
}

export function Graph({ active, onActive }: { active: number | null; onActive: (i: number | null) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const reduce = useReducedMotion();

  // Scale to the container width, but never taller than the space left under
  // the nav, so the whole graph is visible without scrolling.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const byWidth = el.clientWidth / W;
      const byHeight = (window.innerHeight - 170) / H;
      setScale(Math.min(byWidth, byHeight));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full" style={{ height: H * scale }}>
      <div className="absolute top-0 origin-top-left" style={{ left: "50%", marginLeft: -(W * scale) / 2, width: W, height: H, transform: `scale(${scale})` }}>
        {/* stars and edges */}
        <svg width={W} height={H} className="absolute inset-0">
          {STARS.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="var(--star)" style={{ animation: `drift ${6 + s.d}s ease-in-out ${s.d}s infinite` }} />
          ))}
          {nodes.map((p, i) => {
            const on = active === i;
            return (
              <g key={p.slug}>
                <motion.path
                  d={edge(p.x, p.y)}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth={on ? 2.4 : 1.4}
                  strokeOpacity={active === null ? 0.55 : on ? 1 : 0.18}
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  style={{ transition: "stroke-opacity .3s, stroke-width .3s" }}
                />
                {!reduce && (
                  <circle r={3} fill="var(--accent)" opacity={on || active === null ? 0.9 : 0.2}>
                    <animateMotion dur="3.2s" begin={`${1.8 + i * 0.5}s`} repeatCount="indefinite" path={edge(p.x, p.y)} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* me */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group absolute rounded-full border-[3px] border-accent bg-bg shadow-[0_0_0_14px_var(--bg),0_0_0_15px_var(--accent-soft),0_0_120px_var(--accent-soft)]"
          style={{ left: ME.x - ME.r, top: ME.y - ME.r, width: ME.r * 2, height: ME.r * 2 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={profile.photo}
              alt={profile.fullName}
              fill
              priority
              sizes="300px"
              className="object-cover"
            />
          </div>
          <span className="pointer-events-none absolute inset-[-24px] rounded-full border border-accent/30" style={{ animation: reduce ? "none" : "drift 7s ease-in-out infinite" }} />
        </motion.div>

        {/* headline, intro and CV under the portrait */}
        <div className="absolute" style={{ left: 40, top: ME.y + ME.r + 40, width: 520 }}>
          <motion.div {...rise(0)} className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {profile.role} · {profile.location}
          </motion.div>
          <motion.h1 {...rise(1)} className="font-display text-[46px] font-extrabold leading-[1.02] tracking-tight">
            {profile.headline[0]}
            <br />
            <span className="text-accent">{profile.headline[1]}</span>.
          </motion.h1>
          <motion.p {...rise(2)} className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-mute">
            {profile.intro}
          </motion.p>
          <motion.a
            {...rise(3)}
            href={profile.cv}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Download size={15} /> Download CV
          </motion.a>
        </div>

        {/* project nodes */}
        {nodes.map((p, i) => (
          <motion.a
            key={p.slug}
            href={`#project-${p.slug}`}
            onMouseEnter={() => onActive(i)}
            onMouseLeave={() => onActive(null)}
            onFocus={() => onActive(i)}
            onBlur={() => onActive(null)}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: active === null || active === i ? 1 : 0.45, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute block w-[240px] -translate-y-1/2 rounded-2xl border bg-surface/90 p-3.5 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ${
              active === i ? "border-accent shadow-[0_18px_60px_var(--accent-soft)]" : "border-line"
            }`}
            style={{ left: p.x, top: p.y, animation: reduce ? "none" : `drift ${7 + (i % 3)}s ease-in-out ${i * 0.6}s infinite` }}
          >
            <span className="absolute -left-[7px] top-[22px] h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
            <h3 className="font-display text-[14px] font-bold">{p.name}</h3>
            <p className="mt-1 text-[12px] leading-snug text-mute">{p.short}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <span key={t} className="rounded border border-line px-1.5 py-0.5 text-[10px] text-mute">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

// Compact version for phones: photo, then nodes down a single connector line.
export function GraphList() {
  return (
    <div className="relative mt-6">
      <div className="group relative mx-auto h-44 w-44 overflow-hidden rounded-full border-[3px] border-accent shadow-[0_0_0_10px_var(--bg),0_0_0_11px_var(--accent-soft)]">
        <Image src={profile.photo} alt={profile.fullName} fill priority sizes="176px" className="object-cover" />
      </div>
      <div className="absolute left-1/2 top-44 bottom-0 w-px bg-accent/40" />
      <ul className="relative mt-8 space-y-5">
        {nodes.map((p) => (
          <li key={p.slug} className="relative mx-auto max-w-sm rounded-2xl border border-line bg-surface p-4">
            <span className="absolute -top-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent" />
            <h3 className="font-display text-[15px] font-bold">{p.name}</h3>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-mute">{p.short}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
