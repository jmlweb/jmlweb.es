import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  @media (min-width: 480px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.lightText};
  margin: 0;
  font-size: ${props => props.theme.font.sizes.intro.sm};
  font-style: italic;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 480px) {
    font-size: ${props => props.theme.font.sizes.intro.md};
  }
  @media (min-width: 660px) {
    font-size: ${props => props.theme.font.sizes.intro.lg};
  }
`;

const StyledFakeHeading = StyledHeading.withComponent('p');

const Text = () => (
  <StyledWrapper>
    <div>
      <StyledHeading>I'm José Manuel Lucas</StyledHeading>
      <StyledFakeHeading>I like to break & fix things</StyledFakeHeading>
    </div>
  </StyledWrapper>
);

export default Text;
