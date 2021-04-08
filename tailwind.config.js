module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        no: '0px',
      },
      colors: {
        primary: "#96e7e1",
        secondary: "#d7bbee",
        third: "#fdf1d7",
        custom: "#edf8f4",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
