import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import generateSlug from '../../../../utils/generateSlug';

const StyledWrapper = styled(Link)`
  position: relative;
  display: block;
  text-align: center;
  &:after {
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    content: '';
    height: 4px;
    left: 0;
    margin-top: -2px;
    position: absolute;
    right: 0;
    top: 50%;
  }
  &:hover {
    &:after {
      border-color: ${props => props.theme.colors.secondary};
    }
  }
`;

const StyledLink = styled.span`
  background: #fff;
  display: inline-block;
  font-size: ${props => props.theme.fontSize(1)};
  font-weight: 700;
  padding: ${props => props.theme.spacing(1)};
  position: relative;
  text-transform: uppercase;
  z-index: 1;
  @media (${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.fontSize(2)};
  }
  @media (${props => props.theme.breakpoints.xl}) {
    font-size: ${props => props.theme.fontSize(3)};
  }
`;

const ReadMore = ({ title }) => (
  <StyledWrapper to={`/articulo/${generateSlug(title)}`}>
    <StyledLink>Seguir leyendo</StyledLink>
  </StyledWrapper>
);

ReadMore.propTypes = {
  title: PT.string.isRequired,
};

export default ReadMore;
