import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0B",
        raise: "#101012",
        surface: "#131315",
        chrome: "#151517",
        line: "#232326",
        "line-soft": "#1C1C1F",
        ink: "#F2F1EE",
        body: "#C7C6C1",
        dim: "#8B8A8E",
        faint: "#55545A",
        ghost: "#333237"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
