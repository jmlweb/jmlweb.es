import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import { InternalCTA } from '../cta';
import styles from './post-resume.module.css';

const PostResume = ({ url, title, excerpt, tags = [] }) => (
  <article className={styles.post}>
    <h3 className={classNames([styles.title, 'h2'])}>
      <Link to={url}>{title}</Link>
    </h3>
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
    <p>{excerpt}</p>
    <p>
      <InternalCTA url={url}>Read article</InternalCTA>
    </p>
  </article>
);

export default PostResume;
