/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#CF1F30',
      'secondary': '#FDEF6D',
      'dark': '#000000',
      'light': '#ffffff'
    },
    fontFamily: {
      sans: ['Noto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
