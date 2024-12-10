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
        'COLOR-2': '#121212',
        'COLOR-3': '#222222',
        'COLOR-4': '#f1f1f1',
        'COLOR-5': '#0f0f0f',
        'COLOR-6': '#aaa',
      }
    },
  },
  plugins: [],
}

