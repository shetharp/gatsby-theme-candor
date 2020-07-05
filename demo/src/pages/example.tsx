import React from "react";
import PropTypes from "prop-types";
import { PageProps } from "gatsby";
import { Layout } from "@shetharp/gatsby-theme-candor";

const TypescriptExamplePage: React.FC<PageProps> = (props) => {
  return (
    <Layout>
      <h1>Path:</h1>
      Example page using typescript.
      <pre>{props.path}</pre>
    </Layout>
  );
};
export default TypescriptExamplePage;

TypescriptExamplePage.propTypes = {
  path: PropTypes.string.isRequired,
};
