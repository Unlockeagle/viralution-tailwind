import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#fafafa",
      secondary: "#9333ea",
      parrafo: "#202020",
      border: "#020202",
      button: "#FFAD13",
    },
  },
  plugins: ["prettier-plugin-tailwindcss", animations],
};
