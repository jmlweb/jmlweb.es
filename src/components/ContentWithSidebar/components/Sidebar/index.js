import styled from 'styled-components';

export default styled.div`
  margin: ${({ theme }) => `0 ${theme.spacing(2)}`};
  background: #fff;
  @media (${props => props.theme.breakpoints.sm}) {
    margin: ${({ theme }) => `0 ${theme.spacing(3)}`};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    width: 33.3%;
    margin: 0;
  }
`;
