require("longjohn");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const Case = require("case");
const buildComponentPage = require("./src/node-builders/buildComponentPage");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ state, rules, loaders, plugins, actions}) => {
  const mdFiles = /\.mdx?$/;
  actions.setWebpackConfig({
    module:
      {
        rules: [
          {
            test: mdFiles,
            use: ['babel-loader?' + 'babelrc=false,' + 'presets[]=@babel/preset-env,' + 'presets[]=@babel/preset-react',
              '@mdx-js/loader']
          }
        ],
      }
  })
};

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    buildComponentPage(createPage, graphql);
};

