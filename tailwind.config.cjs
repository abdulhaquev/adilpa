/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cinematic: '#0B0F14',
        accent1: '#9D4EDD',
        accent2: '#00F5D4',
      },
      fontFamily: {
        heading: ['Sora', 'Playfair Display', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(157,78,221,0.4), 0 0 24px rgba(0,245,212,0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' })
  ],
}
