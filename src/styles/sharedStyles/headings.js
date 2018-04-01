import { css } from 'styled-components';
import { getFontSizeMq } from '../';

const LINE_HEIGHT_BASE = 1.4;

const getMargin = fontSize => (fontSize < 2 ? '20px 0 12px' : '24px 0 16px');

const getFontSize = (level) => {
  if (level < 4) {
    return 4 - level;
  }
  return level === 6 ? -1 : 0;
};

export default (level) => {
  const hasTextTransform = level > 3;
  const fontSize = getFontSize(level);
  const fontWeight = level > 4 ? 'normal' : 'bold';
  const variation = fontSize * 0.1;
  return css`
    margin: ${getMargin(fontSize)};
    ${hasTextTransform && 'text-transform: uppercase'};
    line-height: ${Math.round((LINE_HEIGHT_BASE - variation) * 10) / 10};
    font-weight: ${fontWeight};
    ${getFontSizeMq(fontSize)};
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  `;
};
