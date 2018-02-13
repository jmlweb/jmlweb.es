import StyledRow from '../../../StyledRow';

export default StyledRow.extend`
  background: ${props => props.theme.colors.primary};
  padding-top: ${props => `${props.theme.spacing(2)}`};
  padding-bottom: ${props => `${props.theme.spacing(2)}`};
  @media (${props => props.theme.breakpoints.xl}) {
    padding-top: ${props => `${props.theme.spacing(3)}`};
    padding-bottom: ${props => `${props.theme.spacing(3)}`};
  }
`;
