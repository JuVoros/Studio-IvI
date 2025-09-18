/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: { primary: "#ab4967", secondary: "#508078", dark: "#000000"},
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
}