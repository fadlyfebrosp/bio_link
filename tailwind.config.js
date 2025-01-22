/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.8s ease-in-out forwards',
        fadeInRight: 'fadeInRight 0.8s ease-in-out forwards',
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
        typing: 'typing 3s steps(40) 1s 1 normal both',  // Typing animation
        blink: 'blink 0.75s step-end infinite', // Cursor blink effect
      },
    },
  },
  plugins: [],
};
