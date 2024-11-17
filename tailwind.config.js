/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#0F0F0F',
        'colorDark': '#121212',
        'colorLigthDark': '#222222',
      }
    },
  },
  plugins: [],
}

