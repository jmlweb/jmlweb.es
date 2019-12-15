import React from 'react';

import { SectionTitle } from '../../components';
import { Container, PostResume, SectionWrapper } from '../../components';

const HomeBlog = ({ posts }) => (
  <SectionWrapper>
    <Container>
      <SectionTitle>Latest posts</SectionTitle>
      {posts.map(({ node }) => (
        <PostResume
          key={node.id}
          url={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          tags={node.frontmatter.tags}
        />
      ))}
    </Container>
  </SectionWrapper>
);

export default HomeBlog;
