import React from 'react';
import PropTypes from 'prop-types';

import FlexGrid from '../FlexGrid';
import Box from '../Box';
import { TextLink } from '../Text';

const getLinks = (title, permalink) =>
  [
    {
      title: 'Facebook',
      to: permalink,
    },
    {
      title: 'Twitter',
      to: permalink,
    },
  ].map(v => (
    <Box key={v.title} mr={3}>
      <TextLink rel="external" target="_blank" to={v.to}>
        {v.title}
      </TextLink>
    </Box>
  ));

const CardSocial = ({ title, permalink, px }) =>
  permalink && (
    <FlexGrid px={px}>
      <Box mr={3}>Compartir en: </Box>
      {getLinks(title, permalink)}
    </FlexGrid>
  );

CardSocial.propTypes = {
  title: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
};

export default CardSocial;
