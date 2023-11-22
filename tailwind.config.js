/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-blue': '#0d2a4a',
        'medium-blue': '#43627f',
        'light-blue': '#a4bad2',
        'steel-blue': '#dce3ed',
        'castanha-profunda': '#BC4749'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif']
      },
    },
    plugins: [],
  }
}
