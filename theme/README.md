# gatsby-theme-candor

Gatsby Theme Candor is a simple and honest theme that will help you set up a production-grade website in no time.

Out of the box, it provides support for Typescript, MDX, and a custom theme built using the `theme-ui` spec.
It also comes pre-configured to support a blog, frontmatter, syntax highlighting in code blocks, and responsive images.

### 🐨 View [Demo Site →](https://shetharp.github.io/gatsby-theme-candor/)

## Installation

1. Install the theme

```shell
npm i --save @shetharp/gatsby-theme-candor
# or
yarn add @shetharp/gatsby-theme-candor
```

2. Add the theme to your `gatsby-config.js` files

```js
// gatsby-config.js

module.exports = {
  plugins: ["@shetharp/gatsby-theme-candor"],
};
```

3. Create `.mdx` files in your `src/pages` and `src/posts` folders.

<!-- prettier-ignore-start -->
```mdx
// pages/index.mdx

---
title: Hello World! This is a frontmatter title.
author: Arlo Medi
date: 2020-07-30
---

# Hello World!

Lorem ipsum dolor sit amet.
```
<!-- prettier-ignore-end -->

## Features

This Gatsby theme lets you easily set up a website with pages and blog posts from `.mdx` files.

- Pages are sourced from the `src/pages` directory
- Posts are sourced from the `src/posts` directory
- This is made possible with the [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/),
  [gatsby-plugin-page-creator](https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator/), and
  [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/) plugins

This theme also supports the following out of the box:

- Frontmatter querying and referencing from your MDX files
- Syntax highlighting in your MDX code blocks with [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
- Responsive optimized images with [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/) and [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)
- Theming with [gatsby-plugin-theme-ui](https://www.gatsbyjs.org/packages/gatsby-plugin-theme-ui/)
- Type-checking with Typescript

## Tutorial

_Learn more about how this theme was developed: [TODO](#!)_
