import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ArticleTemplate = ({ data }) => {
  const {
    title, description, entry, images,
  } = data.contentfulArticle;
  return (
    <StyledWrapper>
      <Helmet
        title={title}
        script={[{ src: '//cdn.embedly.com/widgets/platform.js', async: true }]}
      />
      <h1>{title}</h1>
      {images && images.map(image => <Img key={image.sizes.src} sizes={image.sizes} alt="" />)}
      {entry && (
        <div
          dangerouslySetInnerHTML={{
            __html: entry.childMarkdownRemark.html,
          }}
        />
      )}
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      )}
    </StyledWrapper>
  );
};

ArticleTemplate.propTypes = {
  data: PT.shape({
    contentfulArticle: PT.shape({
      title: PT.string,
      description: PT.object,
      entry: PT.object,
      images: PT.arrayOf(PT.shape({
        sizes: PT.object,
      })),
    }),
  }).isRequired,
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query articleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      images {
        sizes(maxWidth: 800) {
          base64
          aspectRatio
          src
          srcSet
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
