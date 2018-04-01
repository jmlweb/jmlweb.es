import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export default ({ theme, sharedStyles }) => {
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
    ${sharedStyles.defaultTypo({ theme })};
  }
  p,
  ol,
  ul,
  li,
  dd {
    margin-top: 0;
    margin-bottom: ${theme.space[1]};
    &:last-child {
      margin-bottom: 0;
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
};
