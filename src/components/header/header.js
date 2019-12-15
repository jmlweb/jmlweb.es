import { Link } from 'gatsby';
import React from 'react';

import { Container } from '../container';
import { Logo } from '../logo';
import styles from './header.module.css';

import { TopNav } from '../top-nav';

const Header = () => (
  <div className={styles.wrapper}>
    <Container>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <TopNav />
      </header>
    </Container>
  </div>
);

export default Header;
