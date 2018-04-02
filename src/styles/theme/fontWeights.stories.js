import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import fontWeights from './fontWeights';

import Box from '../../components/Box';
import Text from '../../components/Text';

faker.locale = 'es';

storiesOf('Theme/Font', module).add('fontWeights', () => (
  <div>
    {Object.keys(fontWeights).map(fontWeightKey => (
      <Box key={fontWeightKey} mb={4}>
        <Text fontWeight={fontWeightKey}>{fontWeightKey.toUpperCase()}: </Text>
        <Text fontWeight={fontWeightKey}>
          {Array.from({ length: 3 }).map(() => `${faker.lorem.sentences()}, `)}
        </Text>
      </Box>
    ))}
  </div>
));
