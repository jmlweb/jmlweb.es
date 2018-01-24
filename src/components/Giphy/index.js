import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledIframeWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  position: relative;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Giphy = ({ src, title }) => (
  <StyledIframeWrapper>
    <StyledIframe
      allowFullScreen
      className="giphy-embed"
      frameBorder="0"
      height="100%"
      src={src}
      title={title}
      width="100%"
    />
  </StyledIframeWrapper>
);

Giphy.propTypes = {
  src: PT.string.isRequired,
  title: PT.string,
};

Giphy.defaultProps = {
  title: '',
};

export default Giphy;
