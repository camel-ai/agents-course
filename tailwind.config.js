/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f2ff',
          100: '#e9e7ff',
          200: '#d5d3ff',
          300: '#b5afff',
          400: '#9081ff',
          500: '#6d4fff',
          600: '#5a2afd',
          700: '#4c19e8',
          800: '#4215cc',
          900: '#36139f',
          950: '#1e096c',
        }
      }
    },
  },
  plugins: [],
};