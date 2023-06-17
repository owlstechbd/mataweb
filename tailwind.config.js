/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: "1rem",
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
        '2xl': '1300px',
      },
    },
  },
  plugins: [
  ],
} 
