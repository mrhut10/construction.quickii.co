const dotenv = require('dotenv');
const postCssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Quickii Construction',
    description: 'Have the experience of a lifetime with Quickii Construction!',
    author: 'Quickii Construction',
    siteUrl: 'https://www.construction.quickii.co',
    facebook: '#',
    instagram: '#',
    instagramAccessToken: process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN,
    phone: '1800 QUI CKI',
    address: {
      line1: '123 Quick Street',
      line2: 'Port Macquarie, NSW 2444',
      googleMaps: 'https://goo.gl/maps/ZeosXPgMEVKdwikH8',
    },
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.190317341378!2d152.8248501113499!3d-31.45411988787978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b76000716e65573%3A0x637654d59c847317!2s15%20Chancellors%20Dr%2C%20Thrumster%20NSW%202444!5e0!3m2!1sen!2sau!4v1584338013409!5m2!1sen!2sau',
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
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
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
