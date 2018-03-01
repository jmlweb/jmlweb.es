import { modularScale, stripUnit } from 'polished';

import buildScale from '../utils/buildScale';

export const PX_BASE = '16px';
const BASE = '1rem';
const VARIATIONS_NUMBER = 20;
const SCALE = 'minorSecond';

const convertEmToRem = value => `${stripUnit(value)}rem`;

const fontSizes = buildScale(VARIATIONS_NUMBER)(curr =>
  convertEmToRem(modularScale(curr, BASE, SCALE)));

export default size => fontSizes[size];
