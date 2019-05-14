const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    autoprefixer({ grid: true }),
    // ...
  ],
};
