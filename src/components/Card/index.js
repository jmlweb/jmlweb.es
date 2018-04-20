import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import Box from '../Box';
import CardTitle from './CardTitle';
import CardSocial from './CardSocial';
import CardContent from './CardContent';
import CardImage from './CardImage';

import { withDefaultAttr } from '../../styles/hoc';

const withDefaultPx = withDefaultAttr('contentPx');

const EnhancedCardTitle = withDefaultPx(CardTitle);
const EnhancedCardSocial = withDefaultPx(CardSocial);
const EnhancedCardContent = withDefaultPx(CardContent);

const StyledWrapper = styled(Box).attrs({
  bg: 'white',
})`
  max-width: ${props => props.theme.sizes.contentMax};
`;

const Card = ({
  title, to, is, permalink, image, children,
}) => (
  <StyledWrapper is={is}>
    <Box is="header">
      <EnhancedCardTitle title={title} to={to} />
      {image && <CardImage to={to} src={image} />}
      {children && <EnhancedCardContent>{children}</EnhancedCardContent>}
      <EnhancedCardSocial title={title} permalink={permalink} />
    </Box>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  is: PropTypes.string,
  to: PropTypes.string,
  permalink: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  is: 'article',
  to: undefined,
  image: undefined,
  children: undefined,
};

export default withTheme(Card);
