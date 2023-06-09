/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ['sans']:'Inter'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}