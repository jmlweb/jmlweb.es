import { rem, stripUnit } from 'polished';

import { PX_BASE } from './fontSize';

const XXS = rem(390);
const XS = rem(480);
const SM = rem(660);
const MD = rem(780);
const LG = rem(900);
const XL = rem(1100);
const XXL = rem(1300);

const remToPixelNumber = remValue => stripUnit(remValue) * stripUnit(PX_BASE);

const removeOnePx = remValue => rem(remToPixelNumber(remValue) - 1);

export default {
  xxs: `min-width: ${XXS}`,
  xs: `min-width: ${XS}`,
  sm: `min-width: ${SM}`,
  md: `min-width: ${MD}`,
  lg: `min-width: ${LG}`,
  lgMax: `max-width: ${removeOnePx(LG)}`,
  xl: `min-width: ${XL}`,
  xxl: `min-width: ${XXL}`,
};
