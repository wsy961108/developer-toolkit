/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: 'var(--primary)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)'
      },
      inferior: {
        DEFAULT: 'var(--inferior)',
        100: 'var(--inferior-100)',
        200: 'var(--inferior-200)',
        300: 'var(--inferior-300)',
        400: 'var(--inferior-400)',
        500: 'var(--inferior-500)',
        600: 'var(--inferior-600)',
        700: 'var(--inferior-700)',
        800: 'var(--inferior-800)',
        900: 'var(--inferior-900)'
      }
    },
    extend: {}
  },
  plugins: []
}
