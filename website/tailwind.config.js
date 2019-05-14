const { colors, lineHeight } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: '#0e2c59',
      accent: '#ed2087',
      base: '#21211f',
      'base-light': '#e4e5df',
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
    },
    lineHeight: {
      ...lineHeight,
      looser: 2.5,
    },
  },
  variants: {},
  plugins: [],
};
