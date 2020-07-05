/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * TODO: Document this
 */
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, "src/pages"),
    path.join(program.directory, "src/posts"),
    path.join(program.directory, "src/images"),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

/**
 * TODO: Document this
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    });
  }
};

/**
 * TODO: Document this
 * https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/#create-pages-from-sourced-mdx-files
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`${__dirname}/src/templates/Post.tsx`),
      context: { id: node.id },
    });
  });
};
