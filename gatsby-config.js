const postCssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: 'Quickii Skydiving',
    description: 'Have the experience of a lifetime with Quickii Skydiving!',
    author: 'Quickii Skydiving',
    siteUrl: 'https://quickii-skydiving.netlify.com',
    navigation: {
      primary: { text: 'Book now', link: '/booking' },
      secondary: [
        { text: 'Booking', link: '/booking' },
        { text: 'Pricing', link: '/pricing' },
        { text: 'About', link: '/about' },
        { text: 'Contact', link: '/contact' },
      ],
    },
    hero: {
      line1: 'The thrill of',
      line2: 'a lifetime',
      copy:
        "Experience beautiful Port Macquarie from 40,000ft above sea-level. Only 4 people have died so far, and it wasn't completely our fault...",
      primaryButton: { text: 'Book now', link: '/#book-now' },
      secondaryButton: { text: 'Pricing', link: '/#pricing' },
    },
    about: {
      heading1: 'Skydiving',
      heading2: 'The best view in town!',
      copy:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
      feature1: {
        heading: 'Low mortality rate',
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi deleniti esse officia non, accusamus sapiente veritatis porro laboriosam debitis, eligendi incidunt facilis eaque impedit ipsa quod in quidem! A.',
      },
      feature2: {
        heading: 'Painless death',
        copy:
          'Nulla dolor quasi nobis culpa, accusantium inventore? Tenetur perspiciatis nobis perferendis quas quaerat sint dolore ab, iure suscipit, repudiandae deleniti cumque exercitationem et nihil iste sequi! Deleniti blanditiis natus consequatur.',
      },
      feature3: {
        heading: 'Pretty good view',
        copy:
          'Eius alias illum, rerum adipisci corporis ipsa reprehenderit quasi expedita, laborum impedit tenetur. Dolorum, omnis. Assumenda amet laudantium ipsum dolor doloribus eius ducimus at, commodi repellat rem, repellendus, molestias officiis!',
      },
      feature4: {
        heading: "It's actually pretty fun",
        copy:
          'Commodi dolores, autem exercitationem error quis laboriosam quasi pariatur eius ullam earum. Inventore placeat ut, incidunt perferendis, consequatur soluta dolorem nisi amet aspernatur molestias doloribus minus adipisci cumque tenetur vel.',
      },
    },
    testimonial: {
      quote:
        "Holy shit! I took some acid right before jumping out of the plane and it was intense. I'm still high right now!",
      name: 'Jenna Jameson',
      role: "CEO, Janelle's Escorts",
    },
    pricing: {
      heading: 'A near-death experience, at a reasonable rate!',
      copy:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.',
      package1: {
        name: 'Single Tandem',
        price: '350',
        features: [
          'Pariatur quod similique',
          'Sapiente libero doloribus',
          'Vel ipsa esse repudiandae',
        ],
      },
      package2: {
        name: 'Double Tandem',
        price: '299',
        features: [
          'Get a discounted rate when you go with a friend!',
          'Dolorem vero ratione voluptates',
          'Qui sed ab doloribus voluptatem dolore',
          'Laborum commodi molestiae id et fugiat',
          'Nam ut ipsa nesciunt culpa modi dolor',
        ],
      },
      package3: {
        name: 'Photo & Video',
        price: '95',
        features: [
          'Pariatur quod similique',
          'Sapiente libero doloribus',
          'Vel ipsa esse repudiandae',
        ],
      },
    },
    banner: {
      text: 'Skydive from just $299 per person!',
      link: '/#pricing',
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
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
