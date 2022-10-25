/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#60269E",
          "secondary": "#00ce7c",        
          "accent": "#37CDBE",       
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  backgroundImage: {
    "hero-main": "url('/img/market_hero.jpg')",
  },
  plugins: [require("daisyui")],
};
