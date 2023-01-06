/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { min: "100px", max: "700px" },
      md: { min: "701px", max: "1200px" },
      lg: { min: "1201px", max: "1800px" },
    },
  },
  plugins: [],
  variants: {
    color: ["responsive", "hover", "focus", "active"],
    visibility: ["responsive", "hover", "focus"],
  },
};
