import React from 'react';
import classNames from 'classnames';

import { Container, ItemCard, Page, Pagination } from '../../components';
import styles from './talks-list.module.css';

const TalksList = ({ futureTalks, pastTalks, currentPage, numPages }) => (
  <Page title="Talks">
    <Container>
      <h1 className={styles.title}>Future and past talks</h1>
      {futureTalks.length > 0 && (
        <div className={styles.list}>
          {futureTalks.map(({ node }) => (
            <ItemCard
              key={node.id}
              type="talk"
              title={node.frontmatter.title}
              url={node.frontmatter.url}
              footerText={node.frontmatter.conference}
              titleAs="h2"
            >
              <p className={styles.date}>{node.frontmatter.date}</p>
              <p>
                <strong>Language:</strong>{' '}
                {node.frontmatter.language === 'en' ? 'english' : 'spanish'},{' '}
                <strong>Type:</strong> {node.frontmatter.type}
              </p>
            </ItemCard>
          ))}
          <ItemCard
            type="talk"
            title="Your event"
            url="mailto:josemanuel@jmlweb.es"
            footerText="Contact me"
            titleAs="h2"
          >
            <p className={styles.date}>soon</p>
            <p>I love to talk at conferences at events. Drop me a line!</p>
          </ItemCard>
        </div>
      )}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Talk</th>
              <th className={styles.th}>Conference</th>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Lang</th>
              <th className={styles.th}>Extra</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {pastTalks.map(({ node }) => (
              <tr key={node.id} className={styles.tr}>
                <td
                  className={classNames(styles.td, styles.tdDate)}
                  data-label="Date"
                >
                  {node.frontmatter.rawDate}
                </td>
                <td
                  className={classNames(styles.td, styles.tdTitle)}
                  data-label="Title"
                >
                  <h3 className={styles.tableTitle}>
                    {node.frontmatter.title}
                  </h3>
                </td>
                <td className={styles.td} data-label="Conference">
                  <a
                    href={node.frontmatter.url}
                    rel="external noopener noreferrer"
                    target="_blank"
                  >
                    {node.frontmatter.conference}
                  </a>
                </td>
                <td className={styles.td} data-label="Type">
                  {node.frontmatter.type}
                </td>
                <td className={styles.td} data-label="Language">
                  {node.frontmatter.language}
                </td>
                <td className={styles.td} data-label="Extra">
                  {node.frontmatter.slides && (
                    <p>
                      <a href={node.frontmatter.slides}>Slides</a>
                    </p>
                  )}
                  {node.frontmatter.video && (
                    <p>
                      <a href={node.frontmatter.video}>Video</a>
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        prefix="talks"
        currentPage={currentPage}
        numPages={numPages}
      />
    </Container>
  </Page>
);

export default TalksList;
