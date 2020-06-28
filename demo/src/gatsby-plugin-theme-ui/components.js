/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

export default {
  h1: (props) => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  ),
  h2: (props) => (
    <h2 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h2>
  ),
  h3: (props) => (
    <h3 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h3>
  ),
};
