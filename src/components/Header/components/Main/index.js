import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${props => `${props.theme.spacing.p2}`};
  @media (${({ theme }) => theme.breakpoints.sm}) {
    padding: ${props => `${props.theme.spacing.p2} ${props.theme.spacing.p3}`};
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    padding: ${props => `${props.theme.spacing.p2} ${props.theme.spacing.p4}`};
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    padding: ${props => `${props.theme.spacing.p3} ${props.theme.spacing.p6}`};
  }
`;
