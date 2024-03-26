/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'rubik-doodle': ['"Rubik Doodle Shadow"', 'system-ui'],
      },
      boxShadow: {
        regular: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('daisyui')],
};
