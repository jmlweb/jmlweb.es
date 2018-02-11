import React from 'react';
import PT from 'prop-types';

import Header from '../components/Header';
import Main from '../components/Main';

const TemplateWrapper = ({ children, data }) => (
  <Main data={data}>
    <Header title={data.site.siteMetadata.title} />
    {children()}
  </Main>
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
  data: PT.shape({
    site: PT.shape({
      siteMetadata: PT.shape({
        title: PT.string,
      }),
    }),
  }).isRequired,
};

export default TemplateWrapper;
