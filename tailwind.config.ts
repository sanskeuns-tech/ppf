import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effaf6",
          100: "#d7f3e9",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          accent: "#38bdf8", // Sky Cyan
          gold: "#f59e0b",
          dark: "#0b0f17",
          darker: "#06080d",
          card: "#131b26",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
