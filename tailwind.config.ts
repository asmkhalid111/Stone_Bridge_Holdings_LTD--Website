import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FBFBF9",
          subtle: "#F5F4F0",
          elevated: "#FFFFFF",
          dark: "#121316",
          "dark-subtle": "#1A1C20",
        },
        ink: {
          primary: "#121316",
          secondary: "#4B4D52",
          muted: "#7D8087",
          subtle: "#B8B9BD",
          inverted: "#FBFBF9",
        },
        border: {
          DEFAULT: "#E5E3DE",
          subtle: "#EFECE6",
          dark: "#2A2C30",
          emphasis: "#121316",
        },
        accent: {
          tech: "#A8502D",
          "tech-subtle": "rgba(168, 80, 45, 0.08)",
          grid: "rgba(18, 19, 22, 0.04)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      lineHeight: {
        architectural: "1.15",
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
