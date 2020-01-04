import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import ExternalLink from '../external-link';
import styles from './content-item.module.css';

const ProperLink = ({ link, external, children, hrefLang }) => {
  if (external) {
    return (
      <ExternalLink href={link} hrefLang={hrefLang}>
        {children}
      </ExternalLink>
    );
  }
  return <Link to={link}>{children}</Link>;
};

const ProperHeader = ({ small, children, ...props }) => {
  if (small) {
    return <h3 {...props}>{children}</h3>;
  }
  return <h2 {...props}>{children}</h2>;
};

const ContentItem = ({
  title,
  subtitle,
  extra,
  link,
  external,
  small,
  lang,
}) => (
  <article className={styles.main}>
    <header className={styles.titleBlock}>
      <ProperHeader
        small={small}
        className={classNames({
          [styles.title]: true,
          [styles.onlyTitle]: !subtitle,
        })}
        lang={lang}
      >
        <ProperLink link={link} external={external} hrefLang={lang}>
          {title}
        </ProperLink>
      </ProperHeader>
    </header>
    {subtitle && (
      <div className={styles.subtitleBlock}>
        <p className={styles.subtitle} lang={lang}>
          <ProperLink link={link} external={external} hrefLang={lang}>
            {subtitle}
          </ProperLink>
        </p>
      </div>
    )}
    <footer
      className={classNames({
        [styles.extraBlock]: true,
        [styles.onlyTitle]: !subtitle,
      })}
    >
      <p className={styles.extra}>{extra}</p>
    </footer>
  </article>
);

export default ContentItem;
