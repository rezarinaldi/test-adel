/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: {
          50: "#EDEDED",
          100: "#D9D9D9",
          200: "#B3B3B3",
          300: "#8F8F8F",
          400: "#696969",
          500: "#424242",
          600: "#363636",
          700: "#292929",
          800: "#1A1A1A",
          900: "#0D0D0D",
          950: "#080808",
        },
      },
    },
  },
  plugins: [],
};
