import styled from 'styled-components';

export default styled.div`
  position: relative;
  @media (${props => props.theme.breakpoints.lg}) {
    display: flex;
    border-bottom: 2px solid ${props => props.theme.colors.dark};
    box-shadow: 0 2px 0 ${props => props.theme.colors.primary};
  }
`;
