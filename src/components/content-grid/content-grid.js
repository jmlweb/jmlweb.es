import React from 'react';

import styles from './content-grid.module.css';

const ContentGrid = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);

export default ContentGrid;
