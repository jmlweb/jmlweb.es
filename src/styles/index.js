import theme from './theme';
import sharedStyles from './sharedStyles';
import createGlobalStyles from './globalStyles';
import createGetFontSizeMq from './utils/getFontSizeMq';

export { theme };
export { sharedStyles };
export const globalStyles = () => createGlobalStyles({ theme, sharedStyles });
export const getFontSizeMq = createGetFontSizeMq(theme);
