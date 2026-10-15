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
          50: "#fff1f5",
          100: "#ffe4ec",
          200: "#fecddc",
          300: "#f472b6", // blushing pink
          400: "#fb7185", // radiant rose
          500: "#f43f5e", // pink merona primer
          600: "#e11d48", // deep blush rose
          700: "#be123c",
          accent: "#ec4899", // hot pink
          gold: "#f59e0b",
          dark: "#120912",
          darker: "#090408",
          card: "#180d17",
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
