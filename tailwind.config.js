/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'it-bg': "url('../src/assets/imgs/loginbg.png')",
      },
      colors:{
        'primary':'#5706C5',  
        'secondary':'#F66B0E',  
        'heading':'#2F2F32',  
        'text_color':'#8F8F8F',  
        
      
      },

    },
  },
  plugins: [],
}