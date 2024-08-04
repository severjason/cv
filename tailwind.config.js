/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ['var(--font-exo2)', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.yellow,
      },
    },
  },
  plugins: [],
};
