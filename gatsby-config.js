require("dotenv").config();
const config = require('./data/SiteConfig')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    tagline: config.siteTagline,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'wp.idst.org',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        //acfOptionPageIds: ["headless_settings", "option_page_1", "option_page_2"],
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lora`,
          `patua one` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
