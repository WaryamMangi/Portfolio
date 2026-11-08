import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { Close, Menu } from "./Icons";
import { PillButton, scrollToId } from "./ui";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => { setOpen(false); scrollToId(id); };

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav aria-label="Primary" className="relative w-full max-w-4xl rounded-[28px] border border-white/10 bg-black/40 px-3 py-2 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="px-3 font-display text-lg font-bold tracking-tight">
            {profile.logo}
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => { e.preventDefault(); go(l.id); }}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition ${active === l.id ? "bg-white/10 text-paper" : "text-muted hover:text-paper"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <PillButton onClick={() => go("contact")} className="!py-2">Let's Talk</PillButton>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <ul className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-2 md:hidden">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id); }} className={`block rounded-2xl px-4 py-3 text-sm ${active === l.id ? "bg-white/10 text-paper" : "text-muted"}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
