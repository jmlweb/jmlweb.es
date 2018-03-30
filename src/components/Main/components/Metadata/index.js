import React from 'react';
import PT from 'prop-types';
import Helmet from 'react-helmet';

import favicon from './favicon.ico';

const Metadata = ({ siteMetadata, theme }) => (
  <Helmet
    title={siteMetadata.title}
    htmlAttributes={{ lang: 'es', amp: true }}
    meta={[
      { name: 'description', content: siteMetadata.title },
      { name: 'keywords', content: siteMetadata.keywords },
      { name: 'theme-color', content: theme.colors.primary },
      {
        name: 'google-site-verification',
        content: siteMetadata.googleVerification,
      },
    ]}
    link={[
      { rel: 'shortcut icon', href: favicon },
      { rel: 'icon', href: favicon, type: 'image/x-icon' },
    ]}
  />
);

Metadata.propTypes = {
  siteMetadata: PT.shape({
    title: PT.string,
  }).isRequired,
  theme: PT.shape({
    colors: PT.object,
  }).isRequired,
};

export default Metadata;
