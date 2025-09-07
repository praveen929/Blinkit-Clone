/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },  
          '40%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '70%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 0.9s linear ',
      },
    },
  },
  plugins: [],
};