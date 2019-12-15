import React from 'react';

import { Container, ItemCard, Page, Pagination } from '../../components';
import styles from './projects-list.module.css';

const ProjectsList = ({ posts, currentPage, numPages }) => (
  <Page title="Projects">
    <Container>
      <h1 className={styles.title}>Personal & Open Source projects</h1>
      <div className={styles.list}>
        {posts.map(({ node }) => (
          <ItemCard
            key={node.id}
            type="project"
            title={node.frontmatter.title}
            titleAs="h2"
            url={node.frontmatter.url}
            footerText={node.frontmatter.url}
          >
            <p>{node.excerpt}</p>
          </ItemCard>
        ))}
      </div>
      <Pagination
        prefix="projects"
        currentPage={currentPage}
        numPages={numPages}
      />
    </Container>
  </Page>
);

export default ProjectsList;
