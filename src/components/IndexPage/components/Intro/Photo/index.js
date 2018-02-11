import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledPhoto = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: calc(100vw - 220px - 1rem);
  @media (${({ theme }) => theme.breakpoints.xxs}) {
    width: calc(100vw - 240px - 1rem);
  }
  @media (${({ theme }) => theme.breakpoints.xs}) {
    border-radius: 0;
    width: 50%;
  }
`;

const Photo = ({ image }) => (
  <StyledPhoto>
    <Img sizes={image.sizes} alt="" />
  </StyledPhoto>
);

Photo.propTypes = {
  image: PT.shape({
    sizes: PT.any,
  }).isRequired,
};

export default Photo;
