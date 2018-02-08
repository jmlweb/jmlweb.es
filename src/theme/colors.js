import { rgba, tint } from 'polished';

const primary = '#362bdb';
const primaryLight = '#e4e3f5';
const primaryUltraLight = tint(0.3, primaryLight);

export default Object.freeze({
  primary,
  primaryLight,
  primaryUltraLight,
  primaryShadow: rgba(primary, 0.2),
  secondary: '#32375B',
  mediumText: '#78688E',
  text: '#60677f',
  lightText: '#a49d97',
  dark: '#4a4a4a',
  outerBg: rgba(primaryLight, 0.2),
});
