import React from 'react';
import PT from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';

import theme from '../../theme';

const StyledWrapper = styled.div`
  background: #fff;
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  min-height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  @media (min-width: 480px) {
    min-height: 0;
  }
`;

const MainWrapper = ({ data, children }) => {
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
      font-size: ${theme.font.sizes.content.sm};
      @media(min-width: 480px) {
        font-size: ${theme.font.sizes.content.md};
      }
      @media(min-width: 780px) {
        font-size: ${theme.font.sizes.content.lg};
      }
    }
    body, input, select, textarea {
      color: ${theme.colors.text};
      font-family: ${theme.font.family};
      -webkit-font-smoothing: antialiased;
    }
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
    p {
      line-height: 1.4;
    }
  `;
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{ lang: 'es', amp: true }}
          meta={[
            { name: 'description', content: data.site.siteMetadata.title },
            { name: 'keywords', content: 'José Manuel Lucas, Frontend, Development' },
            { name: 'theme-color', content: theme.colors.primary },
            { name: 'google-site-verification', content: 'C_zrk0we724IL2r6BSTEf2U9ZVaIIYVsFR16eHuk-Nk' },
          ]}
        />
        {children}
      </StyledWrapper>
    </ThemeProvider>
  );
};

MainWrapper.propTypes = {
  data: PT.shape({
    site: PT.shape({
      siteMetadata: PT.shape({
        title: PT.string,
      }),
    }),
  }).isRequired,
  children: PT.node.isRequired,
};

export default MainWrapper;
