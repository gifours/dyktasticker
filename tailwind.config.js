/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#11235A',
        primary2: '#F4D160',
        secondary: '#64748b',
        dark: '#1f3e72',
        dark1: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        body: ['Poppins']
      },
    },
  },
  plugins: [],
}

