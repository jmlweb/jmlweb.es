import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: block;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardImage = ({ to, src }) => (
  <StyledLink to={to}>
    <StyledImage src={src} alt="" />
  </StyledLink>
);

export default CardImage;
