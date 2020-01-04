import React from 'react';

import StandardPage from '../../standard-page';
import ContentGrid from '../../content-grid';
import ContentItem from '../../content-item';
import Pagination from '../../pagination';

const BlogList = ({ posts, currentPage, numPages }) => (
  <StandardPage title="Blog & recommended">
    <ContentGrid>
      {posts.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.subtitle || node.excerpt}
          link={node.fields.slug}
          extra={`${node.timeToRead} minutes`}
        />
      ))}
    </ContentGrid>
    <Pagination prefix="blog" currentPage={currentPage} numPages={numPages} />
  </StandardPage>
);

export default BlogList;
