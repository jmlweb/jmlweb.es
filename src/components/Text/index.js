import styled from 'styled-components';
import {
  color,
  display,
  fontWeight,
  space,
  lineHeight,
  propTypes,
} from 'styled-system';
import tag from 'clean-tag';
import Link from 'gatsby-link';
import cleanElement from 'clean-element';

import { withFontSize } from '../../styles';

const Text = styled(tag.span)`
  ${display};
  ${color};
  ${space};
  ${fontWeight};
  ${lineHeight};
`;

const EnhancedText = withFontSize(Text);

export default EnhancedText;

const CleanLink = cleanElement(Link);

CleanLink.propTypes = {
  ...propTypes.display,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.fontWeight,
  ...propTypes.lineHeight,
};

export const TextLink = Text.withComponent(CleanLink);
