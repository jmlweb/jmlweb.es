import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link).attrs({
  activeClassName: 'active',
})`
  color: #fff;
  display: inline-block;
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing(1)};
  text-transform: uppercase;
  &.active,
  &:hover {
    color: #fff;
    text-decoration: line-through;
  }
  &.active {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  &:last-child {
    margin-right: ${({ theme }) => theme.spacing(-1)};
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    padding: ${props => `${props.theme.spacing(1)} ${props.theme.spacing(2)}`};
    &:last-child {
      margin-right: ${({ theme }) => theme.spacing(-2)};
    }
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    padding: ${props => `${props.theme.spacing(1)} ${props.theme.spacing(3)}`};
    &:last-child {
      margin-right: ${({ theme }) => theme.spacing(-3)};
    }
  }
`;

const TopMenu = () => (
  <StyledWrapper>
    <StyledLink to="/articulos">Artículos</StyledLink>
    <StyledLink to="/proyectos">Proyectos</StyledLink>
    <StyledLink to="/quiensoy">Quién soy</StyledLink>
  </StyledWrapper>
);

export default TopMenu;
