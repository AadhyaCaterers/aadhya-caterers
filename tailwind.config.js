/** @type {import('tailwindcss').Config} */
// Theme inspired by premium Hyderabadi catering reference styling
// (cream-dominant background + warm-dark sections + gold accent + red primary)
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surface
        background: '#FFF7E5', // page default cream
        card:       '#FFFBEC', // cream cards
        cream:      '#FFF1D6',
        'cream-2':  '#FFF1D6',
        'cream-3':  '#EFE3CB',

        // Foreground / dark
        ink:        '#221F1F',
        dark:       '#221F1F',
        'dark-2':   '#2A2424',
        'dark-3':   '#1A1717',

        // Primary red (deep maroon, like reference brand color)
        primary:    '#B62121',
        'primary-dark': '#7A1F1F',

        // Gold accent (muted reference gold, not neon)
        gold: {
          50:  '#FBF6E8',
          100: '#F4E9C8',
          200: '#EAD49A',
          300: '#E0C68A',
          400: '#D2B273',
          500: '#C9A857',
          600: '#B8923D',
          700: '#8B6B2A',
          800: '#6E5320',
          900: '#4F3B17',
        },

        // Legacy alias kept for backward compat (so any older references keep working)
        maroon: '#B62121',
      },
      fontFamily: {
        // Reference-style premium catering typography
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],   // headings
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],     // body / UI
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        premium: '0 8px 32px rgba(34,31,31,0.12)',
        gold:    '0 4px 20px rgba(201,168,87,0.30)',
        card:    '0 4px 16px rgba(34,31,31,0.06)',
      },
    },
  },
  plugins: [],
};
