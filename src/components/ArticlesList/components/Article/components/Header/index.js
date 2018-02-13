import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import styledMap from 'styled-map';
import Link from 'gatsby-link';
import { timingFunctions } from 'polished';

import StyledRow from '../../../../../StyledRow';

const StyledHeading = styled.h2`
  background-color: ${props =>
    styledMap({
      mini: '#fff',
      default: props.theme.colors.lighter,
    })};
  line-height: 1.4;
  letter-spacing: -0.2px;
  margin: ${props =>
    styledMap({
      mini: `0 0 ${props.theme.spacing(-1)}`,
      default: 0,
    })};
  border-bottom: ${({ theme }) =>
    styledMap({
      mini: 0,
      default: `2px solid ${theme.colors.alphaBorder}`,
    })};
  font-size: ${props =>
    styledMap({
      mini: props.theme.fontSize(3),
      default: props.theme.fontSize(4),
    })};
  @media (${props => props.theme.breakpoints.sm}) {
    font-size: ${props =>
    styledMap({
      mini: props.theme.fontSize(4),
      default: props.theme.fontSize(5),
    })};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    font-size: ${props =>
    styledMap({
      mini: props.theme.fontSize(4),
      default: props.theme.fontSize(6),
    })};
  }
  @media (${props => props.theme.breakpoints.xl}) {
    font-size: ${props =>
    styledMap({
      mini: props.theme.fontSize(4),
      default: props.theme.fontSize(7),
    })};
  }
  @media (${props => props.theme.breakpoints.xxl}) {
    font-size: ${props =>
    styledMap({
      mini: props.theme.fontSize(6),
      default: props.theme.fontSize(8),
    })};
  }
  `;

const StrippedLink = ({ mini, ...rest }) => <Link {...rest} />;

const StyledLink = StyledRow.withComponent(StrippedLink).extend`
    display: block;
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};
    transition: all 0.1s ${timingFunctions('easeOutQuad')};
    &:hover {
      background-color: ${props =>
    styledMap({
      mini: 'none',
      default: props.theme.colors.white,
    })};
    }
  `;

const Header = ({ url, mini, children }) => (
  <StyledHeading mini={mini}>
    <StyledLink mini={mini} to={url}>
      {children}
    </StyledLink>
  </StyledHeading>
);

Header.propTypes = {
  url: PT.string.isRequired,
  mini: PT.bool.isRequired,
  children: PT.node.isRequired,
};

export default Header;
