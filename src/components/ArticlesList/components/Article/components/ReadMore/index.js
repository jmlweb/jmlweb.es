import React from 'react';
import PT from 'prop-types';
import Link from 'gatsby-link';
import { timingFunctions, rgba } from 'polished';

import StyledRow from '../../../../../StyledRow';

const StyledButton = StyledRow.withComponent(Link).extend`
  background-color: ${props => props.theme.colors.lighter};
  color: ${props => props.theme.colors.primary};
  display: block;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize(2)};
  font-weight: 700;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  transition: all 0.1s ${timingFunctions('easeOutQuad')};
  text-align: center;
  border-top: 1px solid ${props => rgba(props.theme.colors.alphaBorder, 0.1)};
  &:hover {
    background-color: ${props => props.theme.colors.white};
  }
`;

const ReadMore = ({ url }) => <StyledButton to={url}>Leer más</StyledButton>;

ReadMore.propTypes = {
  url: PT.string.isRequired,
};

export default ReadMore;
