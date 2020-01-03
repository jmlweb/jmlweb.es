import React from 'react';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import ContentItem from '../../content-item';
import Pagination from '../../pagination';
import styles from './blog-list.module.css';

const BlogList = ({ posts, currentPage, numPages }) => (
  <div className={styles.blogList}>
    <Seo title="Blog & recommended" />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>Blog & recommended</h1>
      <div className={styles.grid}>
        {posts.map(({ node }) => (
          <ContentItem
            key={node.id}
            title={node.frontmatter.title}
            link={node.fields.slug}
            extra={`${node.timeToRead} minutes`}
          />
        ))}
      </div>
      <Pagination prefix="blog" currentPage={currentPage} numPages={numPages} />
    </main>
    <Footer />
  </div>
);

export default BlogList;
