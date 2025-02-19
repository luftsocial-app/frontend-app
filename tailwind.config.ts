import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlue: "#6610EA",
        secondaryGray: "#18181B",
        primaryPurple: "#4601B1",
        secondaryDark: "#090918",
        secondaryLightGray: "#525258",
        secondaryPink: "#FCF8FB",
        secondaryBlack: "#090914",
        primaryWhite: "#ffffff",
        primaryBlack: "#1D1C1C",
        secondaryBlack2: "#6D6D6D",
        secondaryGray2: "#FFF5F5;",
        secondaryPurple: "#7F56D9",
        secondaryPurple2: "#6941C6",
        secondaryGray3: "#667085",
        secondaryPurple3: "#7F56D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
