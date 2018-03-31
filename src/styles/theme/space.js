import { rem } from 'polished';
import buildScale from '../utils/buildScale';

const VARIATIONS_NUMBER = 10;

const SPACE_UNIT = 8;

export default buildScale(0, VARIATIONS_NUMBER)(curr => rem(curr * SPACE_UNIT));

// export default [0, 4, 8, 16, 32, 64, 128, 256, 512];
