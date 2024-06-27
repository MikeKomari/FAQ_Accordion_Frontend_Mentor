/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1440px" },
      sm: { max: "375px" },
    },

    extend: {
      backgroundImage: {
        "desktop-pattern":
          "url('/assets/images/background-pattern-desktop.svg')",
        "mobile-pattern": "url('/assets/images/background-pattern-mobile.svg')",
      },

      colors: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(275, 100%, 97%)",
        third: "hsl(292, 16%, 49%)",
        fourth: "hsl(292, 42%, 14%)",
      },

      fontSize: {
        xxs: "8px",
      },

      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },

      height: {
        0.25: "1px",
      },

      fontFamily: {
        workSans: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
