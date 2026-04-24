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
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Cabinet Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        eltek: {
          50:  "#eef5ff",
          100: "#d9e8ff",
          200: "#bcd5ff",
          300: "#8ebcff",
          400: "#5a96ff",
          500: "#3370ff",
          600: "#1a4df5",
          700: "#1339e1",
          800: "#162eb6",
          900: "#182c8f",
          950: "#131d57",
        },
        slate: {
          850: "#172033",
          950: "#0a0f1e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(51,112,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(51,112,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(51,112,255,0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(51,112,255,0.5)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(51,112,255,0.15)",
        glow: "0 0 40px rgba(51,112,255,0.2)",
        "glow-lg": "0 0 80px rgba(51,112,255,0.3)",
        glass: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
