function GatsbyConfig(options) {
  // const { contentPath = "pages" } = options
  const { syntaxHighlight = true } = options
  return {
    plugins: [
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          remarkPlugins: [require("remark-slug"), require("remark-emoji")],
          defaultLayouts: {
            default: require.resolve("./src/components/Layout"),
          },
          gatsbyRemarkPlugins: [syntaxHighlight && `gatsby-remark-prismjs`].filter(Boolean),
        },
      },
      "gatsby-plugin-theme-ui",
    ],
  }
}

module.exports = GatsbyConfig
