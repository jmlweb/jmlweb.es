import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Article from '../components/Article';
import Intro from '../components/Intro';
import SocialLinks from '../components/SocialLinks';

const StyledWrapper = styled.div``;

const StyledTop = styled.div`
  position: relative;
`;

const StyledContent = styled.div`
  margin: ${props => `${props.theme.spacing.u4} ${props.theme.spacing.u2}`};
`;

const StyledMessage = styled.p``;

const IndexPage = ({ data }) => (
  <StyledWrapper>
    <StyledTop>
      <Intro photo={data.photo} />
      <SocialLinks />
    </StyledTop>
    <StyledContent>
      <Article title="Estoy trabajando en mi nuevo sitio web">
        <StyledMessage>
          Puedes seguir el desarrollo en{' '}
          <a rel="nofollow noopener noreferrer" href="https://github.com/jmlweb/jmlweb.es">
            Github
          </a>.
        </StyledMessage>
        <StyledMessage>
          Mientras termino, puedes visitar mis redes sociales y{' '}
          <a rel="nofollow noopener noreferrer" href="https://twitter.com/jmlweb">
            dejarme un mensaje.
          </a>
        </StyledMessage>
      </Article>
    </StyledContent>
  </StyledWrapper>
);

IndexPage.propTypes = {
  data: PT.shape({
    photo: PT.object,
  }).isRequired,
};

export const query = graphql`
  query photo {
    photo: imageSharp(id: { regex: "/jmlweb.jpg/" }) {
      sizes(maxWidth: 384) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default IndexPage;
