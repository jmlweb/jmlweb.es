const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');
const webpackLodashPlugin = require('lodash-webpack-plugin');
const _ = require('lodash');

const generateSlug = require('./src/utils/generateSlug');

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
        if (result && result.data && result.data.allContentfulProject) {
          _.map(result.data.allContentfulProject.edges, (edge) => {
            createPage({
              path: `/project/${edge.node.title}`,
              component: slash(projectTemplate),
              context: {
                id: edge.node.id,
              },
            });
          });
        }
      })
      .then(() => {
        graphql(`
          query articlesIds {
            allContentfulArticle(limit: 1000) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        `).then((result) => {
          if (result.errors) {
            reject(result.errors);
          }
          const articleTemplate = path.resolve('./src/templates/article/index.js');
          if (result && result.data && result.data.allContentfulArticle) {
            _.map(result.data.allContentfulArticle.edges, (edge) => {
              createPage({
                path: `/articulo/${generateSlug(edge.node.title)}`,
                component: slash(articleTemplate),
                context: {
                  id: edge.node.id,
                },
              });
            });
          }
          resolve();
        });
      });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};
