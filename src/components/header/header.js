import { Link } from 'gatsby';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Logo } from '../logo';
import styles from './header.module.css';

import TopNav from './top-nav';
import SecondaryNav from './secondary-nav';

const Header = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
  });
  const hidden = inView === false;
  return (
    <>
      <header
        className={classNames({
          [styles.header]: true,
          [styles.invisible]: hidden,
        })}
        ref={ref}
        aria-hidden={hidden}
      >
        <Link
          to="/"
          className={styles.logoLink}
          tabIndex={inView === false ? '-1' : undefined}
        >
          <Logo />
        </Link>
        <TopNav hidden={hidden} />
      </header>
      <SecondaryNav visible={entry && inView === false} />
    </>
  );
};

export default Header;
