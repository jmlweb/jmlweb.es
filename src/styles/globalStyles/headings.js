import { css } from 'styled-components';

export default ({ sharedStyles }) => css`
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
`;
