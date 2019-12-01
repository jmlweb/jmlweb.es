import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from '../wrapper';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Wrapper className={styles.wrapper}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/blog">
          Blog
        </Link>
        <Link className={styles.link} to="/talks">
          Talks
        </Link>
        <Link className={styles.link} to="/projects">
          Projects
        </Link>
        <Link className={styles.link} to="/info">
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
