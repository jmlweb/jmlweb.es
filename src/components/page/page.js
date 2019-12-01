import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';
import styles from './page.module.css';

const Page = ({ title, children }) => (
  <Layout>
    <SEO title={title} />
    <h1 class={styles.title}>{title}</h1>
    {children}
  </Layout>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
