import cutout from "../assets/waryam-cutout.webp";
import { profile, socials } from "../data/portfolio";
import { Github, Linkedin, Mail } from "./Icons";
import { PillButton, PillLink, scrollToId } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pt-28 sm:px-8">
      <h1 className="relative z-0 select-none text-center font-display font-bold uppercase leading-[0.85] tracking-tighter text-[22vw] sm:text-[16vw] md:text-[12.5vw]">
        <span className="outline-text block sm:inline">{profile.firstName}</span>
        <span className="hidden sm:inline"> </span>
        <span className="block text-paper sm:inline">{profile.lastName}</span>
        <span className="sr-only"> — {profile.role}</span>
      </h1>

      {/* Cutout portrait (replace src/assets/waryam-cutout.webp) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto flex h-[68svh] max-w-xl items-end justify-center sm:h-[72svh]">
        <img
          src={cutout}
          alt={`${profile.name} portrait`}
          className="h-full w-auto max-w-full object-contain object-bottom grayscale contrast-110"
          style={{ maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-20 mt-auto flex flex-col gap-8 pb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-semibold">{profile.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{profile.tagline}</p>
          <PillButton className="mt-5" onClick={() => scrollToId("contact")}>Let's collaborate</PillButton>
        </div>
        <div className="flex flex-row flex-wrap gap-2 md:flex-col md:items-stretch">
          <PillLink variant="secondary" href={socials.github} className="bg-black/40 backdrop-blur" arrow={false}><Github /> GitHub</PillLink>
          <PillLink variant="secondary" href={socials.linkedin} className="bg-black/40 backdrop-blur" arrow={false}><Linkedin /> LinkedIn</PillLink>
          <PillLink variant="secondary" href={socials.email} className="bg-black/40 backdrop-blur" arrow={false}><Mail /> Email</PillLink>
        </div>
      </div>
    </section>
  );
}
