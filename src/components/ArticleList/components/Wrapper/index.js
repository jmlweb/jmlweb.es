import styled from 'styled-components';

export default styled.div`
  margin: ${({ theme }) => `${theme.spacing.p3} ${theme.spacing.p2}`};
  @media (${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing.p3};
  }
  @media (${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    margin: ${({ theme }) => `${theme.spacing.p3} ${theme.spacing.p4}`};
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    margin: ${({ theme }) => theme.spacing.p4};
  }
  @media (${({ theme }) => theme.breakpoints.xxl}) {
    margin: ${({ theme }) => `${theme.spacing.p4} ${theme.spacing.p6}`};
  }
`;
