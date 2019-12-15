import React from 'react';

import styles from './section-wrapper.module.css';

const SectionWrapper = ({ children }) => (
  <section className={styles.wrapper}>{children}</section>
);

export default SectionWrapper;
