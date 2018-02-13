import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledWrapper = styled.div`
  background: ${({ theme }) => rgba(theme.colors.dark, 0.7)};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  @media (${props => props.theme.breakpoints.sm}) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
  }
  @media (${props => props.theme.breakpoints.lg}) {
    position: static;
    flex: 1;
    padding: 0;
    background: ${props => props.theme.colors.dark};
  }
`;

const StyledLinksGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (${props => props.theme.breakpoints.sm}) {
    width: 50%;
  }
  @media (${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledLink = styled.a.attrs({
  rel: 'nofollow noopener noreferrer',
  target: '_blank',
})`
  color: #fff;
  font-weight: 700;
  -webkit-font-smoothing: subpixel-antialiasing;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  text-transform: uppercase;
  margin-left: ${props => props.theme.spacing(2)};
  &:hover {
    color: #fff;
  }
  &:first-child {
    margin-left: 0;
  }
  @media (${props => props.theme.breakpoints.lg}) {
    display: block;
    text-align: center;
    margin-left: 0;
    padding: ${props => props.theme.spacing(2)};
  }
`;

const SocialLinks = () => (
  <StyledWrapper>
    <StyledLinksGroup>
      <StyledLink href="https://github.com/jmlweb">Github</StyledLink>
      <StyledLink href="https://www.linkedin.com/in/josemanuellucas/">Linkedin</StyledLink>
      <StyledLink href="https://twitter.com/jmlweb/">Twitter</StyledLink>
      <StyledLink href="https://dribbble.com/jmlweb">DRIBBBLE</StyledLink>
    </StyledLinksGroup>
  </StyledWrapper>
);

export default SocialLinks;
