import { css } from 'styled-components';
import { getFontSizeMq } from '../';

const LINE_HEIGHT_BASE = 1.3;

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
  const variation = (fontSize - 6) * 0.04;
  return css`
    margin: ${getMargin(fontSize)};
    ${hasTextTransform && 'text-transform: uppercase'};
    line-height: ${LINE_HEIGHT_BASE + variation};
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
