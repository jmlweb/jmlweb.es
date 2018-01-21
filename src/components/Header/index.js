import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

const StyledHeader = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
`;

const StyledHeading = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link) `
  color: white;
  text-decoration: none;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <StyledWrapper>
      <StyledHeading>
        <StyledLink to="/">
          {title}
        </StyledLink>
      </StyledHeading>
    </StyledWrapper>
  </StyledHeader>
);

export default Header
