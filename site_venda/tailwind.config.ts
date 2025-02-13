import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arimo: ['"Arimo"', 'sans-serif'],
        p_sans: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
