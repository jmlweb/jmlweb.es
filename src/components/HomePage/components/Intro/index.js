import React from 'react';
import PT from 'prop-types';

import Wrapper from './components/Wrapper';
import PersonalData from './components/PersonalData';
import SocialLinks from './components/SocialLinks';

const Intro = ({ image }) => (
  <Wrapper>
    <PersonalData image={image} />
    <SocialLinks />
  </Wrapper>
);

Intro.propTypes = {
  image: PT.shape({
    sizes: PT.object,
  }).isRequired,
};

export default Intro;
