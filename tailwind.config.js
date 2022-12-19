/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'horta': {
          500: '#26946f',
          600: '#238665'
        },
        'aipim': {
          500: '#54412f'
        }
      }
    },
  },
  plugins: [],
}
