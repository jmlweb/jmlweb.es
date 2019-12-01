import React from 'react';
import { Link } from 'gatsby';

import { Page } from '../components';

const Blog = () => (
  <Page title="Blog">
    <p>Technical articles and all that shit</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
);

export default Blog;
