import StyledRow from '../../../StyledRow';

export default StyledRow.extend`
  @media (${props => props.theme.breakpoints.lg}) {
    flex: 2;
    width: 66.6%;
  }
`;
