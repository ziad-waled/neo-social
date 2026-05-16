import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#F5F1E8",
          orange: "#FF5A1F",
          yellow: "#F7C400",
          pink: "#F28CA8",
          black: "#000000",
          white: "#FFFFFF",
          dark: "#1a1a1a",
          "dark-card": "#2d2d2d",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        neo: "8px 8px 0px 0px #000000",
        "neo-sm": "4px 4px 0px 0px #000000",
        "neo-lg": "12px 12px 0px 0px #000000",
        "neo-hover": "12px 12px 0px 0px #000000",
        "neo-active": "2px 2px 0px 0px #000000",
        "neo-orange": "8px 8px 0px 0px #FF5A1F",
        "neo-pink": "8px 8px 0px 0px #F28CA8",
        "neo-yellow": "8px 8px 0px 0px #F7C400",
      },
      borderRadius: {
        neo: "16px",
        "neo-lg": "24px",
        "neo-xl": "32px",
      },
      borderWidth: {
        neo: "3px",
      },
    },
  },
  plugins: [],
};

export default config;
