import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledWrapper = styled.div`
  background: ${({ theme }) => rgba(theme.colors.secondary, 0.7)};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.p1} ${theme.spacing.p2}`};
  @media (${({ theme }) => theme.breakpoints.sm}) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    position: static;
    flex: 1;
    padding: 0;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const StyledLinksGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (${({ theme }) => theme.breakpoints.sm}) {
    width: 50%;
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
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
  margin-left: ${({ theme }) => theme.spacing.p2};
  &:hover {
    text-decoration: line-through;
    color: #fff;
  }
  &:first-child {
    margin-left: 0;
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    text-align: center;
    margin-left: 0;
    padding: ${({ theme }) => theme.spacing.p2};
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
