const { createFilePath } = require(`gatsby-source-filesystem`);
module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'collection',
      value: getNode(node.parent).sourceInstanceName,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
