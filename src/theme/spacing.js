import { rem } from 'polished';

const MULTIPLIERS = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SPACE_UNIT = 8;
const PREFIX = 'u';
const PREFIXES = ['p', 'n'];

const getKey = multiplier => `${PREFIXES[multiplier >= 0 ? 0 : 1]}${Math.abs(multiplier)}`;

export default MULTIPLIERS.reduce(
  (prev, curr) => ({ ...prev, [`${getKey(curr)}`]: rem(curr * SPACE_UNIT) }),
  {},
);
