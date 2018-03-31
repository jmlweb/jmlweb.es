import React from 'react';
import PropTypes from 'prop-types';
import { readableColor, opacify } from 'polished';
import { storiesOf } from '@storybook/react';
import colors from './colors';
import FlexGrid from '../components/FlexGrid';
import Box from '../components/Box';
import Text from '../components/Text';

const {
  primary,
  primaryAlpha,
  primaryShade,
  primaryTint,
  white,
  black,
  blackAlpha,
  gray,
} = colors;

const COLORBOX_SIZE = '160px';

const StyledColorBox = FlexGrid.extend`
  width: ${COLORBOX_SIZE};
  height: ${COLORBOX_SIZE};
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
      <StyledColorBox
        key={key}
        justify="center"
        align="center"
        bg={colorsRow[colorKey]}
        m={2}
      >
        <StyledLabel bg={colorsRow[colorKey]} p="2px">
          {key}
        </StyledLabel>
      </StyledColorBox>
    );
  });

const StyledGroupBox = Box.extend`
  margin-bottom: 30px;
`;

const StyledHeading = Box.extend`
  text-align: center;
  text-transform: uppercase;
`;

const GroupBox = ({ title, children }) => (
  <StyledGroupBox>
    <StyledHeading is="h2" bg="gray.2" color="white" p={2} mb={2}>
      {title}
    </StyledHeading>
    <FlexGrid wrap>{children}</FlexGrid>
  </StyledGroupBox>
);

GroupBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const createBoxes = boxes =>
  boxes.map(box => (
    <GroupBox key={box.key} title={box.key}>
      {getContent(box.obj)}
    </GroupBox>
  ));

storiesOf('Theme/Colors', module)
  .add('all', () =>
    createBoxes([
      {
        key: 'Primary',
        obj: {
          primary,
          primaryAlpha,
          primaryShade,
          primaryTint,
        },
      },
      {
        key: 'White',
        obj: {
          white,
        },
      },
      {
        key: 'Black',
        obj: {
          black,
          blackAlpha,
        },
      },
      {
        key: 'Gray',
        obj: {
          gray,
        },
      },
    ]))
  .add('main', () =>
    createBoxes([
      {
        key: 'Primary',
        obj: {
          primary,
        },
      },
      {
        key: 'White',
        obj: {
          white,
        },
      },
      {
        key: 'Black',
        obj: {
          black,
        },
      },
      {
        key: 'Gray',
        obj: {
          gray,
        },
      },
    ]))
  .add('primary', () =>
    createBoxes([
      {
        key: 'Primary',
        obj: {
          primary,
        },
      },
      {
        key: 'Primary Alpha',
        obj: {
          primaryAlpha,
        },
      },
      {
        key: 'Primary Shade',
        obj: {
          primaryShade,
        },
      },
      {
        key: 'Primary Tint',
        obj: {
          primaryTint,
        },
      },
    ]))
  .add('black', () =>
    createBoxes([
      {
        key: 'Black',
        obj: {
          black,
        },
      },
      {
        key: 'Black Alpha',
        obj: {
          blackAlpha,
        },
      },
    ]));
