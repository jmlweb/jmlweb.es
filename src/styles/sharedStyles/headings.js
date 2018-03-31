import { css } from 'styled-components';

const LINE_HEIGHT_BASE = 1.3;

export default (level) => {
  const hasTextTransform = level > 3;
  const fontSize = level < 4 ? 4 - level : 0;
  const fontWeight = level > 5 ? 'normal' : 'bold';
  const variation = (fontSize - 6) * 0.02;
  return css`
    margin: 0;
    ${hasTextTransform && 'text-transform: uppercase'};
    line-height: ${LINE_HEIGHT_BASE - variation};
    font-weight: ${fontWeight};
  `;
};
