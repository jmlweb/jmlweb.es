import { modularScale, stripUnit } from 'polished';

import buildScale from '../utils/buildScale';

export const PX_BASE = '16px';
const BASE = '1rem';
const NEG_VARIATIONS_NUMBER = 2;
const POS_VARIATIONS_NUMBER = 5;
const SCALE = 'minorThird';

const convertEmToRem = value => `${stripUnit(value)}rem`;

export const fontSizes = buildScale(
  NEG_VARIATIONS_NUMBER,
  POS_VARIATIONS_NUMBER,
)(curr => convertEmToRem(modularScale(curr, BASE, SCALE)));

export default size => fontSizes[size];
