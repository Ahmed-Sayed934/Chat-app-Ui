/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        LightViolet: "hsl(264, 100%, 61%)",
        LightMagenta: 'hsl(293, 100%, 63%)',
        LightGrayishViolet: 'hsl(270, 20%, 96%)',
        VeryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)',
        VeryLightMagenta: 'hsl(289, 100%, 72%)',
        PaleViolet : 'hsl(276, 100%, 81%)',
        ModerateViolet: 'hsl(276, 55%, 52%)',
        DesaturatedDarkViolet: 'hsl(271, 15%, 43%)',
        GrayishBlue : 'hsl(206, 6%, 79%)',
        DarkGrayishViolet : 'hsl(270, 7%, 64%)',

      }
    },
  },
  plugins: [],
}