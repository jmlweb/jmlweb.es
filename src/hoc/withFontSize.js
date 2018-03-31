const getFontSize = ({ theme, fontSize }) => {
  const scaledFontSize = theme.fontSize(fontSize);
  return scaledFontSize || `${fontSize}px`;
};

export default WrappedComponent => WrappedComponent.extend`
  ${props =>
    props.fontSize !== undefined && `font-size: ${getFontSize(props)}`};
`;
