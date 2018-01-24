import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div``;

const StyledHeading = styled.h2``;

const Article = ({ title, children }) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    {children}
  </StyledWrapper>
);

export default Article;
