import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text';

import { sharedStyles } from '../../styles';

const CleanedText = ({ level, ...props }) => <Text {...props} />;

CleanedText.propTypes = {
  level: PropTypes.number.isRequired,
};

const StyledHeading = styled(CleanedText)`
  ${props => sharedStyles.headings(props.level)};
`;

const Heading = ({ level, tag, children }) => (
  <StyledHeading is={tag || `h${level}`} level={level}>
    {children}
  </StyledHeading>
);

Heading.defaultProps = {
  level: 1,
  tag: undefined,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
};

export default withTheme(Heading);
