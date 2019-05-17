const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulVideo {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulVideo.edges.forEach((_, index) => {
      createPage({
        path: `watch/${index + 1}`,
        component: path.resolve('./src/pages/watch.js'),
        context: {
          slug: index,
        },
      });
    });
  });
};
