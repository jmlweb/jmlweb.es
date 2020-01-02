import React from 'react';

import styles from './social-links.module.css';
import twitterIcon from './twitter.svg';
import githubIcon from './github.svg';
import linkedInIcon from './linkedin.svg';

const SocialLinks = () => (
  <nav>
    <a
      href="https://twitter.com/jmlweb"
      rel="external"
      target="_blank"
      className={styles.socialLink}
    >
      <img src={twitterIcon} alt="Twitter" />
    </a>
    <a
      href="https://github.com/jmlweb"
      rel="external"
      target="_blank"
      className={styles.socialLink}
    >
      <img src={githubIcon} alt="Github" />
    </a>
    <a
      href="https://www.linkedin.com/in/josemanuellucas/"
      rel="external"
      target="_blank"
      className={styles.socialLink}
    >
      <img src={linkedInIcon} alt="LinkedIn" />
    </a>
  </nav>
);

export default SocialLinks;
