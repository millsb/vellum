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
                absolutePath
                dir
                frontmatter {
                  title
                  urlPath
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
          if (node.frontmatter && node.frontmatter.urlPath) {
            createPage({
              path: node.frontmatter.urlPath,
              component: `${node.dir}/${node.frontmatter.component}.ink.jsx`,
            });
          }
        });
      })
    );
  });
};

module.exports = buildComponentPage;
