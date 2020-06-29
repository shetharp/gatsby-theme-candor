import React from "react";
import PropTypes from "prop-types";
import { css, Global } from "@emotion/core";
import { Container } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

const Layout: React.FC = ({ children }) => {
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
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <header>
        <span>{data.site.siteMetadata.title}</span>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
