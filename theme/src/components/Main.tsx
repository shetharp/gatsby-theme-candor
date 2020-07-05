import React from "react";
import PropTypes from "prop-types";

export type MainProps = {
  // empty
};

export const Main: React.FC<MainProps> = (props) => {
  return <main>{props.children}</main>;
};
export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
