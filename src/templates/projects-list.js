import React from 'react';

import { ProjectsList } from '../screens';

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  return (
    <ProjectsList
      posts={data.allMarkdownRemark.edges}
      currentPage={currentPage}
      numPages={numPages}
    />
  );
};

export const query = graphql`
  query projectsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___featured, frontmatter___date]
        order: [DESC, DESC]
      }
      filter: { fields: { collection: { eq: "projects" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            url
            featured
          }
          excerpt
        }
      }
    }
  }
`;
