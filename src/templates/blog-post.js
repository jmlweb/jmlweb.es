import React from 'react';
import { graphql } from 'gatsby';

import { BlogPost } from '../components/scenes';

export default ({ data }) => {
  const post = data.markdownRemark;
  return <BlogPost post={post} />;
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        rawDate: date
        date(formatString: "DD MMMM YYYY")
        tags
      }
      fields {
        slug
      }
      timeToRead
      html
    }
  }
`;
