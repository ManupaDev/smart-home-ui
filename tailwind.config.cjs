/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ["sans"]: "Inter",
      },
      colors: {
        "jade": { 400: "#51AAA5", 500: "#25FFFF" },
        "smoke": {
          100:"#4F5152",
          200: "#B7B7B7",
          300: "#404243",
          400: "#F2F4F5",
          500: "#E7EAED",
          600: "#6D6E6F",
          700: "#E4E4E4",
          800: "#717374",
        },
        "casual-blue": "#547BF5",
        "midnight-black": "#020406",
        "glass_grey": "#1C1E1F",
        "off_white": "#F5F7FB",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
