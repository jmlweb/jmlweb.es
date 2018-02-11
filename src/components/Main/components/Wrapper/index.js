import styled from 'styled-components';

export default styled.div`
  background: #fff;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.primaryShadow};
  min-height: 100vh;
  max-width: ${({ theme }) => theme.sizes.max};
  margin: 0 auto;
  @media (${({ theme }) => theme.breakpoints.xs}) {
    min-height: 0;
  }
`;
