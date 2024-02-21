/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
  ],
}
