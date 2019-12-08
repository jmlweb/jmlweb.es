import React from 'react';

import { TalksList } from '../screens';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return <TalksList posts={posts} />;
};

export const query = graphql`
  query talksListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "talks" } } }
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
