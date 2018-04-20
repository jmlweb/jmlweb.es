import styled from 'styled-components';
import {
  space,
  width,
  fontSize,
  color,
  display,
  justifyContent,
  alignItems,
} from 'styled-system';
import tag from 'clean-tag';

export default styled(tag.div)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${display}
  ${justifyContent}
  ${alignItems}
`;
