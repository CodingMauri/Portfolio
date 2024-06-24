/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#EDEDED",
        secondary:"#1F1F1F"
      },
      fontFamily:{
        ronaldson: ["ronaldson", "sans-serif"],
        sora: ["sora", "sans-serif"],
        varena:["varena","sans-serif"]
      }
    },
  },
  plugins: [],
}