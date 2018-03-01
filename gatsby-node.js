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

    return new Promise((resolve, reject) => {

        resolve(
            graphql(`
                {
                  allComponentMetadata(filter: {id: {regex: "/components/"}}) {
                    edges {
                      node {
                        id
                        displayName
                        docblock
                        props {
                          type {
                            name
                            value
                          }
                          name
                          docblock
                        }
                      }
                    }
                  }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                result.data.allComponentMetadata.edges.forEach(({node}) => {
                    const name = node.displayName;
                    if (name.indexOf('.ink') > -1) {
                        return;
                    }

                    const inkComponent = path.resolve(`src/components/${name}/${name}.ink.jsx`);
                    fs.lstat(inkComponent, (err, stats) => {
                       if (err) {
                           console.log(`Vellum: Found component ${name}, but no ink file`);
                       }

                       if (!err && stats.isFile()) {
                           const componentSegment = Case.kebab(name);
                           const pagePath = `/component/${componentSegment}`;
                           console.log(`Vellum: Creating page for ${name}, using ${inkComponent}`);
                           createPage({
                               path: pagePath,
                               layout: "index",
                               component: inkComponent,
                               context: {
                                   componentDisplayName: node.displayName
                               }
                           });
                       }
                    });
                });
            })
        );
    });
};

