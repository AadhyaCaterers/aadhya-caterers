/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf0',
          100: '#fdf8d4',
          200: '#fbef99',
          300: '#f7e055',
          400: '#f2cd25',
          500: '#d4a017',
          600: '#b8860b',
          700: '#9a6e0a',
          800: '#7d5808',
          900: '#5c3f06',
        },
        cream: '#fdf6e3',
        dark: '#1a0e02',
        maroon: '#7b1c2a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Cormorant Garamond"', 'serif'],
        display: ['"Great Vibes"', 'cursive'],
        body: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
