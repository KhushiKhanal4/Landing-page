/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
         custom1:["Anton", "sans-serif"],
         custom2:["lobster", "sans-serif"],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '4px 4px 8px rgba(0, 0, 0, 0.2)',
        'lg': '6px 6px 12px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [ function({ addUtilities }) {
    addUtilities({
      '.text-shadow': {
        textShadow: '2px 2px rgb(0, 0, 0)',
      },
      '.text-shadow-md': {
        textShadow: '4px 4px 8px rgba(0, 0, 0)',
      },
      '.text-shadow-lg': {
        textShadow: '6px 6px 12px rgba(0, 0, 0)',
      },
    })
  }
]
}

