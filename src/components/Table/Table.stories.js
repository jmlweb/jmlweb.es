import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { withKnobs, array, text } from '@storybook/addon-knobs/react';

import Table from './';

storiesOf('Components/Table', module)
  .addDecorator(withKnobs)
  .add('main', () => (
    <Table
      caption={text('caption', undefined)}
      headers={array('headers', [
        'Header 1',
        'Header 2',
        'Header 3',
        'Header 4',
      ])}
      content={[
        array('content[0]', [
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
        ]),
        array('content[1]', [
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
        ]),
        array('content[2]', [
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
        ]),
        array('content[3]', [
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
          faker.name.findName(),
        ]),
      ]}
      footers={array('footers', [
        'Footer 1',
        'Footer 2',
        'Footer 3',
        'Footer 4',
      ])}
    />
  ));
