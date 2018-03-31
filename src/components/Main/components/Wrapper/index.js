import styled from 'styled-components';

export default styled.div`
  background: #fff;
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  box-shadow: 0 0 4px ${props => props.theme.colors.shadow};
  min-height: 100vh;
  max-width: ${props => props.theme.sizes.max};
  margin: 0 auto;
  @media (${props => props.theme.breakpoints.xs}) {
    min-height: 0;
  }
`;
