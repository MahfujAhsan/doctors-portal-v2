/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorsPortalTheme: {
          primary: "#1b4d89",
          secondary: "#f9e45b",
          accent: "#BD9C74",
          neutral: "#BAD8E0",
          info: "#D668E3",
          success: "#6db784",
          warning: "#FFAB00",
          error: "#C53678",
          "base-100": "#eddcd9"
        }
      }
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")]
}