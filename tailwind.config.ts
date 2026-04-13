import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    "#00B4D8",
          cyan:    "#90E0EF",
          pink:    "#FF006E",
          coral:   "#FF4D6D",
          yellow:  "#FFD60A",
          purple:  "#7B2FBE",
          light:   "#CAF0F8",
          dark:    "#03045E",
        },
      },
      fontFamily: {
        display: ["var(--font-pacifico)", "cursive"],
        sans:    ["var(--font-nunito)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":   "linear-gradient(135deg, #03045E 0%, #0077B6 40%, #00B4D8 70%, #90E0EF 100%)",
        "candy-gradient":  "linear-gradient(135deg, #FF006E, #FF4D6D, #FFD60A)",
        "ocean-gradient":  "linear-gradient(180deg, #CAF0F8 0%, #90E0EF 50%, #00B4D8 100%)",
        "fun-gradient":    "linear-gradient(135deg, #7B2FBE 0%, #FF006E 50%, #FFD60A 100%)",
      },
      animation: {
        "float":        "float 3s ease-in-out infinite",
        "float-slow":   "float 5s ease-in-out infinite",
        "float-delay":  "float 4s ease-in-out 1s infinite",
        "spin-slow":    "spin 8s linear infinite",
        "bounce-slow":  "bounce 2s ease-in-out infinite",
        "wiggle":       "wiggle 1s ease-in-out infinite",
        "fade-in":      "fadeIn 0.6s ease-out forwards",
        "slide-up":     "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%":       { transform: "rotate(3deg)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
