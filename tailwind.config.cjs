/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,jsx}"],   
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'mxs': '380px'
      }
    },
  },
  plugins: [],
}