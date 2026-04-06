import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Isse aap className="font-outfit" bhi use kar sakte hain
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        brandBlue: '#00adef',
      },
    },
  },
  plugins: [],
};
export default config;