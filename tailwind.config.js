/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
        "85vh": "85vh",
      },
    },
    minHeight: {
      "[860px]": "860px",
      "[920px]": "92px",
      "[1100px]": "1100px",
      "[150px]": "150px",
    },
    fontSize: {
      xxs: ".50rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      md: "1.100",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2/5xl": "1.7rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".15em",
      widest: ".25em",
    },
    screens: {
      xxs: "560px",
      xs: "768px",
      sm: "1000px",
      md: "1360px",
      lg: "1240px",
      xl: "1860px",
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "0rem",
    //     xxs: "1rem",
    //     xs: "2rem",
    //     sm: "4rem",
    //     md: "5rem",
    //     lg: "10rem",
    //     xl: "18rem",
    //     "2xl": "20rem",
    //   },
    // },
    fontFamily: {
      teko: "var(--teko)",
      exo: "var(--exo)",
    },
    dropShadow: {
      wider: "-30px 0px 51px -17px rgba(0,0,0,0.75)",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },
    borderColor: {
      primary: "#01b4e4",
      gold: "#EBD59D",
      secondary: "#0d253f",
      lightGray: "#dedede",
      tertiary: "#1ed5a9",
    },
    textColor: {
      ...colors,
      primary: "#01b4e4",
      secondary: "#0d253f",
      tertiary: "#1ed5a9",
      gold: "#EBD59D",
      lightGray: "#6C757D",
      darkGray: "#161616",
      flue: "#767676",
    },
    backgroundColor: {
      ...colors,
      primary: "#01b4e4",
      secondary: "#0d253f",
      lightGray: "#f8f9fd",
      darkGray: "#161616",
      tertiary: "#1ed5a9",
      dark: "#111",
      //secondary: "var(--secondary-color)",
    },
    fill: ({ theme }) => ({
      //primary: "var(--primary-color)",
      //secondary: "var(--secondary-color)",
      disabled: "#D6D6D6",
    }),
  },
  plugins: [],
};
