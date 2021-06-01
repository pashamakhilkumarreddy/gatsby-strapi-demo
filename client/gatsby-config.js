/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Strapi Demo",
    description: "A sample application built using React Gatsby",
    author: "Akhil Kumar Reddy Pasham",
    twitterUsername: "",
    linkedUsername: "",
    image: "",
    siteUrl: "http://localhost:8000/",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
        ignore: [`**/\.*`, `${__dirname}/src/assets/styles`],
      },
    },
  ],
}
