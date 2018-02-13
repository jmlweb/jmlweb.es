import styled from 'styled-components';

export default styled.div`
  background: ${props => props.theme.colors.light};
  @media (${props => props.theme.breakpoints.lg}) {
    display: flex;
  }
`;
