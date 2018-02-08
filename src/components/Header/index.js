import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Logo from '../Logo';
import TopMenu from '../TopMenu';

const StyledHeader = styled.div`
  background: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primaryShadow};
  padding: ${props => `${props.theme.spacing.p2}`};
  @media (${props => props.theme.breakpoints.xl}) {
    padding: ${props => `${props.theme.spacing.p2} ${props.theme.spacing.p4}`};
  }
  @media (${props => props.theme.breakpoints.xxl}) {
    padding: ${props => `${props.theme.spacing.p3} ${props.theme.spacing.p6}`};
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: block;
`;

const StyledLogo = styled(Logo)`
  display: block;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <StyledWrapper>
      <StyledLink to="/" title={title}>
        <StyledLogo />
      </StyledLink>
      {/* <TopMenu /> */}
    </StyledWrapper>
  </StyledHeader>
);

Header.propTypes = {
  title: PT.string.isRequired,
};

export default Header;
