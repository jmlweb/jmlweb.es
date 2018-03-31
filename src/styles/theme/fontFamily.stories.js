import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import fontFamily from './fontFamily';

import Box from '../../components/Box';
import Text from '../../components/Text';

faker.locale = 'es';

storiesOf('Theme/Font', module).add('fontFamily', () => (
  <div>
    <Box mb={4}>
      <Text>{fontFamily.default}</Text>{' '}
      <Text fontWeight="bold">{fontFamily.default}</Text>
    </Box>
    <Box mb={4}>
      <Box mb={2}>
        <Text>
          {Array.from({ length: 20 }).map(() => `${faker.name.findName()}, `)}
        </Text>
      </Box>
      <Box mb={2}>
        <Text>
          {Array.from({ length: 10 }).map(() => `${faker.address.streetAddress()}, `)}
        </Text>
      </Box>
      <Box mb={2}>
        <Text>
          {Array.from({ length: 10 }).map(() => `${faker.system.commonFileName()}, `)}
        </Text>
      </Box>
      <Box mb={2}>
        <Text>
          {Array.from({ length: 10 }).map(() => `${faker.lorem.sentences()}, `)}
        </Text>
      </Box>
    </Box>
    <Box mb={4}>
      <Text>{Array.from({ length: 10 }).map((v, k) => `${k - 10} `)}</Text>
      <Text>{Array.from({ length: 10 }).map((v, k) => `${k} `)}</Text>
    </Box>
    <Box mb={4}>
      <Text>1 * 2 + 3 - 4 / 5 ^ (8 % 4) = x;</Text>
    </Box>
    <Box mb={4}>
      <Text>
        {Array.from({ length: 500 }).map((v, k) => `${faker.random.alphaNumeric()}${k % 25 ? ' ' : ''}`)}
      </Text>
    </Box>
  </div>
));
