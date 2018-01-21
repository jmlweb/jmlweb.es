import React from 'react'
import Link from 'gatsby-link'

const Projects = ({ data }) => (
  <div>
    <ul>
      {data && data.allContentfulProject.edges.map(edge => <li>{edge.node.title}</li>)}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export const query = graphql`
  query projects {
    allContentfulProject {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default Projects
