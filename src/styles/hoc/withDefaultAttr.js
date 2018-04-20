import React from 'react';

import theme from '../theme';

export default attrKey => WrappedComponent => props => (
  <WrappedComponent px={theme.attrs[attrKey]} {...props} />
);
