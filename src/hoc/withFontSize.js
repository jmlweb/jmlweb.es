const getFontSize = ({ theme, fontSize }, bp) => {
  const scaledFontSize = theme.fontSize(fontSize, bp);
  return scaledFontSize || `${fontSize}px`;
};

export default WrappedComponent => WrappedComponent.extend`
  ${props =>
    props.fontSize !== undefined &&
    `
      font-size: ${getFontSize(props, 'sm')};
      @media(min-width: ${props.theme.fontSizeBp.md}) {
        font-size: ${getFontSize(props, 'md')};
      }
      @media(min-width: ${props.theme.fontSizeBp.lg}) {
        font-size: ${getFontSize(props, 'lg')};
      }
  `};
`;
