import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

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

global.window.___loader = {
  enqueue: () => {},
};

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
  return (
    <MemoryRouter initialEntries={['/']}>
      <Main data={data}>{wrapIfNeeded(story())}</Main>
    </MemoryRouter>
  );
});

configure(loadStories, module);
