import styled from 'styled-components';

export default styled.div`
  & h3 {
    font-size: ${props => props.theme.fontSize(2)};
    margin-bottom: 0;
    @media (${props => props.theme.breakpoints.lg}) {
      font-size: ${props => props.theme.fontSize(3)};
    }
    @media (${props => props.theme.breakpoints.xl}) {
      font-size: ${props => props.theme.fontSize(4)};
    }
    @media (${props => props.theme.breakpoints.xxl}) {
      font-size: ${props => props.theme.fontSize(5)};
    }
  }
`;
