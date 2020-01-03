import React from 'react';
import { Container, Page } from '../../components';

import styles from './blog-post.module.css';

const BlogPost = ({ post }) => (
  <Page title={post.frontmatter.title}>
    <Container>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <div className={styles.headerExtra}>
            <time dateTime={post.frontmatter.rawDate} className={styles.date}>
              {post.frontmatter.date}
            </time>
            <span className={styles.readingTime}>
              Reading time: <strong>{post.timeToRead} min</strong>
            </span>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Container>
  </Page>
);

export default BlogPost;
