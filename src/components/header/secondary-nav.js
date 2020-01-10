import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import styles from './secondary-nav.module.css';

const SecondaryNavLink = ({ to, children, partiallyActive }) => (
  <Link
    className={styles.link}
    activeClassName={styles.linkActive}
    partiallyActive={partiallyActive}
    to={to}
  >
    {children}
  </Link>
);

const SecondaryNav = ({ visible }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={classNames({
          [styles.trigger]: true,
          [styles.visible]: visible,
        })}
      >
        menu
      </button>
      <div
        className={classNames({
          [styles.secondaryNav]: true,
          [styles.open]: isOpen,
        })}
      >
        <button onClick={() => setIsOpen(false)} className={styles.close}>
          close
        </button>
        <nav>
          <SecondaryNavLink to="/">Home</SecondaryNavLink>
          <SecondaryNavLink partiallyActive to="/blog">
            Blog
          </SecondaryNavLink>
          <SecondaryNavLink partiallyActive to="/talks">
            Talks
          </SecondaryNavLink>
          <SecondaryNavLink partiallyActive to="/projects">
            Projects
          </SecondaryNavLink>
          <SecondaryNavLink to="/info">Info</SecondaryNavLink>
        </nav>
      </div>
    </>
  );
};

export default SecondaryNav;
