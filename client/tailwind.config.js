/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "sup480":"480px",
      "sup750":"750px",
      "sup768":"768px",
      "sup500":"500px",
      "sup968":"968px",
      "sup1024":"1024px",
      "sup1400":"1400px",
      "sup1600":"1600px",
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

