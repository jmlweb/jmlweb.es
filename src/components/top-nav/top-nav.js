import React from 'react';
import { Link } from 'gatsby';

import styles from './top-nav.module.css';

const TopNav = () => (
  <nav>
    <Link
      className={styles.link}
      activeClassName={styles.linkActive}
      partiallyActive
      to="/blog"
    >
      Blog
    </Link>
    <Link
      className={styles.link}
      activeClassName={styles.linkActive}
      to="/talks"
    >
      Talks
    </Link>
    <Link
      className={styles.link}
      activeClassName={styles.linkActive}
      to="/projects"
    >
      Projects
    </Link>
    <Link
      className={styles.link}
      activeClassName={styles.linkActive}
      to="/info"
    >
      Info
    </Link>
  </nav>
);

export default TopNav;
