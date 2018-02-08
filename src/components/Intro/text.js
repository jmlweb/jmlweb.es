import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: ${props => (props.reverse ? 'left' : 'right')};
  @media (${props => props.theme.breakpoints.sm}) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.mediumText};
  margin: 0;
  font-size: ${props => props.theme.font.sizes.intro.sm};
  font-style: italic;
  font-weight: 400;
  line-height: 1.3;
  @media (${props => props.theme.breakpoints.xs}) {
    font-size: ${props => props.theme.font.sizes.intro.md};
  }
  @media (${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.font.sizes.intro.lg};
  }
  @media (${props => props.theme.breakpoints.xl}) {
    text-align: center;
  }
`;

const StyledFakeHeading = StyledHeading.withComponent('p');

const Text = () => (
  <StyledWrapper>
    <div>
      <StyledHeading>Soy José Manuel Lucas</StyledHeading>
      <StyledFakeHeading>Rompo y arreglo cosas</StyledFakeHeading>
    </div>
  </StyledWrapper>
);

export default Text;
