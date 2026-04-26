import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#050D1A",
          2: "#0A1628",
          3: "#0F1F38",
          4: "#162944",
          5: "#1E3454",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96B",
          dark: "#8B6B1F",
          muted: "rgba(201,168,76,0.15)",
        },
        eltek: {
          500: "#1E6EFF",
          600: "#0A4FD6",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "scroll-left": "scrollLeft 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C, #E8C96B, #C9A84C)",
        "navy-gradient": "linear-gradient(180deg, #050D1A 0%, #0A1628 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
