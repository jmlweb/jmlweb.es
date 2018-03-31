import React from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Metadata from './components/Metadata';
import Wrapper from './components/Wrapper';
import '../../styles/globalStyles';
import theme from '../../styles/theme';

const Main = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Metadata siteMetadata={data.site.siteMetadata} theme={theme} />
      {children}
    </Wrapper>
  </ThemeProvider>
);

Main.propTypes = {
  data: PT.shape({
    site: PT.shape({
      siteMetadata: PT.shape({
        title: PT.string,
      }),
    }),
  }).isRequired,
  children: PT.node.isRequired,
};

export default Main;
