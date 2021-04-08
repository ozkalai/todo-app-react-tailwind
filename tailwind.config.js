module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#96e7e1",
        secondary: "#d7bbee",
        third: "#fdf1d7",
        custom: "#edf8f4",
      },
      backgroundImage: (theme) => ({
        main: "url('./bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
