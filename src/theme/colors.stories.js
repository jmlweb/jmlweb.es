import React from 'react';
import { readableColor, opacify } from 'polished';
import { storiesOf } from '@storybook/react';
import colors from './colors';
import FlexGrid from '../components/FlexGrid';
import Text from '../components/Text';

const StyledColor = FlexGrid.extend`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px solid #000;
`;

const StyledLabel = Text.extend`
  background: ${props => opacify(1, props.bg)};
  color: ${props => readableColor(props.bg)};
`;

const getContent = (colorsRow, prefix = '') =>
  Object.keys(colorsRow).map((colorKey) => {
    if (Array.isArray(colorsRow[colorKey])) {
      return getContent(colorsRow[colorKey], colorKey);
    }
    const key = `${prefix ? `${prefix}[${colorKey}] ` : colorKey}`;
    return (
      <StyledColor
        key={key}
        justify="center"
        align="center"
        bg={colorsRow[colorKey]}
        m={2}
      >
        <StyledLabel bg={colorsRow[colorKey]} p={1}>
          {key}
        </StyledLabel>
      </StyledColor>
    );
  });

storiesOf('Colors', module).add('all', () => (
  <FlexGrid wrap m={-10}>
    {getContent(colors)}
  </FlexGrid>
));
