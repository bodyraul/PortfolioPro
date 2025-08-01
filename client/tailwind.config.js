/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "sup750":"750px",
      "sup500":"500px",
      "sup968":"968px",
      "sup1400":"1400px",
    },
    extend: {
       colors:{
      "jaune":"#FBDA70",
      "noir":"#0F0F0F",
      "gris":"#1A1A1A",
      "belge":"#FFFDF0",
      },
    },
  },
  plugins: [],
}

