import { css } from 'styled-components';
import { getFontSizeMq } from '../';

export default ({ theme }) => css`
  font-family: ${theme.fontFamily.default};
  ${getFontSizeMq(0)};
  line-height: 1.5;
`;
