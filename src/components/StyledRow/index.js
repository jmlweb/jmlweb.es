import styled from 'styled-components';

export default styled.div`
  padding-left: ${props => `${props.theme.spacing(2)}`};
  padding-right: ${props => `${props.theme.spacing(2)}`};
  ${props => props.vertical && `padding-top: ${props.theme.spacing(2)}`};
  ${props => props.vertical && `padding-bottom: ${props.theme.spacing(2)}`};
  @media (${props => props.theme.breakpoints.sm}) {
    padding-left: ${props => `${props.theme.spacing(3)}`};
    padding-right: ${props => `${props.theme.spacing(3)}`};
    ${props => props.vertical && `padding-top: ${props.theme.spacing(3)}`};
    ${props => props.vertical && `padding-bottom: ${props.theme.spacing(3)}`};
  }
  @media (${props => props.theme.breakpoints.lg}) {
    padding-left: ${props => `${props.theme.spacing(4)}`};
    padding-right: ${props => `${props.theme.spacing(4)}`};
    ${props => props.vertical && `padding-top: ${props.theme.spacing(4)}`};
    ${props => props.vertical && `padding-bottom: ${props.theme.spacing(4)}`};
  }
`;
