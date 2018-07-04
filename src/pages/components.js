import React from "react";
import { map, view, path, concat, prop } from "ramda";
import { compact } from "ramda-adjunct";
import TreeNav from "../vellum/TreeNav/TreeNav.jsx";
import Link from "gatsby-link";
import {StaticQuery} from "gatsby";


const ComponentsPage = ({ data }) => {
  const navData = map(d => {
    const frontmatter = path(["node", "frontmatter"], d);
    const headings = path(["node", "headings"], d);

    const children = map(h => {
      if (h.depth === 2) {
        return {
          url: concat(prop("path", frontmatter), `#${h.value}`),
          label: h.value
        };
      }
    }, headings);

    return {
      url: prop("path", frontmatter),
      label: prop("title", frontmatter),
      children: compact(children)
    };
  }, data.navData.edges);

  return (
    <section className="grid">
      <div className="grid__col--sidebar">
        <TreeNav
          className="tree-nav"
          data={navData}
          renders={[
            ({ data }) => <Link to={data.url || "#"} activeClassName="is-active">{data.label}</Link>
          ]}
        />
      </div>
      <div className="grid__col">
        <h1>Components</h1>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery query={
    graphql`
      query allMdx {
        navData: allMdx(filter: { absolutePath: { regex: "/components/" } }) {
          edges {
            node {
              frontmatter {
                path
                title
              }
              headings {
                depth
                value
              }
            }
          }
        }
      }
    `}
  render={ data => 
  <ComponentsPage data={data}/>}
  />
);
