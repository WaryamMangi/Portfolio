import { contact, socials } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { Github, Linkedin } from "./Icons";
import { PillLink } from "./ui";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div ref={ref} className="reveal rounded-[36px] border border-white/10 bg-white/[0.04] px-6 py-16 text-center shadow-soft backdrop-blur-2xl sm:px-14 sm:py-24">
        <p className="font-mono text-xs tracking-widest text-muted">{contact.label}</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl">{contact.headline}</h2>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted">{contact.body}</p>
        <div className="mt-9 flex justify-center"><PillLink href={socials.email}>Email me</PillLink></div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <PillLink variant="secondary" href={socials.linkedin} arrow={false}><Linkedin /> LinkedIn</PillLink>
          <PillLink variant="secondary" href={socials.github} arrow={false}><Github /> GitHub</PillLink>
        </div>
      </div>
    </section>
  );
}
