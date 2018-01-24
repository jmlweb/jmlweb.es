import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Logo from '../Logo';

const StyledHeader = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: ${props => `${props.theme.spacing.u2}`};
`;

const StyledWrapper = styled.div``;

const StyledLink = styled(Link)``;

const Header = ({ title }) => (
  <StyledHeader>
    <StyledWrapper>
      <StyledLink to="/" title={title}>
        <Logo />
      </StyledLink>
    </StyledWrapper>
  </StyledHeader>
);

Header.propTypes = {
  title: PT.string.isRequired,
};

export default Header;
