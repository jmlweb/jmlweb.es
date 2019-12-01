import React from 'react';
import { Link } from 'gatsby';

import { Page } from '../components';

const Talks = () => (
  <Page title="Talks">
    <p>List of talks divided by year</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
);

export default Talks;
