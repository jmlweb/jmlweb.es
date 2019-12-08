import React from 'react';
import { graphql } from 'gatsby';

import { BlogPost } from '../screens';

export default ({ data }) => {
  const post = data.markdownRemark;
  return <BlogPost post={post} />;
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;