export const query = graphql`
  query IndexPage {
    image: imageSharp(id: { regex: "/jmlweb.jpg/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulArticle(limit: 2) {
      edges {
        node {
          id
          title
          entry {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default from '../components/IndexPage';
