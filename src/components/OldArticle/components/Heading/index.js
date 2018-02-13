import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import generateSlug from '../../../../utils/generateSlug';

const StyledHeading = styled.h2`
  -webkit-font-smoothing: antialiased;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize(3)};
  margin: 0 0 ${props => props.theme.spacing(2)};
  &:hover {
    border-color: ${props => props.theme.colors.secondary};
  }
  @media (${props => props.theme.breakpoints.xxs}) {
    font-size: ${props => props.theme.fontSize(4)};
  }
  @media (${props => props.theme.breakpoints.xs}) {
    font-size: ${props => props.theme.fontSize(5)};
  }
  @media (${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSize(6)};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.fontSize(7)};
  }
  @media (${props => props.theme.breakpoints.xl}) {
    font-size: ${props => props.theme.fontSize(8)};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding-bottom: ${props => props.theme.spacing(1)};
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Heading = ({ title }) => (
  <StyledHeading>
    <StyledLink to={`/articulo/${generateSlug(title)}`}>{title}</StyledLink>
  </StyledHeading>
);

Heading.propTypes = {
  title: PT.string.isRequired,
};

export default Heading;
