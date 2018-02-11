import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import generateSlug from '../../../../utils/generateSlug';

const StyledHeading = styled.h2`
  -webkit-font-smoothing: antialiased;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes(3)};
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  @media (${({ theme }) => theme.breakpoints.xxs}) {
    font-size: ${({ theme }) => theme.fontSizes(4)};
  }
  @media (${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fontSizes(5)};
  }
  @media (${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes(6)};
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes(7)};
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSizes(8)};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
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
