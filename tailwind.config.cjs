/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        mxs: "380px",
      },
    },
  },
  plugins: [],
}
