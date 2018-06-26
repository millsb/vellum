const path = require("path");
const Case = require("case");

const buildComponentPage = (createPage, graphql) => {
  const componentPageTemplate = path.resolve(
    "./src/templates/ComponentDetail.js"
  );

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/components/" } }
          ) {
            edges {
              node {
                fileAbsolutePath
                frontmatter {
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

        if (!result.data.allMarkdownRemark) {
          reject(["No markdown data returned", result]);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          let inkComponent;

          if (node.frontmatter && node.frontmatter.ink) {
            inkComponent = require(node.frontmatter.ink);
          }

          if (node.frontmatter && node.frontmatter.urlPath) {
            createPage({
              path: node.frontmatter.urlPath,
              component: componentPageTemplate,
              inkComponent: inkComponent,
              context: {
                markdownFile: node.fileAbsolutePath,
                componentName: node.frontmatter.component,
              }
            });
          }
        });
      })
    );
  });
};

module.exports = buildComponentPage;
