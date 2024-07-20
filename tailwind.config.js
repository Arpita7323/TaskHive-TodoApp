/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a202c', 
          text: '#ffffff',   
          
        },
        light: {
          DEFAULT: '#ffffff', 
          text: '#1a202c',    
          
        },
      },
    },
  },
  plugins: [],
}


