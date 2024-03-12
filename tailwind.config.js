/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('./src/assets/header-image.jpg')"
      }
    },
  },
  plugins: [],
}

