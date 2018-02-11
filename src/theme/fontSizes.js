import { modularScale, stripUnit } from 'polished';

import buildScale from '../utils/buildScale';

const BASE = '1rem';
const VARIATIONS_NUMBER = 9;
const SCALE = 'minorSecond';

const convertToRem = value => `${stripUnit(value)}rem`;

const fontSizes = buildScale(VARIATIONS_NUMBER)(curr =>
  convertToRem(modularScale(curr, BASE, SCALE)));

export default size => fontSizes[size];
