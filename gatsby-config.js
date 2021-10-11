module.exports = {
    siteMetadata: {
        siteUrl: `https://a-virtual-lolly-app.netlify.app`,
    },
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "LOLLY",
                fieldName: "getLollies",
                url: `https://a-virtual-lolly-app.netlify.app/.netlify/functions/new-lolly`,
            }
        },
    ]
}