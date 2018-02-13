import StyledRow from '../../../StyledRow';

export default StyledRow.extend`
  padding-top: ${({ theme }) => `${theme.spacing(3)}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`};
  @media (${props => props.theme.breakpoints.md}) {
    display: flex;
  }
  @media (${props => props.theme.breakpoints.xl}) {
    padding-top: ${({ theme }) => `${theme.spacing(4)}`};
    padding-bottom: ${({ theme }) => `${theme.spacing(4)}`};
  }
`;
