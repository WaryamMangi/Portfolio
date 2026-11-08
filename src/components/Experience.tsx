import { useState } from "react";
import { experience } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRight, Close } from "./Icons";
import { SectionHead } from "./ui";

export default function Experience() {
  const [open, setOpen] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div ref={ref} className="reveal">
        <SectionHead label={experience.label} heading={experience.heading} />
        <ul className="mt-12 border-t border-white/10">
          {experience.items.map((it, i) => {
            const on = open === i;
            return (
              <li key={it.role} className="border-b border-white/10 py-3">
                <div className={`rounded-[28px] transition-colors duration-500 ${on ? "border border-white/10 bg-raised" : "border border-transparent"}`}>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`exp-${i}`}
                    id={`exp-btn-${i}`}
                    onClick={() => setOpen(on ? -1 : i)}
                    className="flex w-full items-center gap-4 rounded-[28px] px-5 py-6 text-left sm:px-8"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-2xl font-bold leading-tight sm:text-4xl">{it.role}</span>
                      <span className="mt-2 block text-sm text-muted">{it.company}</span>
                    </span>
                    <span className="hidden font-mono text-sm text-muted sm:block">{it.year}</span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15">
                      {on ? <Close /> : <ArrowUpRight />}
                    </span>
                  </button>
                  <div id={`exp-${i}`} role="region" aria-labelledby={`exp-btn-${i}`} className={`grid transition-[grid-template-rows] duration-500 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-8 sm:px-8">
                        <p className="mb-4 font-mono text-sm text-muted sm:hidden">{it.year}</p>
                        <ul className="max-w-2xl list-disc space-y-3 pl-5 leading-relaxed text-muted marker:text-white/30">
                          {it.points.map((pt) => <li key={pt}>{pt}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
