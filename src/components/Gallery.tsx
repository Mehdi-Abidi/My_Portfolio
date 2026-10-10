"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Shot = { src: string; caption: string };

// One large screenshot with thumbnails underneath; clicking the large one
// opens it full screen.
export function Gallery({ shots, title }: { shots: Shot[]; title: string }) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const go = (d: number) => setI((v) => (v + d + shots.length) % shots.length);
  const s = shots[i];

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-raised"
        aria-label={`Open ${s.caption} full screen`}
      >
        <div className="relative aspect-[16/10] w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={s.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              <Image src={s.src} alt={`${title}: ${s.caption}`} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover object-top" />
            </motion.div>
          </AnimatePresence>
        </div>
      </button>
      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="text-sm text-mute">{s.caption}</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent">
            <ChevronLeft size={15} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {shots.map((t, k) => (
          <button
            key={t.src}
            type="button"
            onClick={() => setI(k)}
            aria-label={t.caption}
            className={`relative aspect-[16/10] cursor-pointer overflow-hidden rounded-md border transition-opacity ${k === i ? "border-accent" : "border-line opacity-60 hover:opacity-100"}`}
          >
            <Image src={t.src} alt="" fill sizes="160px" className="object-cover object-top" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
          >
            <button type="button" aria-label="Close" className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white">
              <X size={18} />
            </button>
            <div className="relative aspect-[16/10] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <Image src={s.src} alt={`${title}: ${s.caption}`} fill sizes="100vw" className="rounded-lg object-contain" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
