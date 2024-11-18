/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#204077',
        secondary: '#ce9931',
        bg:"#fefeff"
      }
    },
  },
  plugins: [],
};
