import { css } from 'styled-components';

const getFontSize = ({ theme, fontSize }, bp) => {
  const scaledFontSize = theme.fontSize(fontSize, bp);
  return scaledFontSize || `${fontSize}px`;
};

export default theme => (fontSize) => {
  const props = { theme, fontSize };
  return css`
    font-size: ${getFontSize(props, 'SM')};
    @media (min-width: ${props.theme.fontSizeBp.MD}) {
      font-size: ${getFontSize(props, 'MD')};
    }
    @media (min-width: ${props.theme.fontSizeBp.LG}) {
      font-size: ${getFontSize(props, 'LG')};
    }
  `;
};
