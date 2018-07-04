const fs = require("fs");
const path = require("path");
const Case = require("case");

const buildComponentPage = (createPage, graphql) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx(
            filter: { absolutePath: { regex: "/components/" } }
          ) {
            edges {
              node {
                name
                absolutePath
                dir
                frontmatter {
                  title
                  path
                  component
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        if (!result.data || !result.data.allMdx) {
          reject(["No markdown data returned", result]);
          return;
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          if (node.name && node.frontmatter) {
            createPage({
              path: node.frontmatter.path || `/components/${node.name}`,
              component: `${node.dir}/${node.frontmatter.component}.page.jsx`,
            });
          }
        });
      })
    );
  });
};

module.exports = buildComponentPage;
