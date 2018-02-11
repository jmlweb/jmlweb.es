import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Photo from './Photo';
import Text from './Text';
import SocialLinks from './SocialLinks';

const StyledWrapper = styled.div`
  position: relative;
  @media (${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  }
`;

const StyledPersonalData = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.primaryUltraLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  padding: ${({ theme }) => theme.spacing(2)};
  @media (${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    flex: 2;
  }
`;

const Intro = ({ image }) => (
  <StyledWrapper>
    <StyledPersonalData>
      <Text />
      <Photo image={image} />
    </StyledPersonalData>
    <SocialLinks />
  </StyledWrapper>
);

Intro.propTypes = {
  image: PT.shape({
    sizes: PT.object,
  }).isRequired,
};

export default Intro;
