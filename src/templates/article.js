import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

const ArticleTemplate = ({ data }) => {
  const { title, description, images } = data.contentfulArticle;
  return (
    <div>
      <Helmet
        title={title}
        script={[{ src: '//cdn.embedly.com/widgets/platform.js', async: true }]}
      />
      <h1>{title}</h1>
      {images && images.map(image => <Img key={image.sizes.src} sizes={image.sizes} alt="" />)}
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      )}
    </div>
  );
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
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
