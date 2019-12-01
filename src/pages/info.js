import React from 'react';
import { Link } from 'gatsby';

import { Page } from '../components';

const Info = () => (
  <Page title="Info">
    <p>Please, don't write more boring stuff</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
);

export default Info;
