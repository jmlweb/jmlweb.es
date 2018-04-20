import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text, { TextLink } from '../Text';
import Heading from '../Heading';

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const CardTitle = ({ title, to, px }) => {
  const LinkWrapper = to ? TextLink : Text;
  return (
    <StyledHeading level={1} mb={0}>
      {
        <LinkWrapper
          display="block"
          color="white"
          to={to}
          bg={to ? 'primary' : 'gray.1'}
          px={px}
          py={[2, 2, 4]}
        >
          {title}
        </LinkWrapper>
      }
    </StyledHeading>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  px: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
};

CardTitle.defaultProps = {
  to: undefined,
};

export default CardTitle;
