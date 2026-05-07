import type { Config } from "tailwindcss";

/**
 * Brand palette
 * - Indigo  #373B99  (primary brand)
 * - Blush   #F0D5EB  (secondary surface)
 * - Sky     #75C4E5  (accent / highlight)
 * - Black   #000000  (ink / text)
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces (light theme)
        ink: {
          50: "#000000",
          100: "#1A1A1A",
          200: "#3A3A3A",
          300: "#6B6B6B",
          400: "#9C9C9C",
          500: "#000000",
          900: "#F0D5EB", // blush surface
          950: "#FAF6F2", // canvas
        },
        // Foreground / text
        paper: "#000000",
        canvas: "#FAF6F2",
        blush: "#F0D5EB",
        sky: "#75C4E5",
        indigo: {
          DEFAULT: "#373B99",
          deep: "#23266B",
          soft: "#5C61C7",
        },
        accent: {
          DEFAULT: "#373B99",
          warm: "#75C4E5",
          gold: "#75C4E5",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        "fade-up": "fade-up 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 30px rgba(55, 59, 153, 0.25)" },
          "50%": { boxShadow: "0 0 60px rgba(55, 59, 153, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
