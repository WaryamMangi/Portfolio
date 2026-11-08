import { Fragment, useState } from "react";
import { about } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { Star } from "./Icons";
import { Chip, SectionHead } from "./ui";

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? <strong key={i} className="font-semibold text-paper">{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}

export default function About() {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div ref={ref} className="reveal">
        <SectionHead label={about.label} heading={about.heading} />
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => <p key={i}><Rich text={p} /></p>)}
            </div>
            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold">Skills</h3>
              <div className="mt-5 space-y-5">
                {about.skills.map((g) => (
                  <div key={g.group}>
                    <p className="mb-2 font-mono text-[11px] tracking-widest text-muted">{g.group}</p>
                    <div className="flex flex-wrap gap-2">{g.items.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-4" aria-label="Certifications">
            {about.certifications.map((c, i) => {
              const on = i === active;
              return (
                <li key={c.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`w-full rounded-[28px] border p-6 text-left transition duration-300 ${on ? "border-paper bg-paper text-ink shadow-soft" : "border-white/10 bg-surface text-paper hover:brightness-125"}`}
                  >
                    <span className={`flex items-center gap-2 font-sans text-xs font-semibold tracking-widest ${on ? "text-ink/70" : "text-muted"}`}>
                      <Star width={14} height={14} /> CERTIFICATION
                    </span>
                    <span className="mt-3 block font-display text-xl font-bold">{c.title}</span>
                    <span className={`mt-1 block text-sm ${on ? "text-ink/70" : "text-muted"}`}>{c.issuer}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
