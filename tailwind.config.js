/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'second': '#3775ED',
        'second1': '#fff',
      }
    },
    container: {
      center: true,
    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
    },
   
  },
  plugins: [require("limbcss")],
}