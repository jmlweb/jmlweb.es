import theme from './theme';
import createSharedStyles from './sharedStyles';
import createGlobalStyles from './globalStyles';
import createGetFontSizeMq from './utils/getFontSizeMq';

export { theme };
export const sharedStyles = createSharedStyles({ theme });
export const globalStyles = () => createGlobalStyles({ theme, sharedStyles });
export const getFontSizeMq = createGetFontSizeMq(theme);
export * from './hoc';
