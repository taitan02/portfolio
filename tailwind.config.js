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
    keyframes: {
      sidebar_in: {
        "0%": {
          opacity: 0,
          transform: "translateX(100%)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
    },
    animation: { sidebar_in: "sidebar_in 0.3s ease-in-out" },
  },
  plugins: [],
};
