import { flexWrap, flexDirection, justifyContent, alignItems } from 'styled-system';
import Box from '../Box';

export default Box.extend`
  display: flex;
  ${flexWrap};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
`;
