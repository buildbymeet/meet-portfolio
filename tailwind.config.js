/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070a14',
        panel: '#0d1224',
        blade: '#22d3ee',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        jp: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
}
