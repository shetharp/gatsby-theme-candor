const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");

/**
 * Create folders for pages, posts, and images if they don't exist in the user's site.
 * This prevents Gatsby from throwing a build error.
 * https://www.gatsbyjs.org/docs/themes/conventions/#initializing-required-directories
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
