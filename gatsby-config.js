module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-yaml`,
    ]
};
