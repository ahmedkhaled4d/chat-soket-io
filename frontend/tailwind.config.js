/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "dark-bg": "#075e54",
        "light-bg": "#ece5dd",
      },
    },
  },
  plugins: [],
};
