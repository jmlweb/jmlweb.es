import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export default theme => (WrappedComponent) => {
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
    @media (${theme.breakpoints.xs}) {
      font-size: ${theme.font.sizes.content.md};
    }
    @media(${theme.breakpoints.md}) {
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
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  p {
    line-height: 1.4;
  }
`;
  return WrappedComponent;
};
