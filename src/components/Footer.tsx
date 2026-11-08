import { profile, socials } from "../data/portfolio";
import { Github, Linkedin, Mail } from "./Icons";

export default function Footer() {
  const link = "grid h-10 w-10 place-items-center rounded-full border border-white/12 text-muted transition hover:border-white/40 hover:text-paper";
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
      <p>© {profile.year} {profile.name}</p>
      <div className="flex gap-2">
        <a className={link} href={socials.github} aria-label="GitHub"><Github /></a>
        <a className={link} href={socials.linkedin} aria-label="LinkedIn"><Linkedin /></a>
        <a className={link} href={socials.email} aria-label="Email"><Mail /></a>
      </div>
    </footer>
  );
}
