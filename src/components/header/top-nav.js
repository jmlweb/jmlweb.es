import React from 'react';
import { Link } from 'gatsby';

import styles from './top-nav.module.css';

const TopNavLink = ({ to, children, partiallyActive, hidden }) => (
  <Link
    className={styles.link}
    activeClassName={styles.linkActive}
    partiallyActive={partiallyActive}
    to={to}
    tabIndex={hidden ? '-1' : undefined}
  >
    {children}
  </Link>
);

const TopNav = ({ hidden }) => (
  <nav>
    <TopNavLink partiallyActive to="/blog" hidden={hidden}>
      Blog
    </TopNavLink>
    <TopNavLink to="/talks" hidden={hidden}>
      Talks
    </TopNavLink>
    <TopNavLink to="/projects" hidden={hidden}>
      Projects
    </TopNavLink>
    <TopNavLink to="/info" hidden={hidden}>
      Info
    </TopNavLink>
  </nav>
);

export default TopNav;
