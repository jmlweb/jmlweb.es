import styled from 'styled-components';
import { color, fontWeight, space, lineHeight } from 'styled-system';
import tag from 'clean-tag';

import { withFontSize } from '../../styles';

const Text = styled(tag.span)`
  ${props => props.display && `display: ${props.display}`};
  ${color};
  ${space};
  ${fontWeight};
  ${lineHeight};
`;

export default withFontSize(Text);
