import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { Badge, Text } from "theme-ui";

export type PageTemplateProps = {
  // empty
};

const Page: React.FC<PageTemplateProps> = ({ children }) => {
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
      <Badge variant="secondary">
        <Text variant="mono">Page template</Text>
      </Badge>
      <Badge variant="highlight" marginLeft={1}>
        {data.site.siteMetadata.title}
      </Badge>
      {children}
    </Layout>
  );
};
export default Page;

Page.propTypes = {
  children: PropTypes.node,
};
