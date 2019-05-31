const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulVideo {
        edges {
          node {
            contentful_id
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulVideo.edges.forEach(a => {
      createPage({
        path: `watch/${a.node.contentful_id}`,
        component: path.resolve('./src/pages/watch.js'),
        context: {
          slug: a.node.contentful_id,
        },
      });
    });
  });
};
