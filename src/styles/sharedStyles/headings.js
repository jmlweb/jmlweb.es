import { css } from 'styled-components';
import { getFontSizeMq } from '../';

const LINE_HEIGHT_BASE = 1.4;

export default theme => (level) => {
  const getMargin = fontSize => (fontSize < 2 ? '20px 0 12px' : '24px 0 16px');
  const getFontSize = () => {
    if (level < 4) {
      return 4 - level;
    }
    return level === 6 ? -1 : 0;
  };
  const getColor = () => {
    const { colors } = theme;
    if (level === 2 || level === 4) {
      return colors.gray[2];
    }
    if (level === 3 || level === 5) {
      return colors.gray[3];
    }
    return colors.gray[1];
  };

  const hasTextTransform = level > 3;
  const fontSize = getFontSize(level);
  const fontWeight = level > 4 ? 'normal' : 'bold';
  const variation = fontSize * 0.1;

  return css`
    ${props =>
    (!props || !props.color) &&
      `
      color: ${getColor()};
    `};
    margin: ${getMargin(fontSize)};
    ${hasTextTransform && 'text-transform: uppercase'};
    line-height: ${Math.round((LINE_HEIGHT_BASE - variation) * 10) / 10};
    font-weight: ${fontWeight};
    ${getFontSizeMq(fontSize)};
    letter-spacing: -0.004rem;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  `;
};
