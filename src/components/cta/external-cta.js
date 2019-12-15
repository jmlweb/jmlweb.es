import React from 'react';

import styles from './cta.module.css';

const ExternalCTA = ({ url, children }) => (
  <a href={url} className={styles.cta} rel="external" target="_blank">
    {children}
  </a>
);

export default ExternalCTA;
