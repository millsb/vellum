const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const Case = require("case");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators;
    const componentPageTemplate = path.resolve('./src/templates/component-detail.js');

    return new Promise((resolve, reject) => {

        resolve(
            graphql(`
                {
                  allMarkdownRemark(filter: {id: {regex: "/components/"}}) {
                    edges {
                      node {
                        frontmatter {
                          path
                          title
                        }
                      }
                    }
                  }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                result.data.allMarkdownRemark.edges.forEach(({node}) => {
                  if (node.frontmatter && node.frontmatter.path) {
                    createPage({
                      path: node.frontmatter.path,
                      component: componentPageTemplate,
                      context: {}
                    });
                  }
                });
            })
        );
    });
};

