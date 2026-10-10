"use client";

import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";
import { Reveal, SectionHeading } from "./ui";

export function Contact() {
  const rows = [
    { icon: <Mail size={18} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "in/mehdiabidii", href: profile.linkedin },
    { icon: <Github size={18} />, label: "GitHub", value: "Mehdi-Abidi", href: profile.github },
    { icon: <Download size={18} />, label: "CV", value: "Mehdi_Abidi_CV.pdf", href: profile.cv, download: true },
  ];

  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading index="05" title="Contact" />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Let us build something
              <br />
              <span className="text-accent">connected</span>.
            </h3>
            <p className="mt-5 max-w-md text-mute">
              The fastest way to reach me is email. I reply within a working day.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {profile.facts.map(([k, v]) => (
                <div key={k} className="border-t border-line pt-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">{k}</div>
                  <div className="mt-1 text-sm font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="border-t border-line">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    download={r.download}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:text-accent"
                  >
                    <span className="text-mute transition-colors group-hover:text-accent">{r.icon}</span>
                    <span className="w-24 text-xs uppercase tracking-[0.2em] text-mute">{r.label}</span>
                    <span className="flex-1 font-semibold">{r.value}</span>
                    <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
