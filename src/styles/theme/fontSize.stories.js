import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
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
      display: none;
      @media(max-width: ${mqWidths.prev}) {
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
      @media(min-width: ${mqWidths.next}) {
        display: none;
      }
    `};
  `;
};

const CleanedBox = ({ bp, ...props }) => <Box {...props} />;

const StyledBox = styled(CleanedBox)`
  ${props => getMq(props)};
`;

storiesOf('Theme/Font', module).add('fontSize', () =>
  sizesArr.map(size =>
    ['SM', 'MD', 'LG'].map(bp => (
      <StyledBox mb={4} key={`${bp}-${size}`} bp={bp}>
        <Text fontSize={size} is="p" fontWeight="bold">
          {bp}: fontSize({size}) / {fontSize(size, bp)}
        </Text>
        <Text fontSize={size}>{faker.lorem.sentences()}</Text>
      </StyledBox>
    ))));
