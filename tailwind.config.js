/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  //System colors
// Brightly Orange: #ff1e00
// Dimly Blue: #e8f9fd
// Alert/Highlight Green: #59ce8f
  theme: {
    extend: {
      boxShadow: {
        orange: '0 2px 20px 0 rgba(255,105,26,.4)', // Define the orange shadow color
      },
    },
  },
  plugins: [],
}

