const { colors, lineHeight, screens } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: '#0e2c59',
      'primary-400': '#0d3380',
      accent: '#ed2087',
      base: '#21211f',
      'base-light': '#e4e5df',
    },
    width: {
      '55': '55%',
      '1/3': '33.33%',
      '2/3': '66.66%',
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '1/3': '33.33%',
      '45': '45%',
      '55': '55%',
    },
    lineHeight: {
      ...lineHeight,
      looser: 2.5,
    },
  },
  variants: {
    textColor: ['hover', 'focus', 'active'],
  },
  plugins: [],
  screens,
};
