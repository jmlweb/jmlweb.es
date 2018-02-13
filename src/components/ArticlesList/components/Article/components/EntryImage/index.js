import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { timingFunctions } from 'polished';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  margin: ${props => props.theme.spacing(2)};
  @media (${props => props.theme.breakpoints.sm}) {
    margin: ${props => props.theme.spacing(3)};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    margin: ${props => props.theme.spacing(4)};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  transition: all 0.3s ${timingFunctions('easeOutQuad')};
  > .gatsby-image-outer-wrapper {
    transition: all 0.5s ${timingFunctions('easeOutQuad')};
  }
  &:hover {
    opacity: 0.8;
    filter: saturate(9) grayscale(0.7);
    > .gatsby-image-outer-wrapper {
      transform: scale(1.1, 1.1) rotate(-0.5deg);
    }
  }
`;

const EntryImage = ({ photo, url }) => (
  <Wrapper>
    <StyledLink to={url}>
      <Img sizes={photo.sizes} />
    </StyledLink>
  </Wrapper>
);

EntryImage.propTypes = {
  photo: PT.shape({
    sizes: PT.object,
  }).isRequired,
  url: PT.string.isRequired,
};

export default EntryImage;
