/** @type {import('tailwindcss').Config} */
// LUXURY WEDDING CATERING THEME
// Bright, cream-dominant, gold-accented, soft-red CTAs.
// NO black, NO dark UI — only premium light luxury palette.
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Light luxury surfaces ────────────────────────────────
        background:  '#FFF7E5', // page default cream
        ivory:       '#FFFBF2', // lightest
        cream:       '#FFF7E5', // main page bg
        'cream-warm':'#FBEFD6', // alt section
        beige:       '#F4E4C9', // warmer beige section
        'rose-cream':'#FCEEE8', // soft rose for testimonials
        card:        '#FFFFFF', // pure white cards on cream

        // ── Warm dark "ink" tones (NOT black) ────────────────────
        ink:         '#3B2A1F', // body text
        'ink-soft':  '#6B5544',
        'ink-mute':  '#8C7763',

        // ── Soft elegant red CTA ─────────────────────────────────
        primary:     '#C0392B',
        'primary-dark':'#962E22',

        // ── Deep luxury maroon (footer / CTA banner) ─────────────
        maroon:      '#6B1F1F',
        'maroon-deep':'#4A1414',

        // ── Gold accents ─────────────────────────────────────────
        gold: {
          50:  '#FBF6E8',
          100: '#F4E9C8',
          200: '#EAD49A',
          300: '#E5C77F',
          400: '#D2B273',
          500: '#C9A14A', // primary gold
          600: '#B8923D',
          700: '#8B6B2A',
          800: '#6E5320',
          900: '#4F3B17',
        },

        // Soft rose accent
        rose: {
          100: '#FCEEE8',
          200: '#F6D3CA',
          300: '#E8A29C',
        },
      },
      fontFamily: {
        // Premium catering reference typography
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        premium: '0 18px 50px rgba(139,107,42,0.18)',
        gold:    '0 10px 30px rgba(201,161,74,0.35)',
        card:    '0 8px 28px rgba(107,85,68,0.10)',
        soft:    '0 4px 18px rgba(107,85,68,0.08)',
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #B8923D 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFFBF2 0%, #FFF7E5 50%, #FBEFD6 100%)',
        'rose-gradient':  'linear-gradient(135deg, #FCEEE8 0%, #FFF7E5 100%)',
        'maroon-gradient':'linear-gradient(135deg, #6B1F1F 0%, #4A1414 100%)',
      },
    },
  },
  plugins: [],
};
