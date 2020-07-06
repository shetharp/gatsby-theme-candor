import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { Badge, Text } from "theme-ui";

export type PostProps = PageProps & {
  pageContext: {
    frontmatter: { [k: string]: string };
  };
};

const Post: React.FC<PostProps> = (props) => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <Badge variant="accent">
        <Text variant="mono">Post template</Text>
      </Badge>
      <Badge variant="highlight" marginLeft={1}>
        {data.site.siteMetadata.title}
      </Badge>
      <h1>{props.pageContext.frontmatter.title}</h1>
      <span>{props.pageContext.frontmatter.author}</span>
      {children}
    </Layout>
  );
};
export default Post;
