import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Card from './';
import Box from '../Box';

const fakeText = faker.lorem.words(10);

storiesOf('Components/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Box m={4}>{story()}</Box>)
  .add('main', () => (
    <Card title="Creación de sitios estáticos con Gatsby.js, Contentful y Netlify. Parte 1" link="/" />
  ));
