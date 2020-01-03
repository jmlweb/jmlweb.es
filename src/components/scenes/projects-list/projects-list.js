import React from 'react';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import ContentItem from '../../content-item';
import Pagination from '../../pagination';
import styles from './projects-list.module.css';

const TalksList = ({ posts, currentPage, numPages }) => (
  <div className={styles.talksList}>
    <Seo title="Personal & Open Source projects" />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>Personal & Open Source projects</h1>
      <div className={styles.grid}>
        {posts.map(({ node }) => (
          <ContentItem
            key={node.id}
            title={node.frontmatter.title}
            link={node.frontmatter.url}
            subtitle={node.excerpt}
            extra={
              <a
                href={node.frontmatter.url}
                rel="external noopener noreferrer"
                target="_blank"
              >
                {node.frontmatter.url}
              </a>
            }
            external
          />
        ))}
      </div>
      <Pagination
        prefix="talks"
        currentPage={currentPage}
        numPages={numPages}
      />
    </main>
    <Footer />
  </div>
);

export default TalksList;
