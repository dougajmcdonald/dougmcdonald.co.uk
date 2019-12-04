/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Doug McDonald - Blog",
    titleTemplate: "%s · Superblog!",
    description:
      "Doug McDonald's personal blog, articles about coding, web-design and user experience.",
    url: "https://www.dougmcdonald.co.uk", // No trailing slash allowed!
    image: "/image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@dougajmcdonald",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-plugin-react-helmet`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle:
                "margin-left: 0!important; margin-right: 0!important;",
            },
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/blog/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
