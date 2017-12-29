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
        {
            resolve: `gatsby-transformer-yaml`,
            options: {
                path: "./src/data"
            }
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
    ]
};
