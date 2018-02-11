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
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
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
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const StyledLink = styled.span`
  background: #fff;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes(1)};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing(1)};
  position: relative;
  text-transform: uppercase;
  z-index: 1;
  @media (${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes(2)};
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSizes(3)};
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
