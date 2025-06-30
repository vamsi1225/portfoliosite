const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
      'h1': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
      'h2': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
      'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
      'p': ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }],
      'small': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }],
    },
    },
  },
  plugins: [],
};


