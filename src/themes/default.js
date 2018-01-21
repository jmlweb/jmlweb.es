const colors = {
  primary: '#362bdb',
  lightPrimary: '#e4e3f5',
  text: '#60677f',
  lightText: '#a49d97',
};

const SPACE_UNIT = 8;

const getArrayOfUnits = multiplier => [...Array(5)].map((_, i) => (i + 1) * multiplier);

const spacing = getArrayOfUnits(-1);

export default {
  colors,
  spacing,
};
