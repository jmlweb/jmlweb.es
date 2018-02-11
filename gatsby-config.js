require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://jmlweb.es',
    title: 'José Manuel Lucas / Frontend Developer',
    keywords: 'José Manuel Lucas, Frontend, Development',
    googleVerification: 'C_zrk0we724IL2r6BSTEf2U9ZVaIIYVsFR16eHuk-Nk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-54381071-6',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ffffff',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'img',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-external-links',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'José Manuel Lucas',
        short_name: 'jmlweb',
        lang: 'es-ES',
        start_url: '/',
        background_color: '#e4e3f5',
        theme_color: '#362bdb',
        display: 'minimal-ui',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
