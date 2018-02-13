import React from 'react';
import PT from 'prop-types';

import StyledRow from '../../../../../StyledRow';

const StyledWrapper = StyledRow.extend`
  margin-top: ${props => (props.mini ? 0 : props.theme.spacing(2))};
  padding-bottom: ${props => (!props.mini ? props.theme.spacing(1) : 0)};
  @media (${props => props.theme.breakpoints.xl}) {
    &,
    & p {
      font-size: ${props => (props.mini ? props.theme.fontSize(1) : props.theme.fontSize(2))};
    }
  }
  @media (${props => props.theme.breakpoints.xxl}) {
    &,
    & p {
      font-size: ${props => (props.mini ? props.theme.fontSize(2) : props.theme.fontSize(3))};
    }
  }
`;

const Body = ({ mini, children }) => (
  <StyledWrapper
    mini={mini}
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
);

Body.propTypes = {
  children: PT.node.isRequired,
};

export default Body;
