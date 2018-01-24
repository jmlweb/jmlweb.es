import { rem } from 'polished';

const MULTIPLIERS = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const SPACE_UNIT = 8;
const PREFIX = 'u';

export default MULTIPLIERS.reduce(
  (prev, curr) => ({ ...prev, [`${PREFIX}${curr}`]: rem(curr * SPACE_UNIT) }),
  {},
);
