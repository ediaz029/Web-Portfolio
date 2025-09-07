/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#010103',
          200: 'rgba(1, 1, 3, 0.8)',
          300: '#1a1a1a',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        'terminal': "url('/assets/terminal.png')",
        'gray-gradient': 'linear-gradient(to right, #BEC1CF 0%, #D5D8EA 60%, #D5D8EA 100%)',
      },
    },
  },
  plugins: [],
};