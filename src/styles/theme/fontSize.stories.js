import React from 'react';
import { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { stripUnit } from 'polished';
import faker from 'faker';

import fontSize, { fontSizes } from './fontSize';
import Box from '../../components/Box';
import Text from '../../components/Text';

const sizesArr = Object.keys(fontSizes.MD)
  .map(v => 20 + Number(v))
  .sort()
  .map(v => v - 20);

const getMq = ({ theme, bp }) => {
  const { fontSizeBp } = theme;
  const bpKeys = Object.keys(fontSizeBp);
  const currentPos = bpKeys.indexOf(bp);

  const getWidth = pos =>
    (pos < 0 || pos === bpKeys.length ? undefined : fontSizeBp[bpKeys[pos]]);

  const mqWidths = {
    current: getWidth(currentPos),
    prev: getWidth(currentPos - 1),
    next: getWidth(currentPos + 1),
  };
  return css`
    ${mqWidths.prev !== undefined &&
      `
      @media(max-width: ${mqWidths.current}) {
        display: none;
      }
    `};
    ${mqWidths.current !== undefined &&
      `
      @media(min-width: ${mqWidths.current}) {
        display: block;
      }
    `};
    ${mqWidths.next !== undefined &&
      `
      @media(max-width: ${mqWidths.next}) {
        display: none;
      }
    `};
  `;
};

const StyledBox = Box.extend`
  ${props => getMq(props)};
`;

storiesOf('Theme/Font', module).add('fontSize', () =>
  sizesArr.map(size =>
    ['SM', 'MD', 'LG'].map(bp => (
      <StyledBox mb={4} key={`${bp}-${size}`} bp={bp}>
        <Text fontSize={size} is="h2">
          {bp}: fontSize({size}) / {fontSize(size, bp)} /{' '}
          {`${Number(stripUnit(fontSize(size, bp))) * 16}px`}
        </Text>
        <Text fontSize={size}>{faker.lorem.sentences()}</Text>
      </StyledBox>
    ))));
