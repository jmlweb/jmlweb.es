import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${props => `${props.theme.spacing(2)}`};
  @media (${({ theme }) => theme.breakpoints.sm}) {
    padding: ${props => `${props.theme.spacing(2)} ${props.theme.spacing(3)}`};
  }
  @media (${({ theme }) => theme.breakpoints.lg}) {
    padding: ${props => `${props.theme.spacing(2)} ${props.theme.spacing(4)}`};
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    padding: ${props => `${props.theme.spacing(3)} ${props.theme.spacing(6)}`};
  }
`;
