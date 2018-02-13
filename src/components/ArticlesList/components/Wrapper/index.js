import styled from 'styled-components';
import styledMap from 'styled-map';

export default styled.div`
  @media (${props => props.theme.breakpoints.sm}) {
    display: ${styledMap({
    mini: 'flex',
    default: 'inherit',
  })};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    display: inherit;
    ${props => props.mini && `padding-top: ${props.theme.spacing(4)}`};
  }
`;
