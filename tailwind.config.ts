import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        ink: "#070b14",
        panel: "#0d1423",
        line: "rgba(185, 207, 255, 0.13)",
        muted: "#a3b1cc",
        signal: "#6f8cff",
      },
    },
  },
  plugins: [],
};

export default config;
