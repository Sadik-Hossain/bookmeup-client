/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "770px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "771px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
