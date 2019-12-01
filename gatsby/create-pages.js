const COLLECTIONS = [
  {
    name: 'posts',
    templateName: 'post',
  },
  {
    name: 'talks',
    templateName: 'talk',
  },
];

const filterEdges = name => edges =>
  edges.filter(edge => edge.node.fields.collection === name);

const buildPagesCollectionGenerator = ({ edges, createPage }) => ({
  name,
  templateName,
}) => {
  const filteredEdges = filterEdges(name)(edges);
  filteredEdges.forEach((edge, index) => {
    const { slug } = edge.node.fields;
    const previous = index === edges.length - 1 ? null : edges[index + 1].node;
    const next = index === 0 ? null : edges[index - 1].node;
    createPage({
      path: slug,
      component: require.resolve(`../src/templates/${templateName}.js`),
      context: { slug, previous, next },
    });
  });
};

module.exports = async function({ actions, graphql }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              collection
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const pagesCollectionGenerator = buildPagesCollectionGenerator({
    edges: data.allMarkdownRemark.edges,
    createPage,
  });

  COLLECTIONS.forEach(pagesCollectionGenerator);
};
