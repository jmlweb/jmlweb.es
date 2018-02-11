import styled from 'styled-components';

export default styled.div`
  margin: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  @media (${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing(3)};
  }
  @media (${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    margin: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    margin: ${({ theme }) => theme.spacing(4)};
  }
  @media (${({ theme }) => theme.breakpoints.xxl}) {
    margin: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(6)}`};
  }
`;
