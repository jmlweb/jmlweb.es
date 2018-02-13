import React from 'react';
import PT from 'prop-types';

import Photo from './components/Photo';
import Text from './components/Text';
import Wrapper from './components/Wrapper';

const PersonalData = ({ image }) => (
  <Wrapper>
    <Text />
    <Photo image={image} />
  </Wrapper>
);

PersonalData.propTypes = {
  image: PT.shape({
    sizes: PT.object,
  }).isRequired,
};

export default PersonalData;
