import React from 'react';
import PT from 'prop-types';
import Helmet from 'react-helmet';

import theme from '../themes/default';

import Header from '../components/Header';
import './index.css';

console.log(theme);

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.title },
        { name: 'keywords', content: 'José Manuel Lucas, Frontend, Development' },
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

export const query = graphql`
  query title {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

TemplateWrapper.propTypes = {
  children: PT.func.isRequired,
};

export default TemplateWrapper;
