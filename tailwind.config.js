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
        'quran-surah-1': ['Quran Surah 1', 'sans'],
        'quran-surah-2': ['Quran Surah 2', 'sans'],
        'quran-surah-01': ['Quran Surah 01', 'sans'],
        'quran-surah-02': ['Quran Surah 02', 'sans'],
        
      },
    },
    
  },
  plugins: [require("daisyui"),
  function ({ addVariant, e }) {
    addVariant('custom-393x786', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`custom-screen-393x786${separator}${className}`)}@393x786`;
      });
    });
  },
],
    daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "winter", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

