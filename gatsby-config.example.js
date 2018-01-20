module.exports = {
  siteMetadata: {
    title: 'José Manuel Lucas / Frontend Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `###`,
        accessToken: `###`,
      },
    },
  ],
};
