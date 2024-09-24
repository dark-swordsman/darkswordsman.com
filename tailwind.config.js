/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["FiraCode", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "primary": "#2E1065",
        "secondary": "#4B2D82",
      },
      backgroundImage: {
        "echo-thumb-1": "url('/img/echo-thumb-1.jpg')"
      }
    },
  },
  plugins: [],
}

