import React from "react";
import {map, view, lensPath} from "ramda";
import TreeNav from "../vellum/TreeNav/TreeNav.jsx";

const ComponentsPage = ({data}) => {
  const navDataLens = lensPath(['node', 'frontmatter']);
  const navData = map( (i) => view(lensPath, i), data.navData.edges);

  return (
    <section className="grid">
      <div className="grid__col--sidebar">
        <TreeNav data={navData}
                 renders={[
                   (data, depth, className) => <a href={data.path}>{shortTitle}</a>
                 ]}
        />
      </div>
      <div className="grid__col">
        <h1>Components</h1>
      </div>
    </section>
  );
};

export default ComponentsPage;

  export const query = graphql`
    query allMarkdownRemark {
        navData: allMarkdownRemark(filter: {id: {regex: "/components/"}}) {
            edges {
                node {
                  frontmatter {
                    path
                    shortTitle
                  }
                }
            }
        }
    }
`;
