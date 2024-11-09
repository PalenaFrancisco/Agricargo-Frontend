/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'colorDePrueba': '#6c6c6c',
        'colorGrisFondo': '#242424'
      }
    },
  },
  plugins: [],
};

