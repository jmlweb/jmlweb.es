import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Text from './text';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.u2};
  @media (min-width: 480px) {
    padding: 0;
  }
`;

const StyledPhoto = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: calc(100vw - 210px - 2rem);
  @media (min-width: 480px) {
    border-radius: 0;
    width: 50%;
  }
`;

const Intro = ({ photo }) => (
  <StyledWrapper>
    <StyledPhoto>
      <Img sizes={photo.sizes} alt="" />
    </StyledPhoto>
    <Text />
  </StyledWrapper>
);

export default Intro;
