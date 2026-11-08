import type { SVGProps } from "react";
const base = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
type P = SVGProps<SVGSVGElement>;

export const ArrowUpRight = (p: P) => (<svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const Close = (p: P) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const Plus = (p: P) => (<svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const Menu = (p: P) => (<svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>);
export const Star = (p: P) => (<svg {...base} {...p}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" /></svg>);
export const ArrowUp = (p: P) => (<svg {...base} {...p}><path d="M12 19V5M5 12l7-7 7 7" /></svg>);
export const Github = (p: P) => (<svg {...base} {...p}><path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6 0C6.5 2.8 5.5 3.1 5.5 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.600 2.800 5.700 5.500 6a2.700 2.700 0 0 0-.8 2.100V21" /></svg>);
export const Linkedin = (p: P) => (<svg {...base} {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>);
export const Mail = (p: P) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
