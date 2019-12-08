import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from '../wrapper';
import { Logo } from '../logo';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Wrapper className={styles.wrapper}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.link}>
          <Logo />
        </Link>
      </h1>
      <nav className={styles.nav}>
        <Link
          className={styles.link}
          activeClassName={styles.linkActive}
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
    </Wrapper>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
