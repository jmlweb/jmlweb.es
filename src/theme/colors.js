import { rgba } from 'polished';

const colors = Object.freeze({
  dark: '#333758',
  gray: '#55575e',
  light: '#eae9f6',
  lighter: '#f6f6fc',
  lightGray: '#73768e',
  outer: '#F8F8FD',
  primary: '#362BDB',
  white: '#fff',
});

export default Object.freeze({
  ...colors,
  alphaBorder: rgba(colors.lightGray, 0.2),
  shadow: rgba(colors.dark, 0.3),
});

// const primary = '#362bdb';
// const primaryLight = '#e4e3f5';
// const primaryUltraLight = tint(0.3, primaryLight);

// export default Object.freeze({
//   primary,
//   primaryLight,
//   primaryUltraLight,
//   primaryShadow: rgba(primary, 0.2),
//   secondary: '#32375B',
//   mediumText: '#78688E',
//   text: '#60677f',
//   outerBg: rgba(primaryLight, 0.2),
// });
