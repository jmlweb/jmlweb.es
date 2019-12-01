import React from 'react';
import { Link, graphql } from 'gatsby';

import { Image, Page } from '../components';

const IndexPage = ({ data }) => (
  <Page title="Home">
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link key={node.id} to={node.fields.slug}>
        {node.frontmatter.title}
      </Link>
    ))}
  </Page>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
