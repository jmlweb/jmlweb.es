import styled from 'styled-components';
import { shade } from 'polished';

export default styled.div`
  position: relative;
  @media (${props => props.theme.breakpoints.lg}) {
    display: flex;
    border-bottom: 1px solid ${props => props.theme.colors.dark};
    box-shadow: 0 1px 0 ${props => shade(0.8, props.theme.colors.dark)};
  }
`;
