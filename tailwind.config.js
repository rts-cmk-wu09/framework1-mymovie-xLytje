/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 5px 1px rgb(255 255 255 / 0.8);",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
