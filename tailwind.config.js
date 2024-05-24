/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Title: ["'Exo 2'", "sans-serif"], 
        inter: ["'inter'", "sans-serif"], // Ensure the font name is wrapped correctly
      },
      screens: {
        'lg': '1000px',
        'md': '768px',
        'sm': '425px',
      },
    },
  },
  plugins: [],
}
