import React from "react";
import { graphql, PageProps } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { Badge, Text } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post: React.FC<PageProps> = (props) => {
  const { data } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { mdx, site } = data as any;

  return (
    <Layout>
      <Badge marginRight={1}>{site.siteMetadata.title}</Badge>
      <Badge variant="accent">
        <Text variant="mono">Post.tsx</Text>
      </Badge>
      <h1>Frontmatter: {mdx.frontmatter.title}</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};
export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.any,
    site: PropTypes.any,
  }).isRequired,
};

export const postQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
