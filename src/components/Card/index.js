import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

import Box from '../Box';
import Heading from '../Heading';

const StyledWrapper = styled(Box).attrs({
  bg: 'gray.5',
  p: 2,
})`
  max-width: ${props => props.theme.sizes.contentMax};
`;

const ExternalLink = ({ to, children }) => <a href={to}>{children}</a>;

const Card = ({ title, link, is }) => {
  const Link = link.slice(0, 4) === 'http' ? ExternalLink : GatsbyLink;
  const wrapWithLink = content =>
    (link ? <Link to={link}>{content}</Link> : content);
  return (
    <StyledWrapper is={is}>
      <Box is="header">
        {title && <Heading level={1}>{wrapWithLink(title)}</Heading>}
      </Box>
    </StyledWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  is: PropTypes.string,
};

Card.defaultProps = {
  title: undefined,
  is: 'article',
};

export default Card;
