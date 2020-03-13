const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          ...defaultTheme.colors.blue,
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [
    tailwindUI({
      layout: 'sidebar',
    }),
  ],
};
