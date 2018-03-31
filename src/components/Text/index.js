import styled from 'styled-components';
import { color, fontWeight, space } from 'styled-system';
import tag from 'clean-tag';

import withFontSize from '../../hoc/withFontSize';

const Text = styled(tag.span)`
  ${props => props.display && `display: ${props.display}`};
  ${color};
  ${space};
  ${fontWeight};
`;

export default withFontSize(Text);
