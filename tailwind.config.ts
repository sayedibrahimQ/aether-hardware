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
        background: "#07080A",
        surface: "#0E1015",
        accent: {
          cyan: "#00E5FF",
          emerald: "#10B981",
        },
      },
    },
  },
  plugins: [],
};

export default config;

