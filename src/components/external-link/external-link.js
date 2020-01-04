import React from 'react';

const ExternalLink = ({ href, children, ...props }) => (
  <a href={href} {...props} rel="external noopener noreferrer" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
