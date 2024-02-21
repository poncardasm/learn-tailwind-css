/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./tutorials/**/*.{html,js}",
		"!./tutorials/**/_*.html"
	],
  theme: {
    extend: {},
  },
  plugins: [],
};