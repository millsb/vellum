import React from "react";
import "../vellum/queries";
import { StaticQuery } from "gatsby";
import Inkwell from "../vellum/Inkwell/Inkwell";

const ComponentDetail = ({ data, pathContext }) => {
  return (
    <Inkwell meta={data.componentMetadata}>
    </Inkwell>
  )
};

export default ComponentDetail;

export const query = graphql`
  query ComponentDetail($componentName: String!, $markdownFile: String!) {
    doc: mdx(absolutePath: { eq: $markdownFile }) {
      frontmatter {
        urlPath
        title
      }
    }
    componentMetadata(displayName: { eq: $componentName }) {
      ...standardInkFields
    }
  }
`;
