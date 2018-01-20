import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    {data.allContentfulProduct.edges.map(edge => <p key={edge.node.id}>{edge.node.productName.productName}</p>)}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export const query = graphql`
  query contentful {
    allContentfulProduct {
      edges {
        node {
          id,
          productName {
            productName
          }
        }
      }
    }
  }
`;

export default IndexPage
