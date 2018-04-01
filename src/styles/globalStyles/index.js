import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import headings from './headings';
import tables from './tables';

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
    -webkit-font-smoothing: antialiased;
  }
  body,
  p,
  li,
  dd {
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
  ${headings({ sharedStyles })};
  ul,
  ol {
    padding-left: 26px;
  }
  ol {
    list-style-type: decimal-leading-zero;
  }
  ol ol {
    list-style-type: lower-alpha;
  }
  dt, dd {
    &:before {
      content: "●";
      display: inline-block;
      margin-right: ${theme.space[1]};
      margin-top: -5px;
    }
  }
  dt {
    font-weight: 700;
  }
  dd {
    margin-left: 0;
    &:before {
      color: transparent;
    }
  }
  code {
    display: block;
    font-family: monaco, Consolas, Lucida Console, monospace;
    font-size: 0.8em;
    padding: 4px 6px;
    background: ${theme.colors.gray[6]};
    border: 1px solid ${theme.colors.gray[3]};
  }
  ${tables({ theme, sharedStyles })};
`;
};
