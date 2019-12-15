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
          date(formatString: "DD MMMM YYYY")
          rawDate: date(formatString: "DD MMM YY")
          title
          url
          conference
          type
          language
          video
          slides
          tags
        }
        fields {
          slug
          collection
          isFuture
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
      filter: {
        fields: { isFuture: { eq: true }, collection: { eq: "talks" } }
      }
      limit: 12
    ) {
      ...RemarkCollection
    }
    projectsRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "projects" } }
        frontmatter: { featured: { eq: true } }
      }
      limit: 12
    ) {
      ...RemarkCollection
    }
  }
`;

export default IndexPage;
