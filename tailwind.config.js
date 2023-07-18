/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    fontSize: {

      sm: ["16px", "28px"],
      base: ["22px", "33px"],
      base_sm: ["19px", "28.5px"],
      lg: ["24px", "26.4px"],
      hero_title: ["68px", "74.8px"],
      title: ["50px", "55px"],
      title_sm: ["40px", "44px"],
      btn: ["18px", "18px"],
    },

  },
  plugins: [],
};
