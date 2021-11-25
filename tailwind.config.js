const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Barlow'],
        secondary: ['Fraunces']
      },

      colors: {
        softRed: 'var(--soft-red)',
        myYellow: 'var(--yellow)',
        darkCyan: 'var(--dark-desaturated-cyan)',
        darkBlue: 'var(--dark-blue)',
        moderateCyan: 'var(--dark-moderate-cyan)',
        darkDesaturatedBlue: 'var(--very-dark-desaturated-blue)',
        vdarkGrayishBlue: 'var(--very-dark-grayish-blue)',
        darkGrayishBlue: 'var(--dark-grayish-blue)',
        grayishBlue: 'var(--grayish-blue)',
        myWhite: 'var(--white)',
      },

      // backgroundImage: {
      //   hero: "url('/public/images/desktop/image-header.jpg')"
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
