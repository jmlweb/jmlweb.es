import React from 'react';
import PT from 'prop-types';

import Wrapper from './components/Wrapper';
import Metadata from './components/Metadata';

import Article from '../../components/Article';

const ArticleTemplate = ({ data }) => (
  <Wrapper>
    <Metadata title={data.contentfulArticle.title} />
    <Article detail data={data.contentfulArticle} />
  </Wrapper>
);
ArticleTemplate.propTypes = {
  data: PT.shape({
    contentfulArticle: PT.shape({
      title: PT.string,
      description: PT.object,
      entry: PT.object,
      entryImage: PT.shape({
        sizes: PT.object,
      }),
    }),
  }).isRequired,
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query articleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
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
          html
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
