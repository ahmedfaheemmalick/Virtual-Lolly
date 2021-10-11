// exports.createPages = async ({ graphql, actions }) => {

//     const result = await graphql(`
//         {
//          getLollies {
//             lollies {
//                 lollyPath
//                 }
//             }
//         }
//     `);

//     result.data.getLollies.lollies.map(({ lollyPath }) => {
//         console.log(lollyPath)
//         actions.createPage({
//             path: `/lolly/${lollyPath}`,
//             component: require.resolve('./src/pages/createdLolly.js'),
//             context: {
//                 lollyPath: lollyPath
//             },
//         });
//     });
// }