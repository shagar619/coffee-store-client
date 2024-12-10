/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        navbar: "url('./src/assets/more/15.jpg')",
        hero: "url('./src/assets/more/3.png')",
        category: "url('./src/assets/more/10.png')",
        footer: "url('./src/assets/more/13.jpg')",
        products: "url('./src/assets/more/1.png')",
        formBG: "url('./src/assets/more/11.png')",
        loginBG: "url('./src/assets/more/28.jpg')",
        signinBG: "url('./src/assets/more/24.jpg')"
      }
    },
  },
  plugins: [require('daisyui'),],
}

