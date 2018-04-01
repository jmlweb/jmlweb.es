import { modularScale, stripUnit } from 'polished';

import { breakpointsObj } from './breakpoints';
import buildScale from '../utils/buildScale';

export const PX_BASE = '16px';
const NEG_VARIATIONS_NUMBER = 1;
const POS_VARIATIONS_NUMBER = 3;
const BASES = {
  SM: '16px',
  MD: '16px',
  LG: '18px',
};
const SCALES = {
  SM: 'minorThird',
  MD: 'perfectFourth',
  LG: 'perfectFourth',
};

const convertToPx = value => `${Math.round(stripUnit(value))}px`;

const createFontSizesArr = bp => ({
  [bp]: buildScale(NEG_VARIATIONS_NUMBER, POS_VARIATIONS_NUMBER)(curr =>
    convertToPx(modularScale(curr, BASES[bp], SCALES[bp]))),
});

export const fontSizes = ['SM', 'MD', 'LG'].reduce(
  (acc, curr) => ({ ...acc, ...createFontSizesArr(curr) }),
  {},
);

export const fontSizeBp = {
  SM: 0,
  MD: breakpointsObj.MD,
  LG: breakpointsObj.XXL,
};

export default (size, bp = 'MD') => fontSizes[bp][size];
