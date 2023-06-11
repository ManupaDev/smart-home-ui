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
      },
      colors:{
        'jade':'#51AAA5',
        'smoke':{
          400:'#F2F4F5',
          500:'#E7EAED',
          600:'#6D6E6F',
          700:'#E4E4E4',
          800:'#717374'
        },
        'casual-blue':'#547BF5',
        'midnight-black':'#020406',
        'glass_grey':'#1C1E1F',
        'off_white':'#F5F7FB',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}