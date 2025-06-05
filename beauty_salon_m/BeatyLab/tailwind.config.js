/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ охватывает все нужные файлы
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'], // ✅ добавляем шрифт Jost
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
