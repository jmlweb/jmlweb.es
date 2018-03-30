import { rem } from 'polished';
import buildScale from '../utils/buildScale';

const VARIATIONS_NUMBER = 20;

const SPACE_UNIT = 8;

const spacing = buildScale(VARIATIONS_NUMBER)(curr => rem(curr * SPACE_UNIT));

export default size => spacing[size];
