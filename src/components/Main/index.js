import React from 'react';
import PT from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Metadata from './components/Metadata';
import Wrapper from './components/Wrapper';
import theme from '../../theme';

injectGlobal`
  ${normalize()}
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
  body {
    background: ${theme.colors.outerBg};
    color: ${theme.colors.gray};
  }
`;

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
