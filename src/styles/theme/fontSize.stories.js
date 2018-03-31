import React from 'react';
import { storiesOf } from '@storybook/react';
import { stripUnit } from 'polished';
import faker from 'faker';

import fontSize, { fontSizes } from './fontSize';
import Box from '../../components/Box';
import Text from '../../components/Text';

const sizesArr = Object.keys(fontSizes.md)
  .map(v => 20 + Number(v))
  .sort()
  .map(v => v - 20);

storiesOf('Theme/Font', module).add('fontSize', () =>
  sizesArr.map(size => (
    <Box mb={4} key={size}>
      <Text fontSize={size} is="h2">
        fontSize({size}) / {fontSize(size)} /{' '}
        {`${Number(stripUnit(fontSize(size))) * 16}px`}
      </Text>
      <Text fontSize={size}>{faker.lorem.sentences()}</Text>
    </Box>
  )));
