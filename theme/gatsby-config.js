function GatsbyConfig(options) {
  // const { contentPath = "pages" } = options
  const { syntaxHighlight = true } = options;
  return {
    plugins: [
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          remarkPlugins: [require("remark-slug"), require("remark-emoji")],
          defaultLayouts: {
            default: require.resolve("./src/templates/Page.tsx"),
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
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: `src/pages`,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: `src/posts`,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: `src/images`,
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
    ],
  };
}

module.exports = GatsbyConfig;
