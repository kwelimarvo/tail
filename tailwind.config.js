/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ["'Pacifico'", 'cursive'],
        'montserrat': ["'Montserrat'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
