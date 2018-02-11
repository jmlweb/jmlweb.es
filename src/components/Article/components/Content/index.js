import styled from 'styled-components';

export default styled.div`
  & h3 {
    font-size: ${({ theme }) => theme.fontSizes(2)};
    margin-bottom: 0;
    @media (${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.fontSizes(3)};
    }
    @media (${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.fontSizes(4)};
    }
    @media (${({ theme }) => theme.breakpoints.xxl}) {
      font-size: ${({ theme }) => theme.fontSizes(5)};
    }
  }
`;
