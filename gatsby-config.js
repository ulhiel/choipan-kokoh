/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://www.choipan.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['300','400','700']
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap'
  ],
}
