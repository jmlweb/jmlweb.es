import React from 'react';
import PT from 'prop-types';
import Helmet from 'react-helmet';

const Metadata = ({ title }) => (
  <Helmet title={title} script={[{ src: '//cdn.embedly.com/widgets/platform.js', async: true }]} />
);

Metadata.propTypes = {
  title: PT.string.isRequired,
};

export default Metadata;
