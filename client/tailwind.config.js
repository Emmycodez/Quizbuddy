/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
         lightGray: 'rgb(236, 236, 236)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Arial: ["Arial", "Helvetica", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};