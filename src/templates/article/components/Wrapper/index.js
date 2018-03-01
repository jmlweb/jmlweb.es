import styled from 'styled-components';

export default styled.div`
  background: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing(2)};
  @media (${props => props.theme.breakpoints.lg}) {
    ${props => `padding-top: ${props.theme.spacing(4)}`};
  }
`;
