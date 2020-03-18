const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          ...defaultTheme.colors.yellow,
        },
        'transparent-black': {
          '25': 'hsla(0, 0%, 0%, 0.25)',
          '50': 'hsla(0, 0%, 0%, 0.50)',
          '75': 'hsla(0, 0%, 0%, 0.75)',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        full: '100%',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    tailwindUI({
      // layout: 'sidebar',
    }),
  ],
};
