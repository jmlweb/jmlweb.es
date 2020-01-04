import React from 'react';

import ExternalLink from '../external-link';
import styles from './social-links.module.css';
import twitterIcon from './twitter.svg';
import githubIcon from './github.svg';
import linkedInIcon from './linkedin.svg';

const SocialLinks = () => (
  <nav>
    <ExternalLink
      href="https://twitter.com/jmlweb"
      className={styles.socialLink}
    >
      <img src={twitterIcon} alt="Twitter" />
    </ExternalLink>
    <ExternalLink
      href="https://github.com/jmlweb"
      className={styles.socialLink}
    >
      <img src={githubIcon} alt="Github" />
    </ExternalLink>
    <ExternalLink
      href="https://www.linkedin.com/in/josemanuellucas/"
      className={styles.socialLink}
    >
      <img src={linkedInIcon} alt="LinkedIn" />
    </ExternalLink>
  </nav>
);

export default SocialLinks;
