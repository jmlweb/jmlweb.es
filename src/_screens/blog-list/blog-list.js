import React from 'react';

import { Container, Page, Pagination, PostResume } from '../../components';
import styles from './blog-list.module.css';

const BlogList = ({ posts, currentPage, numPages }) => (
  <Page title="Blog">
    <Container>
      <h1 className={styles.title}>Blog & recommended</h1>
      <div>
        {posts.map(({ node }) => (
          <PostResume
            key={node.fields.slug}
            url={node.fields.slug}
            title={node.frontmatter.title || node.fields.slug}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
          />
        ))}
      </div>
      <Pagination prefix="blog" currentPage={currentPage} numPages={numPages} />
    </Container>
  </Page>
);

export default BlogList;
