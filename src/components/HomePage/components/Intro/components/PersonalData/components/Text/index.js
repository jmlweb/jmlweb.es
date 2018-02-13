import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: ${props => (props.reverse ? 'left' : 'right')};
  @media (${props => props.theme.breakpoints.xs}) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.lightGray};
  margin: 0;
  font-size: ${props => props.theme.fontSize(3)};
  font-style: italic;
  font-weight: 400;
  line-height: 1.3;
  @media (${props => props.theme.breakpoints.xxs}) {
    font-size: ${props => props.theme.fontSize(4)};
  }
  @media (${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSize(5)};
  }
  @media (${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSize(6)};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.fontSize(7)};
    text-align: center;
  }
  @media (${props => props.theme.breakpoints.xl}) {
    font-size: ${props => props.theme.fontSize(8)};
  }
  @media (${props => props.theme.breakpoints.xxl}) {
    font-size: ${props => props.theme.fontSize(9)};
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
