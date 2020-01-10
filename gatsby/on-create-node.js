const { createFilePath } = require(`gatsby-source-filesystem`);

const today = new Date().toISOString().split('T')[0];

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/${collection}${slug}`,
    });
    createNodeField({
      node,
      name: 'isFuture',
      value: node.frontmatter.date >= today,
    });
  }
};
