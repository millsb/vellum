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

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    buildComponentPage(createPage, graphql);
};

