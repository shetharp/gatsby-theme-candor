import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { Badge, Text } from "theme-ui";

const Page: React.FC = ({ children }) => {
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
      <Badge variant="secondary">
        <Text variant="mono">Page.tsx</Text>
      </Badge>
      {children}
    </Layout>
  );
};
export default Page;

Page.propTypes = {
  children: PropTypes.node,
};
