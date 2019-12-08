import React from 'react';
import { graphql } from 'gatsby';

import { Home } from '../screens';

const IndexPage = ({ data }) => (
  <Home
    blogPosts={data.postsRemark.edges}
    talksPosts={data.talksRemark.edges}
    projectsPosts={data.projectsRemark.edges}
  />
);

export const query = graphql`
  fragment RemarkCollection on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          url
        }
        fields {
          slug
          collection
        }
        excerpt
      }
    }
  }

  query remarkByCollection {
    postsRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "blog" } } }
      limit: 12
    ) {
      ...RemarkCollection
    }
    talksRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "talks" } } }
      limit: 12
    ) {
      ...RemarkCollection
    }
    projectsRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "projects" } } }
      limit: 12
    ) {
      ...RemarkCollection
    }
  }
`;

export default IndexPage;
