import { modularScale, stripUnit } from 'polished';

import { breakpointsObj } from './breakpoints';
import buildScale from '../utils/buildScale';

export const PX_BASE = '16px';
const NEG_VARIATIONS_NUMBER = 1;
const POS_VARIATIONS_NUMBER = 3;
const BASES = {
  sm: '0.9rem',
  md: '1rem',
  lg: '1.15rem',
};
const SCALES = {
  sm: 'majorThird',
  md: 'perfectFourth',
  lg: 'perfectFourth',
};

const convertEmToRem = value => `${stripUnit(value)}rem`;

const createFontSizesArr = bp => ({
  [bp]: buildScale(NEG_VARIATIONS_NUMBER, POS_VARIATIONS_NUMBER)(curr =>
    convertEmToRem(modularScale(curr, BASES[bp], SCALES[bp]))),
});

export const fontSizes = ['sm', 'md', 'lg'].reduce(
  (acc, curr) => ({ ...acc, ...createFontSizesArr(curr) }),
  {},
);

export const fontSizeBp = {
  sm: 0,
  md: breakpointsObj.MD,
  lg: breakpointsObj.XXL,
};

export default (size, bp = 'md') => fontSizes[bp][size];
