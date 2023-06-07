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
          600:'#6D6E6F'
        },
        'casual-blue':'#547BF5'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}