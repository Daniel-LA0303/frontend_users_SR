/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c_prim: "#092635",
        c_seco: "#1B4242",
        c_tert: "#5C8374",
        c_quat: "#9EC8B9",
        hover: "#355555"
      },
    },
  },
  plugins: [],
}
