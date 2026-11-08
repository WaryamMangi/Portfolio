import { useCallback, useEffect, useRef, useState } from "react";
import { projects, work, type Project } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRight, Close } from "./Icons";
import { Chip, PillLink, SectionHead } from "./ui";

function Shot({ src, alt, i }: { src?: string; alt: string; i: number }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />;
  const tones = ["from-[#1c1c1c] to-[#0f0f0f]", "from-[#222] to-[#121212]", "from-[#181818] to-[#262626]", "from-[#202020] to-[#101010]"];
  return (
    <div className={`grid h-full w-full place-items-center bg-gradient-to-br ${tones[i % 4]}`}>
      <span className="font-mono text-[11px] tracking-widest text-white/30">Add screenshot</span>
    </div>
  );
}

function Card({ p, index, onOpen }: { p: Project; index: number; onOpen: (p: Project, el: HTMLElement) => void }) {
  return (
    <article
      className="animate-card group cursor-pointer rounded-card border border-white/10 bg-surface p-3 shadow-soft transition duration-300 hover:-translate-y-1 hover:brightness-110"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        type="button"
        onClick={(e) => onOpen(p, e.currentTarget.closest("article") as HTMLElement)}
        aria-haspopup="dialog"
        aria-label={`Open project: ${p.title}`}
        className="block w-full rounded-[20px] text-left"
      >
        <div className="relative aspect-video overflow-hidden rounded-[20px] border border-white/8">
          <Shot src={p.images[0]} alt={`${p.title} screenshot`} i={index} />
          <span className="absolute left-3 top-3 rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink">{p.category}</span>
          <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-paper text-ink transition duration-300 group-hover:scale-110">
            <ArrowUpRight />
          </span>
        </div>
        <div className="px-3 pb-3 pt-5">
          <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">{p.tags.slice(0, 4).map((t) => <Chip key={t}>{t}</Chip>)}</div>
        </div>
      </button>
    </article>
  );
}

function Modal({ p, origin, onClose }: { p: Project; origin: string; onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab" || !dialog.current) return;
      const f = dialog.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [onClose]);

  const slots = Array.from({ length: 4 }, (_, i) => p.images[i]);
  const shown = p.images.length >= 4 || p.images.length === 0 ? slots : slots.slice(0, Math.max(p.images.length, 1));
  const single = shown.length === 1;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8" onMouseDown={onClose}>
      <div className="animate-backdrop absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(e) => e.stopPropagation()}
        style={{ transformOrigin: origin }}
        className="animate-modal relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-card border border-white/10 bg-surface shadow-soft"
      >
        <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close project details" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 backdrop-blur transition hover:bg-white/10">
          <Close />
        </button>
        <div className={`grid gap-0.5 bg-white/10 ${single ? "grid-cols-1" : "grid-cols-2"}`}>
          {shown.map((src, i) => (
            <div key={i} className="aspect-video overflow-hidden bg-ink"><Shot src={src} alt={`${p.title} screenshot ${i + 1}`} i={i} /></div>
          ))}
        </div>
        <div className="p-7 sm:p-10">
          <h3 id="modal-title" className="font-display text-2xl font-bold leading-tight sm:text-3xl">{p.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
          <p className="mt-8 font-sans text-xs font-semibold tracking-widest text-muted">ABOUT THIS PROJECT</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{p.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.live && <PillLink href={p.live}>Live Project</PillLink>}
            <PillLink variant="secondary" href={p.github}>GitHub</PillLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<{ p: Project; origin: string } | null>(null);
  const ref = useReveal<HTMLDivElement>();
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const onOpen = (p: Project, el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    // modal scales out from the clicked card's position
    const x = ((r.left + r.width / 2) / window.innerWidth) * 100;
    const y = ((r.top + r.height / 2) / window.innerHeight) * 100;
    setOpen({ p, origin: `${x}% ${y}%` });
  };
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div ref={ref} className="reveal">
        <SectionHead label={work.label} heading={work.heading}>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {work.filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${filter === f ? "border-paper bg-paper text-ink" : "border-white/15 text-muted hover:border-white/40 hover:text-paper"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </SectionHead>
        <div key={filter} className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((p, i) => <Card key={p.id} p={p} index={i} onOpen={onOpen} />)}
        </div>
      </div>
      {open && <Modal p={open.p} origin={open.origin} onClose={close} />}
    </section>
  );
}
