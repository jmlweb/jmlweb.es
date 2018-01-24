import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Article from '../components/Article';
import Giphy from '../components/Giphy';
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
      <Article title="I'm working on my new website">
        <Giphy src="https://giphy.com/embed/5Zesu5VPNGJlm" title="Wait a bit more, please" />
        <StyledMessage>
          Meanwhile, you can visit my social links, or{' '}
          <a href="https://twitter.com/jmlweb">leave me a message</a>
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
