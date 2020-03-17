const postCssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: 'Quickii Construction',
    description: 'Have the experience of a lifetime with Quickii Construction!',
    author: 'Quickii Construction',
    siteUrl: 'https://www.construction.quickii.co',
    facebook: '#',
    instagram: '#',
    phone: '1800 QUI CKI',
    address: {
      line1: '123 Quick Street',
      line2: 'Port Macquarie, NSW 2444',
      googleMaps: 'https://goo.gl/maps/ZeosXPgMEVKdwikH8',
    },
    hours: '9am – 5pm, Monday – Friday',
    hero: {
      line1: 'Creating better',
      line2: 'places',
      copy: [
        "Quickii Construction make houses. That's it.",
        'If you want someone to make a house for you, give us a call!',
      ],
      cta: { text: 'Call now', link: 'tel:' },
    },
    contact: {
      heading: 'Contact us',
      copy:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptate tempore iste laboriosam. Amet, quae nihil nesciunt reiciendis modi error dolor provident ipsa, laborum atque beatae in necessitatibus nam pariatur!',
    },
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-plugin-canonical-urls',
    //   options: {
    //     siteUrl: 'https://quickii-skydiving.netlify.com',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-tailwindcss',
        short_name: 'starter',
        start_url: '/',
        background_color: fullConfig.theme.colors.brand['700'],
        theme_color: fullConfig.theme.colors.brand['700'],
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwind('./tailwind.config.js'),
          autoprefixer,
          cssnano,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        extractors: [/[\w-/.:]+(?<!:)/g],
        purgeOnly: ['src/css/tailwind.css'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
