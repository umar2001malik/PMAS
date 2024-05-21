/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'lg': '1000px',
        'md': '768px',
        'sm': '425px',
      },
    },
  },
  plugins: [],
}
