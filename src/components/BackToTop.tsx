import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-30 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-black/50 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 ${show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowUp />
    </button>
  );
}
