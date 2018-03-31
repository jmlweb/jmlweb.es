import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';

import Heading from './';

const fakeText = faker.lorem.words(20);

const getHeading = (level, children, tag) => (
  <Heading key={level} level={level} tag={tag}>
    {`Heading level ${level}: ${children}`}
  </Heading>
);

storiesOf('Components/Heading', module)
  .addDecorator(withKnobs)
  .add('main', () => (
    <div>
      {Array.from({ length: 6 }).map((v, k) =>
        getHeading(k + 1, text(`children${k + 1}`, fakeText)))}
    </div>
  ))
  .add('playground', () =>
    getHeading(
      number('level', 1),
      text('children', fakeText),
      text('tag', undefined),
    ));
