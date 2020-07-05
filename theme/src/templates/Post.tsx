import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { Badge, Text } from "theme-ui";

type PostProps = PageProps & {
  pageContext: {
    frontmatter: { [k: string]: string };
  };
};

const Page: React.FC<PostProps> = (props) => {
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
      <Badge marginRight={1}>{data.site.siteMetadata.title}</Badge>
      <Badge variant="accent">
        <Text variant="mono">Post.tsx</Text>
      </Badge>
      <h1>{props.pageContext.frontmatter.title}</h1>
      <span>{props.pageContext.frontmatter.author}</span>
      {children}
    </Layout>
  );
};
export default Page;
