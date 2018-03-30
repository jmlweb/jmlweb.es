import styled from 'styled-components';
import { fontSize, color, space } from 'styled-system';
import tag from 'clean-tag';

export default styled(tag.span)`
  display: ${props => props.display || 'inline-block'};
  ${fontSize};
  ${color};
  ${space};
`;
