exports.createPages = async ({ graphql, actions }) => {

    const result = await graphql(`
        {
         getLollies {
            lollies {
                lollyPath
                }
            }
        }
    `);

    result.data.getLollies.lollies.map(({ lollyPath }) => {
        actions.createPage({
            path: `/lolly/${lollyPath}`,
            component: require.resolve('./src/templates/createdLolly.js'),
            context: {
                lollyPath
            },
        });
    });
}