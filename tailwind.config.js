/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
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