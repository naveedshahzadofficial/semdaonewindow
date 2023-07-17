/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: {
          light: "#2f348a",
          DEFAULT: "#2f348a",
          dark: "#1b1464",
        },
      },
    },
  },
  plugins: [],
};
