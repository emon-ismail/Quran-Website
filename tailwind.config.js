/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad-pro-12.9': { 'max': '1024px', 'max-height': '1366px' },
        'ipad-pro-834x1112': { 'max': '834px', 'max-height': '1112px' },
        'sm': '412px',   // Small screens
        'md': '846px', 
      },
      fontFamily: {
        'uthman-taha': ['KFGQPC Uthman Taha Naskh', ],
        'al-qalam': ['Al Qalam Quran', 'sans-serif'],
        'noticia': ['Noticia Text', 'serif'],
      },
      // Modify the "winter" dark theme colors
      dark: {
        // Replace the existing color with #2C364F
        "--primary-color": "#2C364F",
        // ... other color variables
      },
      light:{
        "--primary-color": "#2C364F",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addVariant, e }) {
      addVariant('custom-393x786', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`custom-screen-393x786${separator}${className}`)}@393x786`;
        });
      });
    },
  ],
  daisyui: {
    themes: ["light", "dark"],
 
  },
};
