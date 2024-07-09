module.exports = {
  siteMetadata: {
    greeting: `Hello! `,
    title: `My name is `,
    subtitle: `and I am a Software Developer.`,
    comma: `,`,
    description: `My personal website`,
    author: `Guilherme Teixeira`,
    siteUrl: `https://guiteixeira.dev`,
    blogUrl: `/blog`,
  },
  flags: {
    DEV_SSR: false,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `dimgray`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["Strict-Transport-Security: max-age=63072000"],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#ADB5BD`,
        background_color: `#6C757D`,
        display: `minimal-ui`,
        icon: `src/images/profile-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             greeting
    //             title
    //             description
    //             comma
    //             siteUrl
    //             blogUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map((edge) => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url:
    //                 site.siteMetadata.siteUrl +
    //                 site.siteMetadata.blogUrl +
    //                 edge.node.fields.slug,
    //               guid:
    //                 site.siteMetadata.siteUrl +
    //                 site.siteMetadata.blogUrl +
    //                 edge.node.fields.slug,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Guilherme's Blog",
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: "^/content/",
    //         // optional configuration to specify external rss feed, such as feedburner
    //         link: "https://feeds.feedburner.com/vibranium-dev",
    //       },
    //     ],
    //   },
    // },
  ],
}
