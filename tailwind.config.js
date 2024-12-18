/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minha-cor-1': '#1a2f45',
        'minha-cor-2': '#c7d2d6'
      },
    },
  },
  plugins: [],
}