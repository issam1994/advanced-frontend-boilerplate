module.exports = {
  mode: "jit", // Just-In-Time Compiler
  purge: ["./src/**/*.html", "./src/**/*.php", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class',
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        productSans: ["Product Sans", "sans-serif", "arial", "monospace"],
      },
      colors: {
        brand: {
          primary: "blue",
          secondary: "gray",
          success: "green",
          info: "purple",
          danger: "red",
        },
      },
      spacing: {
        // plugin by issam
        ...(() => {
          let utilities = {};
          for (let i = 0; i <= 128; i++) {
            utilities[`${i}-px`] = `${i * 0.0625}rem`;
          }
          return utilities;
        })(),
      },
      fontSize: {
        ...(() => {
          let utilities = {};
          for (let i = 0; i <= 128; i++) {
            utilities[`${i}-px`] = `${i * 0.0625}rem`;
          }
          return utilities;
        })(),
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
    require("tailwind-bootstrap-grid")(),
  ],
};
