import { css } from 'styled-components';

export default ({ theme, sharedStyles }) => css`
  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: ${theme.space[4]};
    margin-bottom: ${theme.space[4]};
  }
  caption {
    font-size: ${theme.fontSize(-1, 'SM')};
  }
  th,
  td {
    padding: ${theme.space[2]} ${theme.space[3]};
    ${sharedStyles.defaultTypo()};
  }
  th {
    text-transform: uppercase;
    text-align: left;
    white-space: nowrap;
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
