/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  /* Kept on the class strategy deliberately. The site ships a single light
     theme; leaving this unset would switch Tailwind to the media strategy,
     where any stray dark: variant activates off the visitor's OS preference. */
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["DM Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Schibsted Grotesk", ...defaultTheme.fontFamily.sans],
      },
      /* Brand orange. Tracks Tailwind's orange closely so existing
         orange-* utilities stay in tune, with 500-700 deepened a step
         so solid buttons read less candy. */
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f2761a",
          600: "#e4610c",
          700: "#bd4a08",
          800: "#963c0d",
          900: "#7a330f",
          950: "#431807",
        },
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 12px 28px -20px rgb(15 23 42 / 0.16)",
        "card-hover":
          "0 1px 2px rgb(15 23 42 / 0.05), 0 18px 36px -20px rgb(15 23 42 / 0.22)",
        header:
          "0 1px 0 rgb(15 23 42 / 0.06), 0 8px 24px -18px rgb(15 23 42 / 0.3)",
      },
      maxWidth: {
        /* Keeps running text near 68 characters. */
        measure: "68ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
