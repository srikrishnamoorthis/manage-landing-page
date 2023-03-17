/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
        screens: {
            'md': '800px'
        },
        colors: {
            'bright-red': '#F25F3A',
            'dark-blue': {
                600: '#242D52',
                700: '#1D1E25',                
            },
            'grayish-blue': '#9095A7',
            'pale-red': '#FFEFEB',
            'light-gray': '#FAFAFA'
        },
        fontFamily: {
            'be-vietnam': ['Be Vietname Pro']
        }
    },
  },
  plugins: [],
}
