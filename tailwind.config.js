/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      'mobile' : '0px',
      'tablet' : '768px',
      'desktop' : '1200px'
    },
    color : {
      defaultBlack : '#4D1F03'
    },
    extend: {},
  },
  plugins: [],
}

