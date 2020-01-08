import React from 'react';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import MainImg from '../../main-img';
import styles from './blog-post.module.css';
import '../../../css/prism.css';

const BlogPost = ({ post }) => (
  <div className={styles.blogPost}>
    <Seo title={post.frontmatter.title} description={`Article about ${post.frontmatter.tags.join(', ')} | José Manuel Lucas. Frontend Engineer`} />
    <Header />
    <main className={styles.main}>
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
      <div className={styles.content}>
        <h2>{post.frontmatter.subtitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </main>
    <Footer />
    <MainImg />
  </div>
);

export default BlogPost;
