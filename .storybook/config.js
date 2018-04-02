import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import Main from '../src/components/Main';
import Box from '../src/components/Box';

const req = require.context('../src', true, /\.stories\.js$/);

const data = {
  site: {
    siteMetadata: {
      title: '',
      keywords: '',
      googleVerification: '',
    },
  },
};

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const StyledBox = Box.extend`
  background: #fff;
  max-width: 800px;
`;

addDecorator((story, info) => {
  const isNeeded =
    !info ||
    !info.kind ||
    !['Theme/Colors', 'Theme/Breakpoints', 'Components/Card'].includes(
      info.kind,
    );
  const wrapIfNeeded = storyInstance =>
    isNeeded ? (
      <StyledBox p={[2, 2, 3, 4]} mx="auto">
        {storyInstance}
      </StyledBox>
    ) : (
      storyInstance
    );
  return <Main data={data}>{wrapIfNeeded(story())}</Main>;
});

configure(loadStories, module);
