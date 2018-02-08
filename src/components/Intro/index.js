import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Text from './text';
import generateRandom from '../../utils/generateRandom';

const StyledWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.primaryUltraLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  padding: ${props => props.theme.spacing.p2};
  @media (${props => props.theme.breakpoints.sm}) {
    padding: 0;
  }
  @media (${props => props.theme.breakpoints.xl}) {
    flex: 2;
  }
`;

const StyledPhoto = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: calc(100vw - 220px - 1rem);
  @media (${props => props.theme.breakpoints.xs}) {
    width: calc(100vw - 240px - 1rem);
  }
  @media (${props => props.theme.breakpoints.sm}) {
    border-radius: 0;
    width: 50%;
  }
`;

const isReversed = generateRandom(0, 10) >= 5;

const Intro = ({ photo }) => (
  <StyledWrapper reverse={isReversed}>
    <StyledPhoto>
      <Img sizes={photo.sizes} alt="" />
    </StyledPhoto>
    <Text reverse={isReversed} />
  </StyledWrapper>
);

Intro.propTypes = {
  photo: PT.shape({
    sizes: PT.any,
  }).isRequired,
};

export default Intro;
