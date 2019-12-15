import React from 'react';

import styles from './section-title.module.css';

const SectionTitle = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

export default SectionTitle;
