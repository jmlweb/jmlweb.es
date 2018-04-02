import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { withKnobs, array, text } from '@storybook/addon-knobs/react';

import Table from './';

const COL_NUMBER = 6;
const ROW_CONTENT_NUMBER = 6;

const headers = Array.from({ length: COL_NUMBER }).map((v, k) => `Header ${k + 1}`);
const content = Array.from({ length: ROW_CONTENT_NUMBER }).map((v, k) =>
  Array.from({ length: COL_NUMBER }).map(() => faker.name.findName()));
const footers = Array.from({ length: COL_NUMBER }).map((v, k) => `Footer ${k + 1}`);

storiesOf('Components/Table', module)
  .addDecorator(withKnobs)
  .add('main', () => (
    <Table
      caption={text('caption', undefined)}
      headers={array('headers', headers)}
      content={content.map((v, k) => array(`content[${k}]`, v))}
      footers={array('footers', footers)}
    />
  ));
