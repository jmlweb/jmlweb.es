export const query = graphql`
  query IndexPage {
    image: imageSharp(id: { regex: "/jmlweb.jpg/" }) {
      sizes(maxWidth: 533) {
        ...GatsbyImageSharpSizes
      }
    }
    homeArticles: allContentfulArticle(
      filter: { hideInHomepage: { ne: true } }
      limit: 3
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          entryImage {
            sizes(maxWidth: 939) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          entry {
            childMarkdownRemark {
              excerpt(pruneLength: 220)
              html
            }
          }
        }
      }
    }
  }
`;

export default from '../templates/Home';
