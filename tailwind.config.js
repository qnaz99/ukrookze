/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playball: ['Playball', 'cursive'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          debugpink: '#ff00ff',
        },
      },
    },
    plugins: [],
}
