import { getFontSizeMq } from '../styles';

export default WrappedComponent => WrappedComponent.extend`
  ${props => props.fontSize !== undefined && getFontSizeMq(props.fontSize)};
`;
