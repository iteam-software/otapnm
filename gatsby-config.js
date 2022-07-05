/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "OTAP NM",
  },
  plugins: [
    `gatsby-image`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/static/assets`,
              name: 'images',
          },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/our-stories`,
        name: `our-stories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/scholarships`,
        name: `scholarships`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/sponsor`,
        name: `sponsor`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/scholarship_application`,
        name: `scholarship_application`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/carousel`,
        name: `carousel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/newsletter`,
        name: `newsletter`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: `gatsby-remark-images`,
              },
          ],
      },
  },
  ],
};
