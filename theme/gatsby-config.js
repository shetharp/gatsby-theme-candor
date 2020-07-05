/**
 * Plugin `gatsby-source-filesystem` will automatically source files from "src/pages"
 * Plugin `gatsby-plugin-page-creator` will automatically create pages from files in "src/pages"
 */
function GatsbyConfig(options) {
  const { syntaxHighlight = true } = options;
  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: "src/posts",
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "src/images",
        },
      },
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: "src/posts",
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          remarkPlugins: [require("remark-slug"), require("remark-emoji")],
          defaultLayouts: {
            default: require.resolve("./src/templates/Page.tsx"),
            posts: require.resolve("./src/templates/Post.tsx"),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 800,
              },
            },
            syntaxHighlight && "gatsby-remark-prismjs",
          ].filter(Boolean),
        },
      },
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
    ],
  };
}
module.exports = GatsbyConfig;
