import React from 'react';
import Link from 'gatsby-link';

const Articles = ({ data }) => (
  <div>
    <ul>
      {data &&
        data.allContentfulArticle.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/article/${edge.node.id}`}>{edge.node.title}</Link>
          </li>
        ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export const query = graphql`
  query articles {
    allContentfulArticle {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default Articles;
