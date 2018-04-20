import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const CardContent = ({ children, px }) => (
  <Box px={px} py={[2, 2, 4]}>
    {children}
  </Box>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
    .isRequired,
};

export default CardContent;
