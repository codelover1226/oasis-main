import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'main-bg' : '#FDF4F0',
        'footer-banner' : '#E7CFCB',
        'red' : '#AB0535',
      },
      fontFamily : {
        'ivy-mode' : ['ivy-mode', 'fallback-font-family'],
        'nunito-sans' : ['nunito-sans', 'fallback-font-family'],
        'poppins' : ['poppins', 'fallback-font-family'],
        'spartan' : ['spartan-mb-5', 'fallback-font-family'],
      }
    },
  },
  plugins: [],
};
export default config;
