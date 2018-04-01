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
    color: ${theme.colors.gray[1]};
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
    margin-bottom: ${theme.space[2]};
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
  code {
    display: block;
    font-family: monaco, Consolas, Lucida Console, monospace;
    font-size: 0.8em;
    padding: 4px 6px;
    background: ${theme.colors.gray[6]};
    border: 1px solid ${theme.colors.gray[3]};
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: ${theme.space[3]};
    margin-bottom: ${theme.space[3]};
  }
  caption {
    font-size: ${theme.fontSize(-1, 'SM')};
  }
  th,
  td {
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};
    ${sharedStyles.defaultTypo({ theme })};
  }
  th {
    text-transform: uppercase;
    padding-top: ${theme.space[2]};
    padding-bottom: ${theme.space[2]};
  }
  td {
    padding-top: ${theme.space[1]};
    padding-bottom: ${theme.space[1]};
  }
  thead {
    tr {
      background: ${theme.colors.gray[2]};
      color: ${theme.colors.white};
    }
  }
  tfoot {
    tr {
      background: ${theme.colors.gray[3]};
      color: ${theme.colors.white};
    }
  }
  tbody {
    tr:nth-child(odd) {
      background: ${theme.colors.gray[4]};
    }
    tr:nth-child(even) {
      background: ${theme.colors.gray[5]};
    }
  }
`;
};
