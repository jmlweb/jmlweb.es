import styled from 'styled-components';

export default styled.article`
  border-top: 2px solid ${props => props.theme.colors.alphaBorder};
  &:first-child {
    border-top: 0;
  }
  @media (${props => props.theme.breakpoints.sm}) and (${props => props.theme.breakpoints.lgMax}) {
    border-top: 0;
    &:nth-child(2n + 1) {
      border-right: 1px solid ${props => props.theme.colors.alphaBorder};
    }
    &:nth-child(2n) {
      border-left: 1px solid ${props => props.theme.colors.alphaBorder};
    }
  }
`;
