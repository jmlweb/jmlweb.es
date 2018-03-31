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

addDecorator((story, info) => {
  const isNeeded =
    !info ||
    (info.kind !== 'Theme/Colors' && info.kind !== 'Theme/Breakpoints');
  const wrapIfNeeded = storyInstance =>
    isNeeded ? <Box p={[2, 2, 3, 4]}>{storyInstance}</Box> : storyInstance;
  return <Main data={data}>{wrapIfNeeded(story())}</Main>;
});

configure(loadStories, module);
