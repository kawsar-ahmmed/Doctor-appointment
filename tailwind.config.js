/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  themes: [
    {
      mytheme: {
        "primary": "#19D3AE",
        "secondary": "#0FCFEC",
        "accent": "#3A4256",
      },
    }
  ],
}