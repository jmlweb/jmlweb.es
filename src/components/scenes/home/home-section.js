import React from 'react';

import styles from './home-section.module.css';

const HomeSection = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

export default HomeSection;
