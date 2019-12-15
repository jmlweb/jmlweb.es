import React from 'react';
import { Link } from 'gatsby';

import styles from './cta.module.css';

const InternalCTA = ({ url, children }) => (
  <Link to={url} className={styles.cta}>
    {children}
  </Link>
);

export default InternalCTA;
