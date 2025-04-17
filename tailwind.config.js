/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "jakarta": ['"Plus Jakarta Sans"', 'sans-serif'],
      "mluvka": ['Mluvka', 'sans-serif'],
      'grace': ['"Covered By Your Grace"', 'cursive'],
      'poppins':['Poppins, sans-serif'],
      'nunito':['Nunito Sans, sans-serif']
    },
    keyframes: {
      'fade-up': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
    },
    animation: {
      'fade-up': 'fade-up 0.6s ease-out forwards',
    },
  },
  plugins: [],
}