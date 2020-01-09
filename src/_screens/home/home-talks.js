import React from 'react';
import classNames from 'classnames';

import {
  Container,
  ItemCard,
  SectionTitle,
  SectionWrapper,
} from '../../components';

import styles from './home-talks.module.css';

const HomeTalks = ({ posts }) => {
  if (!posts.length) {
    return null;
  }
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>Next talks</SectionTitle>
        <div className={styles.list}>
          {posts.map(({ node }) => (
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
                {node.frontmatter.language === 'en' ? 'English' : 'Spanish'},{' '}
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
            <p>I love to talk at conferences and events. Drop me a line!</p>
          </ItemCard>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default HomeTalks;
