import React from 'react';

import { TalksList } from '../components/scenes';

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  return (
    <TalksList
      futureTalks={data.futureTalks.edges}
      pastTalks={data.pastTalks.edges}
      currentPage={currentPage}
      numPages={numPages}
    />
  );
};

export const query = graphql`
  fragment Edges on MarkdownRemarkConnection {
    edges {
      node {
        fields {
          slug
        }
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
        }
        html
        excerpt
      }
    }
  }
  query talksListQuery($skip: Int!, $limit: Int!) {
    futureTalks: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { isFuture: { eq: true }, collection: { eq: "talks" } }
      }
      limit: $limit
      skip: $skip
    ) {
      ...Edges
    }
    pastTalks: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { isFuture: { eq: false }, collection: { eq: "talks" } }
      }
      limit: $limit
      skip: $skip
    ) {
      ...Edges
    }
  }
`;
