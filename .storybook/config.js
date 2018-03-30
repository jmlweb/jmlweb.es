import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import Main from '../src/components/Main';

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

addDecorator(story => <Main data={data}>{story()}</Main>);

configure(loadStories, module);
