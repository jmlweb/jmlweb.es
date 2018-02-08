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
  padding: ${props => props.theme.spacing.p1};
  text-transform: uppercase;
  &.active,
  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  &.active {
    text-decoration: line-through;
  }
  &:last-child {
    margin-right: ${props => props.theme.spacing.n1};
  }
`;

const TopMenu = () => (
  <StyledWrapper>
    <StyledLink to="/articles">Artículos</StyledLink>
    <StyledLink to="/projects">Proyectos</StyledLink>
    <StyledLink to="/about">Quién soy</StyledLink>
  </StyledWrapper>
);

export default TopMenu;
