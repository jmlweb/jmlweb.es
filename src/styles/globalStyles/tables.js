import { css } from 'styled-components';

export default ({ theme, sharedStyles }) => css`
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
    text-align: left;
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
