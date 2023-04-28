/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      scale: {
        '1075': '107.5',
      }
    }
  },
  plugins: []
};