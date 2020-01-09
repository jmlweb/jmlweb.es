import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import SocialLinks from '../social-links';

import styles from './footer.module.css';

const Footer = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
  });
  return (
    <footer
      className={classNames({
        [styles.footer]: true,
        [styles.invisible]: entry && inView === false,
      })}
      ref={ref}
    >
      <p className={styles.footerName}>
        José Manuel Lucas, {new Date().getFullYear()}
      </p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
