import React from 'react';

import Header from '../../header';
import Seo from '../../seo';
import Footer from '../../footer';
import ContentItem from '../../content-item';
import Pagination from '../../pagination';
import styles from './talks-list.module.css';

const TalksList = ({ futureTalks, pastTalks, currentPage, numPages }) => (
  <div className={styles.talksList}>
    <Seo title="Future and past talks" />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>Future and past talks</h1>
      <div className={styles.grid}>
        {futureTalks.map(({ node }) => (
          <ContentItem
            key={node.id}
            title={node.frontmatter.conference}
            link={node.frontmatter.url}
            subtitle={node.frontmatter.title}
            extra={
              <time dateTime={node.frontmatter.rawDate}>
                {node.frontmatter.date}
              </time>
            }
            external
          />
        ))}
        {pastTalks.map(({ node }) => (
          <ContentItem
            key={node.id}
            title={node.frontmatter.conference}
            link={node.frontmatter.url}
            subtitle={node.frontmatter.title}
            extra={
              <time dateTime={node.frontmatter.rawDate}>
                {node.frontmatter.date}
              </time>
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
