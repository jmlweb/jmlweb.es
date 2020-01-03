import React from 'react';
import classNames from 'classnames';

import {
  Container,
  ItemCard,
  SectionTitle,
  SectionWrapper,
} from '../../components';

import styles from './home-projects.module.css';

const HomeProjects = ({ posts }) => (
  <SectionWrapper>
    <Container>
      <SectionTitle>Featured projects</SectionTitle>
      <div className={styles.list}>
        {posts.map(({ node }) => (
          <ItemCard
            key={node.id}
            type="project"
            title={node.frontmatter.title}
            url={node.frontmatter.url}
            footerText={node.frontmatter.url}
          >
            <p>{node.excerpt}</p>
          </ItemCard>
        ))}
      </div>
    </Container>
  </SectionWrapper>
);

export default HomeProjects;
