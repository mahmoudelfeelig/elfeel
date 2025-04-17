module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        },
        purple: {
          400: '#9b59b6',
          500: '#8e44ad',
        },
        magenta: {
          400: '#e74c3c',
          500: '#c0392b',
        },
      },
    },
  },
  plugins: [],
}