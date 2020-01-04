import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import styles from './home-section.module.css';

const HomeSection = ({ title, children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <section
      className={classNames({
        [styles.section]: true,
        [styles.invisible]: inView === false,
      })}
      ref={ref}
    >
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default HomeSection;
