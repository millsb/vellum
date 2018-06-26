import React from "react";
import "../vellum/queries";
import { StaticQuery } from "gatsby";

const ComponentDetail = ({ data }) => {
  console.log(data);
  const displayName = data.targetComponent.edges[0].node.displayName;
  return <p>{displayName}</p>;
};

export default ComponentDetail;

export const query = graphql`
  query ComponentDetail($componentName: String!, $markdownFile: String!) {
    doc: allMarkdownRemark(
      filter: { fileAbsolutePath: { eq: $markdownFile } }
    ) {
      edges {
        node {
          frontmatter {
            urlPath
            title
          }
          html
        }
      }
    }
    targetComponent: allComponentMetadata(
      filter: { displayName: { eq: $componentName } }
    ) {
      edges {
        node {
          displayName
        }
      }
    }
  }
`;
