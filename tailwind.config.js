/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        subText: "#8892b0",
      },
    },
  },
  plugins: [],
};
