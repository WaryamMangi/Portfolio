import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "./Icons";

const pill = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-0";
export const primaryCls = `${pill} bg-paper text-ink hover:bg-white`;
export const secondaryCls = `${pill} border border-white/15 text-paper hover:border-white/40 hover:bg-white/5`;

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary"; children: ReactNode; arrow?: boolean };
export function PillLink({ variant = "primary", children, arrow = true, className = "", ...rest }: LinkProps) {
  const ext = rest.href?.startsWith("http");
  return (
    <a className={`${variant === "primary" ? primaryCls : secondaryCls} ${className}`} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})} {...rest}>
      {children}
      {arrow && <ArrowUpRight width={14} height={14} />}
    </a>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary"; children: ReactNode; arrow?: boolean };
export function PillButton({ variant = "primary", children, arrow = true, className = "", ...rest }: BtnProps) {
  return (
    <button type="button" className={`${variant === "primary" ? primaryCls : secondaryCls} ${className}`} {...rest}>
      {children}
      {arrow && <ArrowUpRight width={14} height={14} />}
    </button>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-muted">{children}</span>;
}

export function SectionHead({ label, heading, children }: { label: string; heading: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs tracking-widest text-muted">{label}</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">{heading}</h2>
      </div>
      {children}
    </div>
  );
}
