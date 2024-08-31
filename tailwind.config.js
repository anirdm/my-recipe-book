/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Libre Franklin"', "sans-serif"], 
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(222,221,220,1) 0%, rgba(227,226,226,1) 19%, rgba(250,250,251,1) 61%)',
      }
    },
  },
  plugins: [],
}

