import React from 'react';
import { storiesOf } from '@storybook/react';

import fontFamily from './fontFamily';

import Text from '../components/Text';

storiesOf('Theme/FontFamily', module).add('main', () => (
  <Text>{fontFamily.default}</Text>
));
