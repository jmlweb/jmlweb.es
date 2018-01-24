import React from 'react';
import PT from 'prop-types';

import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';

const TemplateWrapper = ({ children, data }) => (
  <MainWrapper data={data}>
    <Header title={data.site.siteMetadata.title} />
    {children()}
  </MainWrapper>
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
