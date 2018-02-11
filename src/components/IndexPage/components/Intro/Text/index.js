import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: ${props => (props.reverse ? 'left' : 'right')};
  @media (${({ theme }) => theme.breakpoints.xs}) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.mediumText};
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.intro.sm};
  font-style: italic;
  font-weight: 400;
  line-height: 1.3;
  @media (${({ theme }) => theme.breakpoints.xxs}) {
    font-size: ${({ theme }) => theme.font.sizes.intro.md};
  }
  @media (${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font.sizes.intro.lg};
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
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
