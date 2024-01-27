/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        'layout': 'auto 1fr auto',
        'layout-md': '1fr auto'
      },
      gridTemplateColumns:{
        'layout-md': '4fr 2fr 6fr'
      },
      colors: {
        'bgcolor': {
          'field-cursor':'#F5F5F5',
          'main':'#F8FAFF',
          'form': '#FFFFFF'
        },
        'gray':{
          'fieldcolor-dark':'#EAEAEA',
          'text-secondary': '#858585',
          'icon-light': '#858585',
          '400': '#9A9AA9'
        },
        'blue':{
          'link':'#346BD4',
          'primary':'#605BFF',
          '700': '#030229'
        },
        'linear-gradient':{
          'color1':'#ACA9FF',
          'color2':'#ACA9FF00'
        },
        'white':{
          'primary': '#FFFFFF',
          'ghost': '#fafafb'
        },
        'gray-dark': '#273444',
        'black': '#000000',
        'dodoria-100': '#D33030'
      }
    },
  },
  plugins: [],
}

