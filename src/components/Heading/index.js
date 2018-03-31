import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const StyledHeading = Text.extend`
  margin: 0;
  ${props => props.fontSize <= 1 && 'text-transform: uppercase'};
  line-height: ${props => 1.3 - (props.fontSize - 6) * 0.05};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

const Heading = ({ level, children }) => (
  <StyledHeading is={`h${level}`} fontSize={6 - level}>
    {children}
  </StyledHeading>
);

Heading.defaultProps = {
  level: 1,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
};

export default Heading;
