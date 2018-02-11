import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Logo from '../../../Logo';

const StyledLink = styled(Link)`
  display: block;
`;

const StyledLogo = styled(Logo)`
  display: block;
`;

const LinkedLogo = ({ title }) => (
  <StyledLink to="/" title={title}>
    <StyledLogo />
  </StyledLink>
);

LinkedLogo.propTypes = {
  title: PT.string.isRequired,
};

export default LinkedLogo;
