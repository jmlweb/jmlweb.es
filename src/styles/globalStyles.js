import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';
import sharedStyles from './sharedStyles';

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
    color: ${theme.colors.gray[0]};
  }
  body,
  p,
  li,
  dd,
  input,
  select,
  textarea {
    font-size: ${theme.fontSize(0)};
    @media (${theme.breakpoints.sm}) {
      font-size: ${theme.fontSize(1)};
    }
    @media (${theme.breakpoints.xl}) {
      font-size: ${theme.fontSize(2)};
    }
    @media (${theme.breakpoints.xxl}) {
      font-size: ${theme.fontSize(3)};
    }
  }
  body,
  p,
  li,
  dd {
    line-height: 1.4;
    @media (${theme.breakpoints.lg}) {
      line-height: 1.5;
    }
    @media (${theme.breakpoints.xl}) {
      line-height: 1.55;
    }
  }
  p,
  ol,
  ul,
  li,
  dd {
    margin-top: ${theme.space[1]};
    &:first-child {
      margin-top: 0;
    }
  }
  body,
  input,
  select,
  textarea {
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.default};
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    ${sharedStyles.headings(1)};
  }
  h2 {
    ${sharedStyles.headings(2)};
  }
  h3 {
    ${sharedStyles.headings(3)};
  }
  h4 {
    ${sharedStyles.headings(4)};
  }
  h5 {
    ${sharedStyles.headings(5)};
  }
  h6 {
    ${sharedStyles.headings(6)};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: line-through;
      color: ${theme.colors.dark};
    }
  }
  em, i {
    font-style: italic;
  }
  strong, b {
    font-weight: 700;
  }
  code {
    font-family: monaco, Consolas, Lucida Console, monospace;
    font-size: 0.8em;
    padding: 4px 6px;
    background: ${theme.colors.lighter};
    border: 1px solid ${theme.colors.light};
  }
`;
