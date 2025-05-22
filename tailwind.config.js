
import { fontFamily } from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'primary': '#0096ff',
        'celeste' : '#2dc3f6'
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
      /* aspectRatio: {
        '4/3': '4 / 3',
      } */
    },
    
  },
  plugins: [],
}


  