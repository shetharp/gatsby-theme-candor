import React from "react";
import { PageProps } from "gatsby";

export default function TypescriptExample(props: PageProps) {
  return (
    <>
      <h1>Path:</h1>
      Example page using typescript.
      <pre>{props.path}</pre>
    </>
  );
}
