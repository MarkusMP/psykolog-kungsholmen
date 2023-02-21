const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ["var(--font-montserrat)", ...fontFamily.sans],
      },
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      mdl: "868px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      primary: "#043C2C",
      primary_accent: "#0FBF8D",
      secondary: "#F9FBF2",
      dark: "#1E1E1E",
      white: "#ffffff",
      background: "#fff",
      gray: "#6A6A6A",
    },
    container: {
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
