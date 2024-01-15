/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fff1f2',
          '100': '#ffe3e4',
          '200': '#ffccd1',
          '300': '#ffa1aa',
          '400': '#ff8694',
          '500': '#f93a55',
          '600': '#e7173f',
          '700': '#c30d34',
          '800': '#a30e33',
          '900': '#8b1032',
          '950': '#4e0316',
        },
      }
    },
  },
  plugins: [],
}