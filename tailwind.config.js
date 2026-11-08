/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        surface: "#121212",
        raised: "#1a1a1a",
        paper: "#f5f5f5",
        muted: "#a1a1a1",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: { card: "28px" },
      boxShadow: { soft: "0 20px 50px -20px rgba(0,0,0,0.7)" },
    },
  },
  plugins: [],
};
