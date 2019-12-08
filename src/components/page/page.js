import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';

const Page = ({ title, children }) => (
  <Layout>
    <SEO title={title} />
    {children}
  </Layout>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
