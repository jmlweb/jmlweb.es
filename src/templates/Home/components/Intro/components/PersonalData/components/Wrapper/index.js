import styled from 'styled-components';

export default styled.div`
  position: relative;
  background: ${props => props.theme.colors.primaryUltraLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: ${props => props.theme.spacing(2)};
  @media (${props => props.theme.breakpoints.xs}) {
    padding: 0;
  }
  @media (${props => props.theme.breakpoints.lg}) {
    flex: 2;
  }
`;
