/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [ "./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
     josefin :[ 'Josefin Sans', 'sans-serif'],
     lora : ['Lora', 'serif'],
     poppins :[ 'Poppins', 'sans-serif'],
     roboto :[ 'Roboto', 'sans-serif'],
     rubik :[ 'Rubik Iso', 'cursive'],
      }
  },
},
  plugins: [],
}

