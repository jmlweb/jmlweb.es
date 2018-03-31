import React from 'react';
import { storiesOf } from '@storybook/react';
import { stripUnit } from 'polished';

import fontSize, { fontSizes } from './fontSize';
import Box from '../components/Box';
import Text from '../components/Text';

const sizesArr = Object.keys(fontSizes)
  .map(v => 20 + Number(v))
  .sort()
  .map(v => v - 20);

storiesOf('Theme/FontSize', module).add('main', () =>
  sizesArr.map(size => (
    <Box mb={4} key={size}>
      <Text fontSize={size} is="h2">
        fontSize({size}) / {fontSize(size)} /{' '}
        {`${Number(stripUnit(fontSize(size))) * 16}px`}
      </Text>
      <Text fontSize={size}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Box>
  )));
