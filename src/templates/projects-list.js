import React from 'react';

import { ProjectsList } from '../screens';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return <ProjectsList posts={posts} />;
};

export const query = graphql`
  query projectsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
          }
          excerpt
        }
      }
    }
  }
`;
