const path = require('path');
const slash = require('slash');
const map = require('lodash.map');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query projectsIds {
        allContentfulProject(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `)
      .then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        const projectTemplate = path.resolve('./src/templates/project.js');
        console.log(result);
        if (result && result.data && result.data.allContentfulProject) {
          map(result.data.allContentfulProject.edges, (edge) => {
            createPage({
              path: `/projects/${edge.node.id}`,
              component: slash(projectTemplate),
              context: {
                id: edge.node.id,
              },
            });
          });
        }
      })
      .then(() => {
        resolve();
      });
  });
};
