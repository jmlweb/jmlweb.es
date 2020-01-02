import React from 'react';
import classNames from 'classnames';

import styles from './content-item.module.css';

const externalProps = {
  rel: 'external',
  target: '_blank',
};

const Link = ({ link, external, children }) => {
  const props = external ? externalProps : {};
  return (
    <a href={link} {...props}>
      {children}
    </a>
  );
};

const ContentItem = ({ title, subtitle, extra, link, external }) => (
  <article className={styles.main}>
    <div className={styles.titleBlock}>
      <h3
        className={classNames({
          [styles.title]: true,
          [styles.onlyTitle]: !subtitle,
        })}
      >
        <Link link={link} external={external}>
          {title}
        </Link>
      </h3>
    </div>
    {subtitle && (
      <div className={styles.subtitleBlock}>
        <p className={styles.subtitle}>
          <Link link={link} external={external}>
            {subtitle}
          </Link>
        </p>
      </div>
    )}
    <div
      className={classNames({
        [styles.extraBlock]: true,
        [styles.onlyTitle]: !subtitle,
      })}
    >
      <p className={styles.extra}>{extra}</p>
    </div>
  </article>
);

export default ContentItem;
