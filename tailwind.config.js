/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      'mobile' : '576px',
      'desktop' : '1440px'
    },
    extend: {},
  },
  plugins: [],
}

