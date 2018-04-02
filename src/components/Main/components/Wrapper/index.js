import styled from 'styled-components';

export default styled.div`
  position: absolute;
  background: ${props => props.theme.colors.gray[4]};
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  box-shadow: 0 0 4px ${props => props.theme.colors.shadow};
  min-height: 100vh;
  width: 100%;
  @media (${props => props.theme.breakpoints.xs}) {
    min-height: 0;
  }
`;
