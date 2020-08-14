<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Workspace starter for gatsby-theme-candor
</h1>

To start developing your own theme using this repo as a starting point:

```shell
gatsby new my-theme https://github.com/shetharp/gatsby-theme-candor
cd my-theme
yarn
yarn workspace demo develop
```

To create a Gatsby site with the theme itself as a starting point:

- Follow the installation instructions for [gatsby-theme-candor](https://www.npmjs.com/package/@shetharp/gatsby-theme-candor)

### 🐨 View [Demo Site →](https://shetharp.github.io/gatsby-theme-candor/)

## Features

This theme workspace comes pre-loaded with the following:

Configurations for Typescript, ESLint, and Husky

- `yarn lint` to manually run ESLint
- `yarn lint:fix` to manually run ESLint and auto-fix most issues
- `yarn type-check` to run the Typescript compiler
- **Note:** Husky will run `yarn lint:fix` on staged files during pre-commit, and it will run `yarn type-check` on all files during pre-push

**`theme`** workspace

- Sources pages and posts from two seprate directories
- MDX support with frontmatter querying and referencing
- Syntax highlighting for code blocks in MDX
- Responsive optimized images
- A custom theme built with `gatsby-plugin-theme-ui`
- Documented code and type-checking with Typescript

**`demo`** workspace

- Consumes the theme and builds a site with example content
- Has a [Blog Index](http://localhost:8000/blog) page to view a list of all the pages in the demo site
- Has a [Theme Preview](http://localhost:8000/theme-preview) page to view the theme in action
- Has a [Theme JSON](http://localhost:8000/theme-json) page to view the raw theme JSON
- Ample examples of component Shadowing in Gatsby

### `theme`

This directory is the theme package itself. You should change the
`package.json` name field and the corresponding dependency in the
example directory's `package.json`/`gatsby-config.js` to match the chosen name.

### `demo`

This is an demo usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

You can run the example with:

```shell
yarn workspace demo develop
```

## Tutorial

I wrote up a developer guide on how I built this theme. Give it a read if you want to build your own Gatsby theme or build on top of this one.

[Creating New Gatsby Theme with Typescript, MDX, and Theme-UI](https://hackernoon.com/creating-new-gatsby-theme-with-typescript-mdx-and-theme-ui-tz1c3u3u)
