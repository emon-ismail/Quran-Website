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
      
      themes: ["light", "dark"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "winter", // name of one of the included themes for dark mode
 
  },
}

