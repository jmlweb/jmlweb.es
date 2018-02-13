import styled from 'styled-components';

export default styled.div`
  flex: 1;
  margin-top: ${props => props.theme.spacing(3)};
  &:first-child {
    margin-top: 0;
  }
  @media (${props => props.theme.breakpoints.md}) {
    &:nth-child(2) {
      margin-top: 0;
    }
    &:nth-child(2n + 1) {
      margin-right: ${({ theme }) => `calc(${theme.spacing(1)} * 1.5)`};
    }
    &:nth-child(2n) {
      margin-left: ${({ theme }) => `calc(${theme.spacing(1)} * 1.5)`};
    }
  }
  @media (${props => props.theme.breakpoints.lg}) {
    &:nth-child(2n + 1) {
      margin-right: ${props => props.theme.spacing(2)};
    }
    &:nth-child(2n) {
      margin-left: ${props => props.theme.spacing(2)};
    }
  }
  @media (${props => props.theme.breakpoints.xl}) {
    &:nth-child(2n + 1) {
      margin-right: ${props => props.theme.spacing(3)};
    }
    &:nth-child(2n) {
      margin-left: ${props => props.theme.spacing(3)};
    }
  }
`;
