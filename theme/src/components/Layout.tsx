import React from "react";
import PropTypes from "prop-types";
import { css, Global } from "@emotion/core";
import { Container } from "theme-ui";
import Header from "./Header";
import Main from "./Main";
import Content from "./Content";

export type LayoutProps = {
  // empty
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <Main>
        <Container>
          <Content>{props.children}</Content>
        </Container>
      </Main>
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
