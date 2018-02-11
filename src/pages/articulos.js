import React from 'react';
import PT from 'prop-types';
import Link from 'gatsby-link';

import generateSlug from '../utils/generateSlug';

const Articles = ({ data }) => (
  <div>
    <ul>
      {data &&
        data.allContentfulArticle.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/articulo/${generateSlug(edge.node.title)}`}>{edge.node.title}</Link>
          </li>
        ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

Articles.propTypes = {
  data: PT.shape({
    allContentfulArticle: PT.shape({
      edges: PT.arrayOf(PT.shape({
        node: PT.shape({
          id: PT.string,
          title: PT.string,
        }),
      })),
    }),
  }).isRequired,
};

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
